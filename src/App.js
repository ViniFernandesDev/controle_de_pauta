import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Container from './components/container/Container'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>

      <Container>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </Container>      

    </Router>
    
    
  )
}

export default App;
