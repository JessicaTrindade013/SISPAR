import NavBar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Deletar from "../../assets/Solicitacao/deletar.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import Check from "../../assets/Solicitacao/check.png";

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
                <label htmlFor="Nome Completo">Nome Completo</label>
                <input type="text" />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="Empresa">Empresa</label>
                <input type="text" />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="Nº Prest. Contas">Nº Prest. Contas</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="Descrição / Motivo do Reembolso">Descrição / Motivo do Reembolso</label>
                <textarea name="motivoReembolso" id="motivoReembolso">
                  {" "}
                </textarea>
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>

              <div className={styles.inputData}>
                <label htmlFor="Data">Data</label>                
                <input type="date" id="data" name="data" placeholder="DD/MM/AAAA" /> 
              </div>

              <div className={styles.despesas}>
                <label htmlFor="Tipo de Despesa"> Tipo de Despesa</label>
                
                <select name="tipoDespesa" id="tipoDespesa">
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
                <label htmlFor="Centro de custo"> Centro de custo </label>
                
                <select name="centroCusto" id="centroCusto" required>
                <option value="" disabled selected>Selecionar </option>
                <option value="">1100109002 -   FIN CONTROLES INTERNOS MTZ</option>
                <option value="">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                <option value="">1100110102 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>
              <div className={styles.inputOrdem}>
                <label htmlFor="Ord. Int"> Ord. Int </label>
                <input type="number" />
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor="Div."> Div. </label>
                <input type="number" />
              </div>

              <div className={styles.inputPep}>
                <label htmlFor="PEP"> PEP </label>
                <input type="number" />
              </div>

              <div className={styles.inputMoeda}>
                <label htmlFor="Moeda"> Moeda </label>
                <input type="text" />
              </div>

              <div className={styles.inputDistanciaKm}>
                <label htmlFor="Dist/Km"> Dist/Km </label>
                <input type="text" />
              </div>

              <div className={styles.inputValorKm}>
                <label htmlFor="Valor/Km"> Valor/Km </label>
                <input type="number" />
              </div>

              <div className={styles.inputFaturamento}>
                <label htmlFor="Val.Faturado"> Val.Faturado </label>
                <input type="number" />
              </div>

              <div className={styles.inputDespesa}>
                <label htmlFor="Despesa"> Despesa </label>
                <input type="number" />
              </div>

              <div className={styles.salvarDeletar}>
                <button type="submit" className={styles.buttonSalvar}>
                  
                  <h2> + Salvar</h2>
                </button>
              
              <button className={styles.buttonDeletar}>
                  <img src={Deletar} alt="Botão mais" />                  
                </button>
              </div>
            </div>
          </form>
                    
            <table>
              <thead>
                
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
                  
               
              </thead>
              <tbody>
                <tr>
                  <td><img src={Lixeira} alt="Excluir solicitação"></img></td>
                  <td>Vitor Carvalho</td>
                  <td>WSS001</td>
                  <td>329456</td>
                  <td>08/01/2025</td>
                  <td><img src={Motivo} alt="Arquivo de pedido"></img></td>
                  <td>Desp. de viagem administrativa</td>
                  <td>1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</td>
                  <td>0003</td>
                  <td>002</td>
                  <td>001</td>
                  <td>BRL</td>
                  <td>434Km</td>
                  <td>0.65</td>
                  <td>242.10</td>
                  <td>40.05</td>
                </tr>
                <tr>
                  <td><img src={Lixeira} alt="Icone lixeira"></img></td>
                  <td>Vanessa Portugal</td>
                  <td>WSS002</td>
                  <td>987789</td>
                  <td>01/01/2025</td>
                  <td><img src={Motivo} alt="Icone lixeira"></img></td>
                  <td>Desp. de viagem administrativa</td>
                  <td>1100110102 - FIN CONTABILIDADE MTZ</td>
                  <td>0002</td>
                  <td>005</td>
                  <td>001</td>
                  <td>ARS</td>
                  <td>289Km</td>
                  <td>0.37</td>
                  <td>106.93</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td><img src={Lixeira} alt="Icone lixeira"></img></td>
                  <td>Washington Klinglon</td>
                  <td>WSS003</td>
                  <td>546791</td>
                  <td>03/01/2025</td>
                  <td><img src={Motivo} alt="Icone lixeira"></img></td>
                  <td>Eventos de apresentação</td>
                  <td>1100109002 - FIN CONTROLES INTERNOS MTZ</td>
                  <td>0001</td>
                  <td>005</td>
                  <td>001</td>
                  <td>USD</td>
                  <td>197Km</td>
                  <td>0.75</td>
                  <td>109.75</td>
                  <td>29.97</td>
                </tr>
                <tr className={styles.espacoTable}>     
                </tr>
                  </tbody> 
                  <tfoot> 
                  <div className={styles.divRodape}>                
                  <div className={styles.inputTotalFaturado}>
                <label htmlFor="">Total Faturado</label>
                <input type="text" name="valor" id="valor" placeholder=" 0,00" />
              </div>
              <div className={styles.inputTotalDespesa}>
                <label htmlFor="">Total Despesa</label>
                <input type="text" name="valor" id="valor" placeholder=" 0,00"/>
              </div>
              <button className={styles.buttonCheck}>
                <img src={Check} alt="Ícone de check"/>
                <h2> Enviar para Análise</h2>

              </button>
              <button className={styles.buttonCancelar}>
              <h2>X Cancelar Solicitação</h2>
              </button>
              </div>
             
                  </tfoot>             
                </table>  
        </main>
        
      </div>
    </div>
  );
}
export default Solicitacao;