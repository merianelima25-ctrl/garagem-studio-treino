import { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  collection,
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

  // 🔥 NOVO: divisão ABCDE
  const diasTreino = [
    { letra: "A", nome: "Costas e Bíceps" },
    { letra: "B", nome: "Inferiores" },
    { letra: "C", nome: "Peito e Tríceps" },
    { letra: "D", nome: "Ombro e Trapézio" },
    { letra: "E", nome: "Inferiores" },
  ];

  const hoje = new Date().getDay();
  const treinoHoje = diasTreino[hoje % diasTreino.length];

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
      <header style={styles.header}>
        <div>
          <h2 style={styles.titleTop}>Olá 👋</h2>

          <p style={styles.subtitleTop}>
            Treinos concluídos: {treinosFeitos}
          </p>

          {/* 🔥 NOVO: treino do dia */}
          <p style={styles.week}>
            Hoje: {treinoHoje.letra} - {treinoHoje.nome}
          </p>
        </div>

        <button style={styles.logout} onClick={handleLogout}>
          Sair
        </button>
      </header>

      <div style={styles.wrapper}>
        {!treinoSelecionado &&
          treinos.map((treino) => (
            <div
              key={treino.id}
              style={styles.card}
              onClick={() => setTreinoSelecionado(treino)}
            >
              {treino.nome}
            </div>
          ))}

        {treinoSelecionado && !exercicioSelecionado && (
          <>
            <button
              onClick={() => setTreinoSelecionado(null)}
              style={styles.back}
            >
              ← Voltar
            </button>

            <h2 style={styles.sectionTitle}>
              {treinoSelecionado.nome}
            </h2>

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
          <div style={styles.exerciseContainer}>
            <button
              onClick={() => setExercicioSelecionado(null)}
              style={styles.back}
            >
              ← Voltar
            </button>

            <h2 style={styles.sectionTitle}>
              {exercicioSelecionado.nome}
            </h2>

            <p style={styles.series}>
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
          </div>
        )}
      </div>
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
  },

  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: 16,
  },

  titleTop: {
    fontSize: 20,
    fontWeight: "bold",
  },

  subtitleTop: {
    color: "#aaa",
    fontSize: 14,
  },

  // 🔥 NOVO ESTILO
  week: {
    fontSize: 15,
    color: "#4ade80",
    fontWeight: "bold",
    marginTop: 4,
  },

  logout: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },

  series: {
    color: "#ccc",
    marginBottom: 10,
    fontSize: 16,
  },

  card: {
    background: "#1e293b",
    padding: 18,
    borderRadius: 12,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  back: {
    background: "#334155",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    color: "#fff",
  },

  exerciseContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  carousel: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },

  img: {
    width: "48%",
    aspectRatio: "16/9",
    objectFit: "cover",
    borderRadius: 12,
  },

  video: {
    width: "100%",
    aspectRatio: "16/9",
    borderRadius: 12,
  },
};