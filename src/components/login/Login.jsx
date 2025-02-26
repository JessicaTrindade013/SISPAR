import { useNavigate } from "react-router-dom";
import Capa from "../../assets/TelaLogin/imagemcapa.png";
import Logo from "../../assets/TelaLogin/logo-ws.png";
import styles from "./Login.module.scss";

function Login (){

    const navigate = useNavigate () 

    const irParaReembolso = () => {
        navigate("/reembolsos");
    };
    
    return (
        
        <main > 
         <section className={styles.containerLogin}>
         <img src={Capa} alt="Navio cargueiro"/>
           </section>         
            
            <section className={styles.containerForm} >
                <img src={Logo} alt="Logo da Wilson,Sons"/>
                <h1> Boas vindas ao Novo Portal SISPAR </h1>
                <p> Sistema de Emissão de Boletos e Parcelamentos </p>
            
            <form className={styles.formLogin}action="">        

              
                <input type="email" name="email" id="email" placeholder=" Email" />                                              
                <input type="Password" name="senha" id="senha" placeholder=" Senha" />     


                <a href=""> Esqueci minha senha</a>

                <div className={styles.divButton}>
                    <button onClick={irParaReembolso} className={styles.buttonEntrar}> Entrar </button>
                    <button className={styles.buttonCriar}> Criar conta</button>
                </div>
                
            </form>
            </section>
        </main>
    )
}

export default Login