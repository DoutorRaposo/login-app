import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function acessar() {
    if (email === 'eduardo.lino@pucpr.br' && senha === '123456') {
      setMensagem('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <div className="formulario-login">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={acessar}>Acessar</button>
      </div>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
