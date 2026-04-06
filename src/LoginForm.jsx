import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  function acessar() {
    if (email === "eduardo.lino@pucpr.br" && senha === "123456") {
      setMensagem("Acessado com sucesso!");
    } else {
      setMensagem("Usuário ou senha incorretos!");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div>
        <button onClick={acessar}>Acessar</button>
      </div>
      <p>{mensagem}</p>
    </div>
  );
}

export default LoginForm;
