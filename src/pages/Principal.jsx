import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

function Principal() {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/");
        return;
      }
      const snap = await getDoc(doc(db, "usuarios", user.uid));
      if (snap.exists()) {
        setDados(snap.data());
      }
      setCarregando(false);
    });
    return unsub;
  }, [navigate]);

  async function sair() {
    await signOut(auth);
    navigate("/");
  }

  if (carregando) {
    return (
      <div className="container">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Página Principal</h1>
      {dados ? (
        <div className="dados-usuario">
          <p><strong>Nome:</strong> {dados.nome}</p>
          <p><strong>Sobrenome:</strong> {dados.sobrenome}</p>
          <p><strong>Data de Nascimento:</strong> {dados.dataNascimento.split("-").reverse().join("/")}</p>
        </div>
      ) : (
        <p>Dados do usuário não encontrados.</p>
      )}
      <div className="form-group">
        <button onClick={sair}>Sair</button>
      </div>
    </div>
  );
}

export default Principal;
