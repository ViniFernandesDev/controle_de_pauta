import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/inicial/Home'
import Clientes from './pages/clientes/Clientes'
import Campanhas from './pages/campanhas/Campanhas'
import Container from './components/container/Container'
import Navbar from './components/navbar/Navbar'
import AddJob from './pages/inicial/AddJob'

import ContextValueAPI from './context/Context';

/* CUSTOM HOOK FETCH API */
import { useFetchGet } from "./components/hooks/useFetchGet";

function App() {

  /* FETCH JOBS */
  const urlJobs = "http://laravelapi-pauta.com.l.stph.srv.br/api/jobs";
  const {value: jobs} = useFetchGet(urlJobs);

  /* FETCH JOBS */
  const urlClientes = "http://laravelapi-pauta.com.l.stph.srv.br/api/clients";
  const {value: clients, loadingClients} = useFetchGet(urlClientes);

  /* FETCH CAMPANHAS */
  const urlCampanhas = "http://laravelapi-pauta.com.l.stph.srv.br/api/campaigns";
  const {value: campaigns} = useFetchGet(urlCampanhas);

   /* FETCH Status */
   const urlStatus = "http://laravelapi-pauta.com.l.stph.srv.br/api/status";
   const {value: status} = useFetchGet(urlStatus);

   /* FETCH Status */
   const urlPriorities = "http://laravelapi-pauta.com.l.stph.srv.br/api/priorities";
   const {value: priorities} = useFetchGet(urlPriorities);

   const urlUsers = "http://laravelapi-pauta.com.l.stph.srv.br/api/users";
    const {value: users} = useFetchGet(urlUsers);

  return (
    <Router>
      <Navbar/>

      <Container>
        <ContextValueAPI.Provider value={{jobs, clients, loadingClients, campaigns, status, priorities, users}}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/campanhas" element={<Campanhas />} />
              <Route path="/job/:id" element={<AddJob />} />
          </Routes>
        </ContextValueAPI.Provider>
      </Container>      

    </Router>
    
    
  )
}

export default App;
