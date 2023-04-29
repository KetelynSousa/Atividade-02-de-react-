
import logo from '../imagens/viagens.jpg';
import lupa from '../imagens/lupa.png';

import {Link} from 'react-router-dom'
import styles from './Header.module.css';
function Header() {
    return (
        <header>
            <div id={styles.Header_part1}>
                <img src={logo} alt='logo' />
            </div>
            <nav id={styles.header_part2}>
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/GrandCanyon'>Grand Canyon</Link></li>
                    <li><Link to='/Escocia'>Escócia</Link></li>
                    <li><Link to='/Muralha'>Muralha da China</Link></li>
                    <li><Link to='/Aruba'>Aruba</Link></li>
                </ul>
                <input type='search' />
            </nav>
            <div id={styles.header_part3}>
                <img src={lupa} alt='lupa' />
            </div>
        </header>
    )
}

export default Header