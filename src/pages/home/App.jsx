import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    
    <div className="container">   
      <form>
        <h1>Cadastro de Usuários</h1>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Senha" />
        <input type="text" placeholder="Confirmar Senha" />
        <button>Cadastrar</button>
      </form>

      <p>
        <Link to="/forgot-password" style={{ color: "#fff" }}>
          Esqueceu a senha? Clique aqui!
        </Link>
      </p>
    </div>
  );
}

export default App;
