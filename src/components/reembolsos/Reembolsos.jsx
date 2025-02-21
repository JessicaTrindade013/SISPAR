import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Solicitar from "../../assets/Dashboard/Solicitar - Reembolso.png";
import Analise from "../../assets/Dashboard/Análises.png";
import Historico from "../../assets/Dashboard/Solicitar - Histórico.png";
import Analises from "../../assets/Dashboard/N-Análises.png";
import Aprovados from "../../assets/Dashboard/N-Aprovados.png";
import Rejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import Solicitados from "../../assets/Dashboard/N-Solicitados.png";
import styles from "./Reembolsos.module.scss";
import NavBar from "../navbar/NavBar.jsx";

function Reembolsos() {
  return (
    
    <div className={styles.containerReembolsos}>
      <NavBar />

      <div>
      <header>
        <img src={Home} alt="Casinha da header" />
        <img src={Seta} alt="Setinha da header" />
        <p>Reembolsos</p>
      </header>
      <main className={styles.mainReembolsos}>
       <div >
         <h1>Sistema de Reembolsos</h1>
        </div>
        <div >
        <p className={styles.pReembolsos}>
          Solicite novos pedidos de reembolso, visualize solicitações em análise
          e todo o histórico.
        </p>
       </div>
       

        <section className={styles.containerCards}>
          <article>
            <img src={Solicitar} alt="" />
            <h3>Solicitar Reembolso</h3>
          </article>

          <article>
            <img src={Analise} alt="" />
            <h3>Verificar análises</h3>
          </article>

          <article>
            <img src={Historico} alt="" />
            <h3>Histórico</h3>
          </article>
        </section>

        <section className={styles.containerStatus}>
          <div className={styles.divImagens}>
            <img className={styles.imgSolicitados} src={Solicitados} alt="" />
            <h4>182</h4>
            <p>Solicitados</p>
          </div>

          <div className={styles.divImagens}>
            <img className={styles.imgAnalises} src={Analises} alt="" />
            <h4>74</h4>
            <p>Em análise</p>
          </div>

          <div className={styles.divImagens}>
            <img className={styles.imgAprovados} src={Aprovados} alt="" />
            <h4>195</h4>
            <p>Aprovados</p>
          </div>

          <div className={styles.divImagens}>
            <img className={styles.imgRejeitados} src={Rejeitados} alt="" />
            <h4>41</h4>
            <p>Rejeitados</p>
          </div>

        </section>
      </main>
      </div>
    </div>
  );
}
export default Reembolsos;