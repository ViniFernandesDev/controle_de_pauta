import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/inicial/Home'
import Clientes from './pages/clientes/Clientes'
import Campanhas from './pages/campanhas/Campanhas'
import Container from './components/container/Container'
import Navbar from './components/navbar/Navbar'
import AddJob from './pages/inicial/AddJob'

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

function App() {
  return (
    <Router>
      <Navbar/>

      <Container>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/campanhas" element={<Campanhas />} />
            <Route path="/job/:id" element={<AddJob />} />
        </Routes>
      </Container>      

    </Router>
    
    
  )
}

export default App;
