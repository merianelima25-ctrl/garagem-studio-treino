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
  addDoc,
  deleteDoc,
  doc,
  getDocs,
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

  const [tempo, setTempo] = useState(0);
  const [rodando, setRodando] = useState(false);

  const [serieAtual, setSerieAtual] = useState(1);
  const [concluido, setConcluido] = useState(false);

  const [verHistorico, setVerHistorico] = useState(false);
  const [historico, setHistorico] = useState([]);

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

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "historico"),
      where("userId", "==", user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHistorico(lista);
    });

    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    let interval;

    if (rodando && tempo > 0) {
      interval = setInterval(() => {
        setTempo((prev) => prev - 1);
      }, 1000);
    }

    if (tempo === 0 && rodando) {
      setRodando(false);

      new Audio(
        "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
      ).play();

      if (navigator.vibrate) {
        navigator.vibrate([300, 200, 300]);
      }
    }

    return () => clearInterval(interval);
  }, [rodando, tempo]);

  useEffect(() => {
    setSerieAtual(1);
    setConcluido(false);
    setTempo(0);
    setRodando(false);
  }, [exercicioSelecionado]);

  const iniciarDescanso = (segundos) => {
    setTempo(segundos);
    setRodando(true);
  };

  const proximaSerie = () => {
    const total = parseInt(exercicioSelecionado.series);

    if (serieAtual < total) {
      setSerieAtual((prev) => prev + 1);
    } else {
      setConcluido(true);
    }
  };

  const salvarConclusao = async () => {
    const hoje = new Date().toLocaleDateString();

    const q = query(
      collection(db, "historico"),
      where("userId", "==", user.uid),
      where("exercicio", "==", exercicioSelecionado.nome),
      where("dataString", "==", hoje)
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      alert("Você já salvou esse treino hoje!");
      return;
    }

    await addDoc(collection(db, "historico"), {
      userId: user.uid,
      exercicio: exercicioSelecionado.nome,
      data: new Date(),
      dataString: hoje,
    });
  };

  const excluirItem = async (id) => {
    if (!window.confirm("Deseja excluir esse treino?")) return;
    await deleteDoc(doc(db, "historico", id));
  };

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

  if (verHistorico) {
    return (
      <div style={styles.app}>
        <button style={styles.back} onClick={() => setVerHistorico(false)}>
          ← Voltar
        </button>

        <h2 style={styles.sectionTitle}>Histórico</h2>

        {historico.length === 0 && (
          <p style={{ color: "#aaa" }}>Nenhum treino ainda</p>
        )}

        {historico.map((item) => (
          <div key={item.id} style={styles.card}>
            <p>{item.exercicio}</p>

            <p style={{ fontSize: 12, color: "#aaa" }}>
              {item.data?.seconds
                ? new Date(item.data.seconds * 1000).toLocaleDateString()
                : ""}
            </p>

            <button
              onClick={() => excluirItem(item.id)}
              style={{
                marginTop: 10,
                background: "red",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                borderRadius: 6,
              }}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }

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

          <p style={styles.week}>
            Hoje: {treinoHoje.letra} - {treinoHoje.nome}
          </p>
        </div>

        <div>
          <button
            style={styles.historyBtn}
            onClick={() => setVerHistorico(true)}
          >
            📊
          </button>

          <button style={styles.logout} onClick={handleLogout}>
            Sair
          </button>
        </div>
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

            <p style={styles.series}>
              Descanso: {exercicioSelecionado.descanso}s
            </p>

            <button
              style={styles.done}
              onClick={() =>
                iniciarDescanso(exercicioSelecionado.descanso)
              }
            >
              ⏱ Iniciar descanso
            </button>

            {tempo > 0 && (
              <p style={styles.timer}>{tempo}s</p>
            )}

            <p style={styles.series}>
              Série atual: {serieAtual}
            </p>

            {!concluido ? (
              <button style={styles.done} onClick={proximaSerie}>
                Próxima série
              </button>
            ) : (
              <button style={styles.done} onClick={salvarConclusao}>
                Salvar progresso
              </button>
            )}

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