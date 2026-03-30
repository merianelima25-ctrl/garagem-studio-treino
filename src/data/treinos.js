// 🔥 IMPORTS

// PEITO
import supino from "../assets/supino.jpeg";
import supino1 from "../assets/supino1.jpeg";
import supinoInclinado from "../assets/supino-inclinado.jpeg";
import supinoInclinado1 from "../assets/supino-inclinado1.jpeg";
import peckdeck from "../assets/peckdeck.jpeg";
import peckdeck1 from "../assets/peckdeck1.jpeg";
import pullover from "../assets/pullover.jpeg";
import pullover1 from "../assets/pullover1.jpeg";

// TRÍCEPS
import tricepsPulley from "../assets/triceps-pulley.jpeg";
import tricepsPulley1 from "../assets/triceps-pulley1.jpeg";
import tricepsCorda from "../assets/triceps-corda.jpeg";
import tricepsCorda1 from "../assets/triceps-corda1.jpeg";
import tricepsCoice from "../assets/triceps-coice.jpeg";
import tricepsCoice1 from "../assets/triceps-coice1.jpeg";
import tricepsSupinado from "../assets/triceps-supinado.jpeg";
import tricepsSupinado1 from "../assets/triceps-supinado1.jpeg";

// BÍCEPS
import roscaAlternada from "../assets/rosca-alternada.jpeg";
import roscaAlternada1 from "../assets/rosca-alternada1.jpeg";
import roscaConcentrada from "../assets/rosca-concentrada.jpeg";
import roscaConcentrada1 from "../assets/rosca-concentrada1.jpeg";
import roscaDireta from "../assets/rosca-direta.jpeg";
import roscaDireta1 from "../assets/rosca-direta1.jpeg";
import roscaScott from "../assets/rosca-scott.jpeg";
import roscaScott1 from "../assets/rosca-scott1.jpeg";

// OMBRO
import desenvolvimento from "../assets/desenvolvimento.jpeg";
import desenvolvimento1 from "../assets/desenvolvimento1.jpeg";
import elevacaoFrontal from "../assets/elevacao-frontal.jpeg";
import elevacaoFrontal1 from "../assets/elevacao-frontal1.jpeg";
import elevacaoLateralPolia from "../assets/elevacao-lateral-polia.jpeg";
import elevacaoLateralPolia1 from "../assets/elevacao-lateral-polia1.jpeg";
import elevacaoLateral from "../assets/elevacao-lateral.jpeg";
import elevacaoLateral1 from "../assets/elevacao-lateral.jpeg";

// COSTAS
import remadaBaixa from "../assets/remada-baixa.jpeg";
import remadaBaixa1 from "../assets/remada-baixa1.jpeg";
import puxadaTriangulo from "../assets/puxada-triangulo.jpeg";
import puxadaTriangulo1 from "../assets/puxada-triangulo1.jpeg";
import puxadaAlta from "../assets/puxada-alta.jpeg";
import puxadaAlta1 from "../assets/puxada-alta1.jpeg";
import pulldown from "../assets/pulldown.jpeg";
import pulldown1 from "../assets/pulldown1.jpeg";

// TRAPÉZIO
import encolhimento from "../assets/encolhimento.jpeg";
import encolhimento1 from "../assets/encolhimento1.jpeg";
import remadaAltaHalteres from "../assets/remada-alta-halteres.jpeg";
import remadaAltaHalteres1 from "../assets/remada-alta-halteres1.jpeg";

// 🔥 TREINOS
export const treinos = [
  {
    id: 1,
    nome: "Treino Peito",
    exercicios: [
      { nome: "Supino Reto", series: "4x10", imagens: [supino, supino1], video: "https://www.youtube.com/embed/EZMYCLKuGow", descanso: 60, },
      { nome: "Supino Inclinado", series: "3x10", imagens: [supinoInclinado, supinoInclinado1], video: "https://www.youtube.com/embed/WP1VLAt8hbM",  descanso: 60, },
      { nome: "Peck Deck", series: "3x12", imagens: [peckdeck, peckdeck1], video: "https://www.youtube.com/embed/FzCnfD0gOXo",  descanso: 60, },
      { nome: "Pullover", series: "3x12", imagens: [pullover, pullover1], video: "https://www.youtube.com/embed/-KaMXMMIVrU?si=gcmGTs-TAxew6CIR",  descanso: 60, },
    ],
  },

  {
    id: 2,
    nome: "Treino Tríceps",
    exercicios: [
      { nome: "Tríceps Pulley", series: "4x10", imagens: [tricepsPulley, tricepsPulley1], video: "https://www.youtube.com/embed/2-LAMcpzODU" },
      { nome: "Tríceps Corda", series: "3x12", imagens: [tricepsCorda, tricepsCorda1], video: "https://www.youtube.com/embed/vB5OHsJ3EME" },
      { nome: "Tríceps Coice", series: "3x12", imagens: [tricepsCoice, tricepsCoice1], video: "https://www.youtube.com/embed/6SS6K3lAwZ8" },
      { nome: "Tríceps Supinado", series: "3x12", imagens: [tricepsSupinado, tricepsSupinado1], video: "https://www.youtube.com/embed/qnL6h6XgE0k" },
    ],
  },

  {
    id: 3,
    nome: "Treino Bíceps",
    exercicios: [
      { nome: "Rosca Alternada", series: "4x10", imagens: [roscaAlternada, roscaAlternada1], video: "https://www.youtube.com/embed/sAq_ocpRh_I" },
      { nome: "Rosca Concentrada", series: "3x12", imagens: [roscaConcentrada, roscaConcentrada1], video: "https://www.youtube.com/embed/soxrZlIl35U" },
      { nome: "Rosca Direta", series: "4x10", imagens: [roscaDireta, roscaDireta1], video: "https://www.youtube.com/embed/kwG2ipFRgfo" },
      { nome: "Rosca Scott", series: "3x12", imagens: [roscaScott, roscaScott1], video: "https://www.youtube.com/embed/zC3nLlEvin4" },
    ],
  },

  {
    id: 4,
    nome: "Treino Ombro",
    exercicios: [
      { nome: "Desenvolvimento", series: "4x10", imagens: [desenvolvimento, desenvolvimento1], video: "https://www.youtube.com/embed/B-aVuyhvLHU" },
      { nome: "Elevação Frontal", series: "3x12", imagens: [elevacaoFrontal, elevacaoFrontal1], video: "https://www.youtube.com/embed/-t7fuZ0KhDA" },
      { nome: "Elevação Lateral", series: "3x12", imagens: [elevacaoLateral, elevacaoLateral1], video: "https://www.youtube.com/embed/3VcKaXpzqRo" },
      { nome: "Elevação Polia", series: "3x12", imagens: [elevacaoLateralPolia, elevacaoLateralPolia1], video: "https://www.youtube.com/embed/3VcKaXpzqRo" },
    ],
  },

  {
    id: 5,
    nome: "Treino Costas",
    exercicios: [
      { nome: "Remada Baixa", series: "4x10", imagens: [remadaBaixa, remadaBaixa1], video: "https://www.youtube.com/embed/GZbfZ033f74" },
      { nome: "Puxada Triângulo", series: "3x12", imagens: [puxadaTriangulo, puxadaTriangulo1], video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Puxada Alta", series: "3x12", imagens: [puxadaAlta, puxadaAlta1], video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Pulldown", series: "3x12", imagens: [pulldown, pulldown1], video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
    ],
  },

  {
    id: 6,
    nome: "Treino Trapézio",
    exercicios: [
      { nome: "Encolhimento", series: "4x12", imagens: [encolhimento, encolhimento1], video: "https://www.youtube.com/embed/jt8z7Yy9s5M" },
      { nome: "Remada Alta", series: "3x12", imagens: [remadaAltaHalteres, remadaAltaHalteres1], video: "https://www.youtube.com/embed/Vl4nG6YpJ4E" },
    ],
  },
  {
    id: 7,
    nome: "Treino Inferiores iniciante A",
    exercicios: [
      { nome: "Agachamento", series: "4x8", video: "https://www.youtube.com/embed/GZbfZ033f74" },
      { nome: "Afundo", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Cadeira Extensora", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Leg Press 45", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Hack", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Panturrilha", series: "4x15", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
    ],
  },

  {
    id: 8,
    nome: "Treino Inferiores iniciante C",
    exercicios: [
      { nome: "Stiff", series: "4x8", video: "https://www.youtube.com/embed/GZbfZ033f74" },
      { nome: "Cadeira Flexora", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Mesa Flexora", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Sumô", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Gluteo na caneleira", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Abduçao", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Aduçao", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
    ],
  },

 {id: 9,
    nome: "Treino Inferiores iniciante E",
    exercicios: [
      { nome: "Agachamento", series: "4x8", video: "https://www.youtube.com/embed/GZbfZ033f74" },
      { nome: "Cadaeira Extensora", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Leg Press 45", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Stiff", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Flexão de Joelho em Pé", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { nome: "Coice na Polia", series: "4x8", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
         ],
        }
];

export default treinos;