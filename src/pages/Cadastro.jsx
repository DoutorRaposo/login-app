import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../firebase";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  async function cadastrar() {
    if (!email || !senha || !nome || !sobrenome || !dataNascimento) {
      setMensagem("Preencha todos os campos!");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, "usuarios", uid), {
        uid,
        nome,
        sobrenome,
        dataNascimento,
      });

      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setMensagem("Este e-mail já está cadastrado!");
      } else if (error.code === "auth/weak-password") {
        setMensagem("A senha deve ter pelo menos 6 caracteres!");
      } else {
        setMensagem("Erro ao cadastrar: " + error.message);
      }
    }
  }

  return (
    <div className="container">
      <h1>Cadastro</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          placeholder="Data de Nascimento"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      {mensagem && <p className="mensagem-erro">{mensagem}</p>}
      <p className="link-texto">
        Já tem conta? <Link to="/">Fazer login</Link>
      </p>
    </div>
  );
}

export default Cadastro;
