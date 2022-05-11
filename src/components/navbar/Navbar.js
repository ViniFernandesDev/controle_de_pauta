import {Link} from 'react-router-dom'
import Container from '../container/Container'
import styles from './Navbar.module.css'

import logo from '../../assets/img/logo.png'

function Navbar() {
    return (
      <nav className={styles.navbar}>    
        
          <Container>
                <Link to="./">
                    <img src={logo} alt="Logo" />
                </Link>

                <ul className={styles.list}>
                    <li><Link to="/">Tarifário</Link></li>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/campanhas">Campanhas</Link></li>
                </ul>
          </Container>
          
      </nav>
    )
}

export default Navbar