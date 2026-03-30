import { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

import treinos from "./data/treinos";

export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const [treinoSelecionado, setTreinoSelecionado] = useState(null);
  const [exercicioSelecionado, setExercicioSelecionado] = useState(null);

  const [treinosFeitos, setTreinosFeitos] = useState(0);

  // 🔐 LOGIN
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });
    return () => unsubscribe();
  }, []);

  // 📊 BUSCAR PROGRESSO
  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "progresso"),
      where("userId", "==", user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTreinosFeitos(snapshot.size);
    });

    return () => unsubscribe();
  }, [user]);

  // 🔥 LOGIN CORRIGIDO
  const handleLogin = async () => {
    try {
      console.log("Tentando login...");

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

      console.log("LOGADO:", userCredential.user);

      setErro("");
    } catch (e) {
      console.error("ERRO FIREBASE:", e.code);
      console.error("DETALHE:", e.message);

      setErro(e.message);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  // ✅ MARCAR TREINO
  const concluirTreino = async () => {
    await addDoc(collection(db, "progresso"), {
      userId: user.uid,
      treino: treinoSelecionado.nome,
      data: new Date(),
    });

    alert("Treino concluído 💪");
  };

  // 🔐 LOGIN UI
  if (!user) {
    return (
      <div style={styles.container}>
        <div style={styles.loginBox}>
          <h1 style={styles.title}>
            Garagem <span style={{ color: "#4ade80" }}>Studio</span>
          </h1>

          <p style={styles.subtitle}>Acesse seu treino</p>

          <input
            style={styles.input}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          {erro && <p style={styles.error}>{erro}</p>}

          <button style={styles.button} onClick={handleLogin}>
            Entrar
          </button>
        </div>
      </div>
    );
  }

  // 🔥 SISTEMA
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div>
          <h2>Olá 👋</h2>
          <p style={{ color: "#aaa" }}>
            Treinos concluídos: {treinosFeitos}
          </p>
        </div>

        <button style={styles.logout} onClick={handleLogout}>
          Sair
        </button>
      </header>

      {!treinoSelecionado && (
        <>
          <h2>Seus treinos</h2>
          {treinos.map((treino) => (
            <div
              key={treino.id}
              style={styles.card}
              onClick={() => setTreinoSelecionado(treino)}
            >
              {treino.nome}
            </div>
          ))}
        </>
      )}

      {treinoSelecionado && !exercicioSelecionado && (
        <>
          <button
            onClick={() => setTreinoSelecionado(null)}
            style={styles.back}
          >
            ← Voltar
          </button>

          <h2>{treinoSelecionado.nome}</h2>

          <button style={styles.done} onClick={concluirTreino}>
            ✅ Concluir treino
          </button>

          {treinoSelecionado.exercicios.map((ex, i) => (
            <div
              key={i}
              style={styles.card}
              onClick={() => setExercicioSelecionado(ex)}
            >
              {ex.nome}
            </div>
          ))}
        </>
      )}

      {exercicioSelecionado && (
        <>
          <button
            onClick={() => setExercicioSelecionado(null)}
            style={styles.back}
          >
            ← Voltar
          </button>

          <h2>{exercicioSelecionado.nome}</h2>
          <p style={{ color: "#aaa" }}>{exercicioSelecionado.series}</p>

          <div style={styles.carousel}>
            {exercicioSelecionado.imagens?.map((img, i) => (
              <img key={i} src={img} style={styles.img} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  loginBox: {
    background: "#1e293b",
    padding: 30,
    borderRadius: 12,
    width: 300,
    textAlign: "center",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  },

  title: {
    color: "#22c55e",
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#aaa",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    border: "none",
  },

  button: {
    width: "100%",
    padding: 10,
    background: "#22c55e",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },

  error: {
    color: "red",
    fontSize: 12,
  },

  app: {
    padding: 20,
    background: "#0f172a",
    minHeight: "100vh",
    color: "#fff",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  logout: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
  },

  card: {
    background: "#1e293b",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    cursor: "pointer",
  },

  back: {
    marginBottom: 10,
    background: "#334155",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
  },

  done: {
    background: "#22c55e",
    border: "none",
    padding: 10,
    borderRadius: 8,
    color: "#fff",
    marginBottom: 15,
    cursor: "pointer",
  },

  carousel: {
    display: "flex",
    gap: 10,
    marginTop: 10,
  },

  img: {
    width: 200,
    borderRadius: 10,
  },
};