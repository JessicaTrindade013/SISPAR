import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/login/Login.jsx"
import "./global.scss"
import Reembolsos from "./components/reembolsos/Reembolsos.jsx"
import Solicitacao from "./components/solicitacao/Solicitacao.jsx"

function App(){
  return(

<BrowserRouter>
<Routes>

  <Route path="/" element={<Login /> } />
  <Route path="/reembolsos" element={<Reembolsos /> } />
  <Route path="/solicitacao" element={<Solicitacao /> } />


</Routes>
</BrowserRouter>

  )
}

export default App;