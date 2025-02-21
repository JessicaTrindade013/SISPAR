import NavBar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Deletar from "../../assets/Solicitacao/deletar.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png"
import Motivo from "../../assets/Solicitacao/motivo.png"

function Solicitacao() {
  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />
      <div className={styles.containerPrincipalSolicitacao}>
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="vetor da casinha" />
          <img src={Seta} alt="vetor da setinha" />
          <p>Reembolsos</p>
          <img src={Seta} alt="vetor da setinha" />
          <p>Solicitação de Reembolso</p>
        </header>

        <main className={styles.mainSolicitacao}>
          <form className={styles.formSolicitacao}>
            <div className={styles.grupo1}>
              <div className={styles.inputNome}>
                <label htmlFor="">Nome Completo</label>
                <input type="text" />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input type="text" />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                <textarea name="" id="">
                  {" "}
                </textarea>
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>                
                <input type="date" name="" id="" />                
                                
              </div>

              <div className={styles.despesas}>
                <label htmlFor=""> Tipo de Despesa</label>
                
                <select name="" id="">
                <option value="" disabled selected>Selecionar </option>
                  <option value=""> Alimentação</option>
                  <option value="">Combustível</option>
                  <option value="">Condução</option>
                  <option value="">Estacionamento</option>
                  <option value="">Viagem administrativa</option>
                  <option value="">Viagem operacional</option>
                  <option value="">Eventos de representação</option>                  
                </select>
              </div>

              <div className={styles.custo}>
                <label htmlFor=""> Centro de custo</label>
                
                <select name="" id="">
                <option value="" disabled selected>Selecionar </option>
                <option value="">1100109002 -   FIN CONTROLES INTERNOS MTZ</option>
                <option value="">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                <option value="">1100110102 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>
              <div className={styles.inputOrdem}>
                <label htmlFor="">Ord. Int</label>
                <input type="number" />
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor="">Div.</label>
                <input type="number" />
              </div>

              <div className={styles.inputPep}>
                <label htmlFor="">PEP</label>
                <input type="number" />
              </div>

              <div className={styles.inputMoeda}>
                <label htmlFor="">Moeda</label>
                <input type="text" />
              </div>

              <div className={styles.inputDistanciaKm}>
                <label htmlFor="">Dist/Km</label>
                <input type="text" />
              </div>

              <div className={styles.inputValorKm}>
                <label htmlFor="">Valor/Km</label>
                <input type="number" />
              </div>

              <div className={styles.inputFaturamento}>
                <label htmlFor="">Val.Faturado</label>
                <input type="number" />
              </div>

              <div className={styles.inputDespesa}>
                <label htmlFor="">Despesa</label>
                <input type="number" />
              </div>

              <div className={styles.salvarDeletar}>
                <button className={styles.buttonSalvar}>
                  
                  <h2> + Salvar</h2>
                </button>
              
              <button className={styles.buttonDeletar}>
                  <img src={Deletar} alt="Botão mais" />                  
                </button>
              </div>
            </div>
          </form>
                    
            <table className={styles.Tables}>
              <thead>
                <tr>
                  <th></th>
                  <th>Colaborador(a)</th>
                  <th>Empresa</th>
                  <th>NºPrest.</th>
                  <th>Data</th>
                  <th>Motivo</th>
                  <th>Tipo de despesa</th>
                  <th>Ctr. Custo</th>
                  <th>Ord. Int.</th>
                  <th>Div.</th>
                  <th>PEP</th>
                  <th>Moeda</th>
                  <th>Dist. Km</th>
                  <th>Val. Km</th>
                  <th>Val. Faturado</th>
                  <th>Despesa</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src={Lixeira} alt="Icone lixeira"></img></td>
                  <td>Vitor Carvalho</td>
                  <td>WSS001</td>
                  <td>329456</td>
                  <td>08/01/2025</td>
                  <td><img src={Motivo} alt="Icone lixeira"></img></td>
                  <td>Desp. de viagem</td>
                  <td>1100110002</td>
                  <td>0003</td>
                  <td>002</td>
                  <td>001</td>
                  <td>BRL</td>
                  <td>434Km</td>
                  <td>0.65</td>
                  <td>242.10</td>
                  <td>40.05</td>
                </tr>

              </tbody>
              
            </table>
         


        </main>
        
      </div>
    </div>
  );
}
export default Solicitacao;