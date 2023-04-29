import styles from './Aruba.module.css';
import Texto from "./Texto";

function Aruba() {
    return (
        <div id={styles.aruba}>
            <Texto local='Aruba' texto='Praias paradisíacas, mar cristalino, hóteis requintados, cassinos e programação para toda a família são alguns dos atrativos de Aruba.' />
        </div>
    )
}

export default Aruba