import {Link} from 'react-router-dom'
import Container from '../container/Container'
import styles from './Navbar.module.css'

function Navbar() {
    return (
      <nav className={styles.navbar}>    
        
          <Container>
                <ul className={styles.list}>
                    <li><Link to="/">Listagem</Link></li>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/campanhas">Campanhas</Link></li>
                </ul>
          </Container>
          
      </nav>
    )
}

export default Navbar