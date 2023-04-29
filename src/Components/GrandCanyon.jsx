import styles from './GrandCanyon.module.css';
import Texto from './Texto';

function GrandCanyon() {
    return (
        <section id={styles.grand_canyon}>
            <Texto local='GrandCanyon' texto='O Grand Canyon fica no estado do Arizona e é cortado pelo não tão tímido assim Rio Colorado, e forma uma paisagem mais imponente e impactante pessoalmente do que qualquer imagem possa representar. Por isso mesmo, ele é um dos passeios mais procurados por quem visita Las Vegas, que fica no estado vizinho, Nevada.' />
        </section>
    )
}

export default GrandCanyon