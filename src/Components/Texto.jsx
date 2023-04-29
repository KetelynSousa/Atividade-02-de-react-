import styles from './Texto.module.css';

import logo from '../imagens/viagens.jpg';

function Texto(props) {
    return(
        <div id={styles.bloco}>
            <h1>Venha Explorar esse lugar incrível {props.local}</h1>
            <p>{props.texto}</p>
            <div><img src={logo} alt='logo' /></div>
        </div>
    )
}

export default Texto