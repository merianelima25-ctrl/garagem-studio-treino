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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });
    return () => unsubscribe();
  }, []);

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

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      setErro("");
    } catch (e) {
      setErro(e.message);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const concluirTreino = async () => {
    await addDoc(collection(db, "progresso"), {
      userId: user.uid,
      treino: treinoSelecionado.nome,
      data: new Date(),
    });

    alert("Treino concluído 💪");
  };

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

  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
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
            <p style={{ color: "#aaa", fontSize: 16 }}>
              {exercicioSelecionado.series}
            </p>

            <div style={styles.carousel}>
              {exercicioSelecionado.imagens?.map((img, i) => (
                <img key={i} src={img} style={styles.img} />
              ))}
            </div>

            {exercicioSelecionado.video && (
              <iframe
                src={exercicioSelecionado.video}
                title="Video"
                frameBorder="0"
                allowFullScreen
                style={styles.video}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    background: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loginBox: {
    background: "#1e293b",
    padding: 30,
    borderRadius: 12,
    width: "100%",
    maxWidth: 320,
    textAlign: "center",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  },
  title: {
    color: "#22c55e",
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#aaa",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    border: "none",
  },
  button: {
    width: "100%",
    padding: 12,
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
    width: "100%",
    minHeight: "100vh",
    background: "#0f172a",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },

  wrapper: {
    width: "100%",
    maxWidth: 420,
    margin: "0 auto",
    padding: 16,
    display: "flex",
    flexDirection: "column",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
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
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    cursor: "pointer",
    fontSize: 16,
  },

  back: {
    marginBottom: 15,
    background: "#334155",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: 6,
  },

  done: {
    background: "#22c55e",
    border: "none",
    padding: 14,
    borderRadius: 10,
    color: "#fff",
    marginBottom: 20,
    cursor: "pointer",
    width: "100%",
    fontSize: 16,
  },

  carousel: {
    display: "flex",
    gap: 10,
    marginTop: 20,
    justifyContent: "center",
  },

  img: {
    width: "48%",
    height: 140,
    objectFit: "cover",
    borderRadius: 12,
  },

  video: {
    width: "100%",
    height: 260,
    marginTop: 20,
    borderRadius: 12,
  },
};