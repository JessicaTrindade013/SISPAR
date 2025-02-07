import Capa from "../../assets/Tela Login/imagem tela de login.png"
import Logo from "../../assets/Tela Login/logo-ws.png"

function Login (){
    return (
        <main>
            <section>
            <p></p>
            </section>
            <section>
                <img src={Logo} alt="Logo da Wilson,Sons"/>
                <h1>Boas vindas ao Novo Portal SISPAR</h1>
                <p>Sistema de Emissão de Boletos e Parcelamentos</p>
            </section>
            <form action="">
                <div>
                <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div>
                <input type="Password" name="senha" id="senha" placeholder="Senha" />
                </div>

                <a href="">Esqueci minha senha</a>
                <div>
                    <button>Entrar</button>
                    <button>Criar conta</button>
                </div>
            </form>
        </main>
    )
}

export default Login