import styles from './Muralha.module.css'
import Texto from "./Texto";

function Muralha() {
    return (
        <div id={styles.muralha}>
            <Texto local='Muralha da China' texto='É a mais longa estrutura já construída pelo homem. Em 1987, a Organização das Nações Unidas (ONU) classificou o monumento como Patrimônio Histórico Mundial, protegendo-o contra os projetos de construção civil permitidos pelas leis chinesas. Tem 21.1976 Km de extensão e também é considerada uma das 7 maravilhas do mundo.' />
        </div>
    )
}

export default Muralha