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
import elevacaoLateral1 from "../assets/elevacao-lateral1.jpeg";

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
    nome: "Treino Peito B",
    exercicios: [
      { nome: "Supino Reto", series: "4x10", imagens: [supino, supino1], video: "https://www.youtube.com/embed/EZMYCLKuGow", descanso: 60 },
      { nome: "Supino Inclinado", series: "3x10", imagens: [supinoInclinado, supinoInclinado1], video: "https://www.youtube.com/embed/WP1VLAt8hbM", descanso: 60 },
      { nome: "Peck Deck", series: "3x12", imagens: [peckdeck, peckdeck1], video: "https://www.youtube.com/embed/FzCnfD0gOXo", descanso: 60 },
      { nome: "Pullover", series: "3x12", imagens: [pullover, pullover1], video: "https://www.youtube.com/embed/-KaMXMMIVrU?si=gcmGTs-TAxew6CIR", descanso: 60 }
    ]
  },

  {
    id: 2,
    nome: "Treino Tríceps B",
    exercicios: [
      { nome: "Tríceps Pulley", series: "4x8", imagens: [tricepsPulley, tricepsPulley1], video: "https://www.youtube.com/embed/dTqDKC0D6P4", descanso: 60 },
      { nome: "Tríceps Corda", series: "4x8", imagens: [tricepsCorda, tricepsCorda1], video: "https://www.youtube.com/embed/dTqDKC0D6P4", descanso: 60 },
      { nome: "Tríceps Coice", series: "4x8", imagens: [tricepsCoice, tricepsCoice1], video: "https://www.youtube.com/embed/PyKv23F-fVM", descanso: 60 },
      { nome: "Tríceps Supinado", series: "4x8", imagens: [tricepsSupinado, tricepsSupinado1], video: "https://www.youtube.com/embed/dTqDKC0D6P4", descanso: 60 }
    ]
  },

  {
    id: 3,
    nome: "Treino Bíceps D",
    exercicios: [
      { nome: "Rosca Alternada", series: "4x8", imagens: [roscaAlternada, roscaAlternada1], video: "https://www.youtube.com/embed/S1HAcTVQVYE", descanso: 60 },
      { nome: "Rosca Concentrada", series: "4x8", imagens: [roscaConcentrada, roscaConcentrada1], video: "https://www.youtube.com/embed/EEpvOQAAtRo", descanso: 60 },
      { nome: "Rosca Direta", series: "4x8", imagens: [roscaDireta, roscaDireta1], video: "https://www.youtube.com/embed/Q8TqfD8E7BU", descanso: 60 },
      { nome: "Rosca Scott", series: "4x8", imagens: [roscaScott, roscaScott1], video: "https://www.youtube.com/embed/zpTK6eihdSA", descanso: 60 }
    ]
  },

  {
    id: 4,
    nome: "Treino Ombro F",
    exercicios: [
      { nome: "Desenvolvimento", series: "4x8", imagens: [desenvolvimento, desenvolvimento1], video: "https://www.youtube.com/embed/EuQAfhXBEvs", descanso: 60 },
      { nome: "Elevação Frontal", series: "4x8", imagens: [elevacaoFrontal, elevacaoFrontal1], video: [ "https://www.youtube.com/embed/NxSuojHZa8k", "https://www.youtube.com/embed/S7B5LwWrLA0" ], descanso: 60 },
      { nome: "Elevação Lateral", series: "4x8", imagens: [elevacaoLateral, elevacaoLateral1], video: "https://www.youtube.com/embed/IwWvZ0rlNXs", descanso: 60 },
      { nome: "Elevação Lateral Polia", series: "4x8", imagens: [elevacaoLateralPolia, elevacaoLateralPolia1], video: "https://www.youtube.com/embed/sKPJdvVvHuI", descanso: 60 }
    ]
  },

  {
    id: 5,
    nome: "Treino Costas D",
    exercicios: [
      { nome: "Remada Baixa", series: "4x10", imagens: [remadaBaixa, remadaBaixa1], video: "https://www.youtube.com/embed/OJU3u9JbH48", descanso: 60 },
      { nome: "Puxada Triângulo", series: "4x10", imagens: [puxadaTriangulo, puxadaTriangulo1], video: "https://www.youtube.com/embed/9FFLBDWXSZA", descanso: 60 },
      { nome: "Puxada Alta", series: "4x10", imagens: [puxadaAlta, puxadaAlta1], video: "https://www.youtube.com/embed/9FFLBDWXSZA", descanso: 60 },
      { nome: "Pulldown", series: "4x10", imagens: [pulldown, pulldown1], video: "https://www.youtube.com/embed/v6-QIOY0nW0", descanso: 60 }
    ]
  },

  {
    id: 6,
    nome: "Treino Trapézio F",
    exercicios: [
      { nome: "Encolhimento", series: "4x15", imagens: [encolhimento, encolhimento1], video: "https://www.youtube.com/embed/RhGjwIUe16E", descanso: 60 },
      { nome: "Remada Alta", series: "4x12", imagens: [remadaAltaHalteres, remadaAltaHalteres1], video: "https://www.youtube.com/embed/tm0IywBhIYM", descanso: 60 }
    ]
  },

  {
    id: 7,
    nome: "Treino Inferiores iniciante A",
    exercicios: [
      { nome: "Agachamento", series: "4x8", video: "https://www.youtube.com/embed/zgk71dUUt0Y", descanso: 90 },
      { nome: "Afundo", series: "4x8", video: "https://www.youtube.com/embed/Umzor-_g-tQ", descanso: 90 },
      { nome: "Cadeira Extensora", series: "4x8", video: "https://www.youtube.com/embed/el3oHblB5DM", descanso: 90 },
      { nome: "Leg Press 45", series: "4x8", video: "https://www.youtube.com/embed/nY8UsiAqwds", descanso: 90 },
      { nome: "Hack", series: "4x8", video: "https://www.youtube.com/embed/LeAgTrHfWuo", descanso: 90 },
      { nome: "Panturrilha", series: "4x15", video: "https://www.youtube.com/embed/nSUHPPd4If8", descanso: 90 }
    ]
  },

  {
    id: 8,
    nome: "Treino Inferiores iniciante C",
    exercicios: [
      { nome: "Stiff", series: "4x8", video: "https://www.youtube.com/embed/u1E3_u2gJYE", descanso: 90 },
      { nome: "Cadeira Flexora", series: "4x8", video: "https://www.youtube.com/embed/Zss6E3VU6X0", descanso: 90 },
      { nome: "Mesa Flexora", series: "4x8", video: "https://www.youtube.com/embed/2-ULaRrQa7c", descanso: 90 },
      { nome: "Sumô", series: "4x8", video: "https://www.youtube.com/embed/uSbxGCa71PU", descanso: 90 },
      { nome: "Gluteo na caneleira", series: "4x8", video: "https://www.youtube.com/embed/wE2iG00C-ao", descanso: 90 },
      { nome: "Cadeira Abdutora", series: "4x8", video: "https://www.youtube.com/embed/_vDDFsPbubs", descanso: 90 },
      { nome: "Cadeira Adutora", series: "4x8", video: "https://www.youtube.com/embed/B-2lEIr2sfs", descanso: 90 }
    ]
  },

  {
    id: 9,
    nome: "Treino Inferiores iniciante E",
    exercicios: [
      { nome: "Agachamento", series: "4x8", video: "https://www.youtube.com/embed/zgk71dUUt0Y", descanso: 90 },
      { nome: "Cadeira Extensora", series: "4x8", video: "https://www.youtube.com/embed/el3oHblB5DM", descanso: 90 },
      { nome: "Leg Press 45", series: "4x8", video: "https://www.youtube.com/embed/nY8UsiAqwds", descanso: 90 },
      { nome: "Stiff", series: "4x8", video: "https://www.youtube.com/embed/u1E3_u2gJYE", descanso: 90 },
      { nome: "Flexão de Joelho em Pé", series: "4x8", video: "https://www.youtube.com/embed/AqALAGcDvcI", descanso: 90 },
      { nome: "Coice na Polia", series: "4x8", video: "https://www.youtube.com/embed/XYCCcD0MxN8", descanso: 90 }
    ]
  },

  {
    id: 10,
    nome: "Treino isolado com progressão de carga A",
    exercicios: [
      { nome: "Cadeira Abdutora", series: "3x10-8-6", video: "https://www.youtube.com/embed/_vDDFsPbubs", descanso: 90 },
      { nome: "Agachamento", series: "3x10-8-6", video: "https://www.youtube.com/embed/zgk71dUUt0Y", descanso: 90 },
      { nome: "Afundo (step frente e atrás)", series: "3x10-8-6", video: "https://www.youtube.com/embed/Umzor-_g-tQ", descanso: 90 },
      { nome: "Cadeira Extensora", series: "3x10-8-6", video: "https://www.youtube.com/embed/el3oHblB5DM", descanso: 90 },
      { nome: "Leg Press", series: "3x10-8-6", video: "https://www.youtube.com/embed/nY8UsiAqwds", descanso: 90 },
      { nome: "Agachamento Taça", series: "3x10-8-6", video: "https://www.youtube.com/embed/isSu2co__oY", descanso: 90 }
    ]
  },

  {
    id: 11,
    nome: "Treino isolado com progressão de carga C",
    exercicios: [
      { nome: "Cadeira Abdutora", series: "3x10-8-6", video: "https://www.youtube.com/embed/B-2lEIr2sfs", descanso: 90 },
      { nome: "Stiff", series: "3x10-8-6", video: "https://www.youtube.com/embed/u1E3_u2gJYE", descanso: 90 },
      { nome: "Cadeira Flexora", series: "3x10-8-6", video: "https://www.youtube.com/embed/Zss6E3VU6X0", descanso: 90 },
      { nome: "Mesa Flexora", series: "3x10-8-6", video: "https://www.youtube.com/embed/2-ULaRrQa7c", descanso: 90 },
      { nome: "Bom Dia", series: "3x10-8-6", video: "https://www.youtube.com/embed/48gi7GPzTLQ", descanso: 90 },
      { nome: "Flexão de Joelho em Pé", series: "3x10-8-6", video: "https://www.youtube.com/embed/isSu2co__oY", descanso: 90 }
    ]
  },

  {
    id: 12,
    nome: "Treino Isolado com progressão de carga E",
    exercicios: [
      { nome: "Cadeira Abdutora", series: "3x10-8-6", video: "https://www.youtube.com/embed/_vDDFsPbubs", descanso: 90 },
      { nome: "Agachamento Búlgaro", series: "3x10-8-6", video: "https://www.youtube.com/embed/IGf9fR4Y7Iw", descanso: 90 },
      { nome: "Step Up", series: "3x10-8-6", video: "https://www.youtube.com/embed/qYFlvmFu2wE", descanso: 90 },
      { nome: "Levantamento Terra", series: "3x10-8-6", video: "https://www.youtube.com/embed/50AkPBZwACQ", descanso: 90 },
      { nome: "Agachamento Sumô", series: "3x10-8-6", video: "https://www.youtube.com/embed/uSbxGCa71PU", descanso: 90 },
      { nome: "Coice na Polia", series: "3x10-8-6", video: "https://www.youtube.com/embed/XYCCcD0MxN8", descanso: 90 }
    ]
  }
];

export default treinos;