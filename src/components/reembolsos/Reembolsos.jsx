import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Solicitar from "../../assets/Dashboard/Solicitar - Reembolso.png";
import Analise from "../../assets/Dashboard/Análises.png";
import Historico from "../../assets/Dashboard/Solicitar - Histórico.png";
import Analises from "../../assets/Dashboard/N-Análises.png";
import Aprovados from "../../assets/Dashboard/N-Aprovados.png";
import Rejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import Solicitados from "../../assets/Dashboard/N-Solicitados.png";
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png";
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
            <img src={Solicitar} alt="Solicitar reembolso" />
            <h2>Solicitar Reembolso</h2>
          </article>

          <article>
            <img src={Analise} alt="Verificar Análises" />
            <h2>Verificar análises</h2>
          </article>

          <article>
            <img src={Historico} alt="Histórico" />
            <h2>Histórico</h2>
          </article>
        </section>

        <section className={styles.containerStatus}>
          <div className={styles.divImagens}>
            <img className={styles.imgSolicitados} src={Solicitados} alt="Quantidade solicitada" />
            <h3>182</h3>
            <p>Solicitados</p>
          </div>

          <div className={styles.divImagens}>
            <img className={styles.imgAnalises} src={Analises} alt="Quantidade de análises" />
            <h3>74</h3>
            <p>Em análise</p>
          </div>

          <div className={styles.divImagens}>
            <img className={styles.imgAprovados} src={Aprovados} alt="Quantidade de aprovados" />
            <h3>195</h3>
            <p>Aprovados</p>
          </div>

          <div className={styles.divImagens}>
            <img className={styles.imgRejeitados} src={Rejeitados} alt="Quantidade de rejeitados" />
            <h3>41</h3>
            <p>Rejeitados</p>
          </div>

        </section>
        <div className={styles.divSistema}>
          <img src={Sistema} alt="Confirmação de sistema atualizado"/>
          <h2>Sistema atualizado.</h2>
        </div>
      </main>
      </div>
    </div>
  );
}
export default Reembolsos;