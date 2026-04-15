const QUESTION_COUNT = 20;

const questionPool = [
  {
    title: "Smart Garden",
    question: "Ihr programmiert ein System, das Pflanzen automatisch gießt. Was würdest du am ehesten tun?",
    answers: [
      { text: "Berechnen, wie viel Wasser jede Pflanze braucht", type: "M" },
      { text: "Die Steuerung programmieren und digitale Sensoren einbinden", type: "I" },
      { text: "Bodenproben analysieren und Pflanzenwachstum beobachten", type: "N" },
      { text: "Das Gießsystem bauen und optimieren", type: "T" }
    ]
  },
  {
    title: "Laborversuch",
    question: "Ihr untersucht chemische Reaktionen in einem Labor. Welche Aufgabe würdest du übernehmen?",
    answers: [
      { text: "Mengen, Konzentrationen und Reaktionsgeschwindigkeit berechnen", type: "M" },
      { text: "Messwerte digital erfassen und auswerten", type: "I" },
      { text: "Substanzen beobachten und Experimente durchführen", type: "N" },
      { text: "Mess- und Laborgeräte einrichten und warten", type: "T" }
    ]
  },
  {
    title: "Robotik",
    question: "Ein Roboter soll einen Parcours bewältigen. Was würdest du am ehesten tun?",
    answers: [
      { text: "Bewegungsabläufe und Route planen", type: "M" },
      { text: "Steuerung programmieren und Sensoren einbinden", type: "I" },
      { text: "Wetterbedingungen und Bodenverhältnisse analysieren", type: "N" },
      { text: "Den Roboterkörper zusammenbauen und optimieren", type: "T" }
    ]
  },
  {
    title: "Umweltprojekt",
    question: "Ihr überprüft die Wasserqualität eines Flusses. Was würdest du am ehesten tun?",
    answers: [
      { text: "Statistiken aus den Messwerten erstellen", type: "M" },
      { text: "Digitale Messgeräte und Steuerung integrieren", type: "I" },
      { text: "Proben untersuchen und Tests durchführen", type: "N" },
      { text: "Das Gehäuse des Analyse-Systems im 3D-Druck erstellen und Sensoren einbauen", type: "T" }
    ]
  },
  {
    title: "Solarenergie",
    question: "Ein Solarpark soll effizienter betrieben werden. Was würdest du am ehesten tun?",
    answers: [
      { text: "Einstrahlung und Ertrag berechnen", type: "M" },
      { text: "Energiemanagementsysteme optimieren", type: "I" },
      { text: "Material testen und Energieeffizienz prüfen", type: "N" },
      { text: "Solarmodule installieren und ausrichten", type: "T" }
    ]
  },
  {
    title: "Tierbeobachtung",
    question: "Ihr untersucht das Verhalten von Vögeln. Welche Aufgabe würdest du übernehmen?",
    answers: [
      { text: "Zugvogelrouten analysieren und berechnen", type: "M" },
      { text: "Ein KI-gestütztes Monitoring zur Erfassung von Vogelpopulationen entwickeln", type: "I" },
      { text: "Verhalten protokollieren und Muster erkennen", type: "N" },
      { text: "Kameras oder Sensoren einrichten", type: "T" }
    ]
  },
  {
    title: "Fahrzeugtechnik",
    question: "Ein Modellauto soll eine Strecke möglichst schnell bewältigen. Welche Aufgabe würdest du übernehmen?",
    answers: [
      { text: "Fahrdynamik untersuchen", type: "M" },
      { text: "Fahrerassistenzsysteme optimieren", type: "I" },
      { text: "Emissionsminderungsmaßnahmen planen", type: "N" },
      { text: "Fahrzeugstrukturen und Leichtbau entwickeln", type: "T" }
    ]
  },
  {
    title: "Mikrobiologie",
    question: "Ihr untersucht Bakterienkulturen im Labor. Was würdest du am ehesten tun?",
    answers: [
      { text: "Wachstumsraten berechnen", type: "M" },
      { text: "Laborsoftware nutzen, um Daten zu erfassen", type: "I" },
      { text: "Proben mikroskopisch untersuchen", type: "N" },
      { text: "Komplexe Analysegeräte bedienen und warten", type: "T" }
    ]
  },
  {
    title: "Robotik im Alltag",
    question: "Ein Haushaltsroboter soll Aufgaben erledigen. Was würdest du am ehesten tun?",
    answers: [
      { text: "Vektoren und Matrizen für Positionen berechnen", type: "M" },
      { text: "Eine passende App erstellen", type: "I" },
      { text: "Sensoren testen und Fehler beobachten", type: "N" },
      { text: "Den Roboterkörper zusammenbauen und justieren", type: "T" }
    ]
  },
  {
    title: "Drohnen",
    question: "Eine Drohne soll Luftproben sammeln. Welche Aufgabe würdest du übernehmen?",
    answers: [
      { text: "Die Flugroute berechnen", type: "M" },
      { text: "Die Steuerung programmieren", type: "I" },
      { text: "Proben entnehmen und analysieren", type: "N" },
      { text: "Die Drohne konfigurieren", type: "T" }
    ]
  },
  {
    title: "Brückenbau",
    question: "Ein Brückenmodell soll ein Gewicht tragen. Welche Aufgabe würdest du übernehmen?",
    answers: [
      { text: "Belastung berechnen", type: "M" },
      { text: "Digitale Simulationen erstellen", type: "I" },
      { text: "Materialien und Dichte prüfen", type: "N" },
      { text: "Konstruktion planen und bauen", type: "T" }
    ]
  },
  {
    title: "Energieversorgung",
    question: "Ihr optimiert ein Windrad für mehr Leistung. Was würdest du am ehesten tun?",
    answers: [
      { text: "Energieertrag und Windstärken berechnen", type: "M" },
      { text: "Steuerungs- und Überwachungssystem programmieren", type: "I" },
      { text: "Wetterdaten auswerten sowie Ausrichtung und Ort auswählen", type: "N" },
      { text: "Die Mechanik verbessern und Rotorblätter einstellen", type: "T" }
    ]
  },
  {
    title: "Imkerei-Projekt",
    question: "Ein Bienenvolk soll optimal betreut werden, damit es gesund bleibt und viel Honig produziert. Welche Aufgabe würdest du übernehmen?",
    answers: [
      { text: "Erträge und Entwicklung des Bienenvolks auswerten", type: "M" },
      { text: "Ein digitales System zur Überwachung von Temperatur, Luftfeuchtigkeit und Aktivität entwickeln", type: "I" },
      { text: "Das Verhalten der Bienen beobachten und den Gesundheitszustand des Volkes untersuchen", type: "N" },
      { text: "Mikrotechnik gegen Schädlinge einbauen", type: "T" }
    ]
  },
  {
    title: "Gartenprojekt",
    question: "Ein Schulgarten soll neu angelegt und gepflegt werden. Welche Aufgabe würdest du übernehmen?",
    answers: [
      { text: "Wachstum und Erträge verschiedener Pflanzen auswerten", type: "M" },
      { text: "Ein digitales System zur automatischen Bewässerung programmieren und steuern", type: "I" },
      { text: "Bodenqualität untersuchen und passende Pflanzen auswählen", type: "N" },
      { text: "Ein automatisches Bewässerungssystem planen und umsetzen", type: "T" }
    ]
  },
  {
    title: "Astronomie-Projekt",
    question: "Ein Team beobachtet den Nachthimmel, um mehr über Planeten und Sterne zu erfahren. Welche Aufgabe würdest du übernehmen?",
    answers: [
      { text: "Umlaufbahnen berechnen und Helligkeitsdaten auswerten", type: "M" },
      { text: "Software zur Auswertung von Teleskopdaten entwickeln", type: "I" },
      { text: "Himmelskörper beobachten und physikalische Phänomene untersuchen", type: "N" },
      { text: "Teleskope aufbauen und die Technik optimieren", type: "T" }
    ]
  },
  {
    title: "Elektrizitätsprojekt",
    question: "Ein Gebäude soll mit einem intelligenten Stromsystem ausgestattet werden. Welche Aufgabe würdest du übernehmen?",
    answers: [
      { text: "Stromverbrauch analysieren und Energieeffizienz berechnen", type: "M" },
      { text: "Eine Software zur Steuerung und Überwachung des Stromnetzes entwickeln", type: "I" },
      { text: "Elektrische Eigenschaften von Materialien untersuchen und Messungen durchführen", type: "N" },
      { text: "Leitungen verlegen und die technische Installation umsetzen", type: "T" }
    ]
  },
  {
    title: "Medizinisches Forschungsprojekt",
    question: "Ein Team entwickelt eine neue Behandlungsmethode und testet deren Wirkung. Welche Aufgabe würdest du übernehmen?",
    answers: [
      { text: "Ergebnisse berechnen und statistisch auswerten", type: "M" },
      { text: "Digitale Systeme zur Erfassung von Gesundheitsdaten entwickeln", type: "I" },
      { text: "Untersuchen, wie der Körper auf die Behandlung reagiert", type: "N" },
      { text: "Technische Geräte für die Tests warten und anpassen", type: "T" }
    ]
  },
  {
    title: "Interesse",
    question: "Was interessiert dich stärker?",
    answers: [
      { text: "Berechnen, wie sich bestimmte Werte im Verlauf verändern", type: "M" },
      { text: "Programme entwickeln, die Diagnosen unterstützen", type: "I" },
      { text: "Untersuchen, wie Krankheiten entstehen und verlaufen", type: "N" },
      { text: "Technische Systeme im medizinischen Bereich warten und optimieren", type: "T" }
    ]
  },
  {
    title: "Interesse",
    question: "Womit würdest du dich eher beschäftigen?",
    answers: [
      { text: "Aus verschiedenen Datenquellen Muster erkennen", type: "M" },
      { text: "Eine Anwendung entwickeln, die mehrere Funktionen verbindet", type: "I" },
      { text: "Wasserproben untersuchen und Veränderungen feststellen", type: "N" },
      { text: "Technische Komponenten zu einem funktionierenden System zusammenbauen", type: "T" }
    ]
  },
  {
    title: "Interesse",
    question: "Was interessiert dich mehr?",
    answers: [
      { text: "Berechnen, wie sich Werte unter bestimmten Bedingungen verändern", type: "M" },
      { text: "Abläufe so gestalten, dass sie automatisch ablaufen", type: "I" },
      { text: "Beobachten, wie sich Pflanzen oder Tiere anpassen", type: "N" },
      { text: "Geräte einrichten und für den Einsatz vorbereiten", type: "T" }
    ]
  },
  {
    title: "Interesse",
    question: "Welche Tätigkeit würdest du eher wählen?",
    answers: [
      { text: "Ergebnisse vergleichen und daraus Entscheidungen ableiten", type: "M" },
      { text: "Ein System entwickeln, das Daten verarbeitet und weiterleitet", type: "I" },
      { text: "Stoffe analysieren und ihre Eigenschaften untersuchen", type: "N" },
      { text: "Bauteile präzise einstellen und überprüfen", type: "T" }
    ]
  },
  {
    title: "Interesse",
    question: "Was spricht dich eher an?",
    answers: [
      { text: "Modelle erstellen, um Entwicklungen abzuschätzen", type: "M" },
      { text: "Programme so strukturieren, dass sie effizient arbeiten", type: "I" },
      { text: "Untersuchen, wie sich Energie oder Kräfte auswirken", type: "N" },
      { text: "Anlagen aufbauen und in Betrieb nehmen", type: "T" }
    ]
  },
  {
    title: "Interesse",
    question: "Womit würdest du dich lieber beschäftigen?",
    answers: [
      { text: "Abweichungen in Ergebnissen erklären", type: "M" },
      { text: "Digitale Prozesse verbessern und anpassen", type: "I" },
      { text: "Proben im Labor auswerten und vergleichen", type: "N" },
      { text: "Technische Systeme installieren und testen", type: "T" }
    ]
  },
  {
    title: "Interesse",
    question: "Was würdest du eher tun?",
    answers: [
      { text: "Berechnen, welche Lösung am zuverlässigsten ist", type: "M" },
      { text: "Ein System entwickeln, das selbstständig reagiert", type: "I" },
      { text: "Untersuchen, wie sich äußere Einflüsse auf ein System auswirken", type: "N" },
      { text: "Maschinen warten und optimieren", type: "T" }
    ]
  },
  {
    title: "Interesse",
    question: "Welche Aufgabe passt besser zu dir?",
    answers: [
      { text: "Zahlen analysieren und verständlich darstellen", type: "M" },
      { text: "Abläufe logisch strukturieren und umsetzen", type: "I" },
      { text: "Veränderungen genau beobachten und dokumentieren", type: "N" },
      { text: "Technische Probleme praktisch lösen", type: "T" }
    ]
  },
  {
    title: "Interesse",
    question: "Was findest du spannender?",
    answers: [
      { text: "Herausfinden, welche Faktoren ein Ergebnis beeinflussen", type: "M" },
      { text: "Systeme entwickeln, die miteinander vernetzt sind", type: "I" },
      { text: "Untersuchen, wie sich Umweltbedingungen verändern", type: "N" },
      { text: "Konstruktionen stabil und funktionsfähig machen", type: "T" }
    ]
  },
  {
    title: "Interesse",
    question: "Womit verbringst du lieber Zeit?",
    answers: [
      { text: "Berechnungen durchführen und interpretieren", type: "M" },
      { text: "Digitale Lösungen entwickeln und testen", type: "I" },
      { text: "Beobachten, wie sich Prozesse über die Zeit entwickeln", type: "N" },
      { text: "Geräte zusammenbauen und verbessern", type: "T" }
    ]
  },
  {
    title: "Interesse",
    question: "Was interessiert dich stärker?",
    answers: [
      { text: "Nachvollziehen, wie Ergebnisse zustande kommen", type: "M" },
      { text: "Überlegen, wie Abläufe automatisiert werden können", type: "I" },
      { text: "Verstehen, wie natürliche oder physikalische Prozesse funktionieren", type: "N" },
      { text: "Lösungen entwickeln, die direkt praktisch funktionieren", type: "T" }
    ]
  }
];

let quizQuestions = [];
let currentQuestion = 0;
let selectedAnswers = [];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const currentNumber = document.getElementById("current-number");
const totalNumber = document.getElementById("total-number");
const progressLabel = document.getElementById("progress-label");
const progressFill = document.getElementById("progress-fill");

function showScreen(screen) {
  startScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  screen.classList.add("active");
}

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function prepareQuizQuestions() {
  const shuffledPool = shuffleArray(questionPool);
  quizQuestions = shuffledPool.slice(0, Math.min(QUESTION_COUNT, questionPool.length)).map((q) => ({
    title: q.title,
    question: q.question,
    answers: shuffleArray(q.answers)
  }));

  selectedAnswers = new Array(quizQuestions.length).fill(null);
  totalNumber.textContent = quizQuestions.length;
}

function renderQuestion() {
  const q = quizQuestions[currentQuestion];
  currentNumber.textContent = currentQuestion + 1;
  questionTitle.textContent = q.title;
  questionText.textContent = q.question;

  const progress = Math.round((currentQuestion / quizQuestions.length) * 100);
  progressLabel.textContent = `${progress}%`;
  progressFill.style.width = `${progress}%`;

  answersContainer.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";

    if (selectedAnswers[currentQuestion] === index) {
      button.classList.add("selected");
    }

    button.innerHTML = `
      <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
      <span class="answer-text">${answer.text}</span>
    `;

    button.addEventListener("click", () => {
      selectedAnswers[currentQuestion] = index;
      renderQuestion();
    });

    answersContainer.appendChild(button);
  });

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = selectedAnswers[currentQuestion] === null;
  nextBtn.textContent =
    currentQuestion === quizQuestions.length - 1 ? "Auswertung ansehen" : "Weiter";
}

function getScores() {
  const scores = { M: 0, I: 0, N: 0, T: 0 };

  selectedAnswers.forEach((selectedIndex, questionIndex) => {
    if (selectedIndex !== null) {
      const answerType = quizQuestions[questionIndex].answers[selectedIndex].type;
      scores[answerType]++;
    }
  });

  return scores;
}

function getPercentages(scores) {
  const total = quizQuestions.length;

  return {
    M: Math.round((scores.M / total) * 100),
    I: Math.round((scores.I / total) * 100),
    N: Math.round((scores.N / total) * 100),
    T: Math.round((scores.T / total) * 100)
  };
}

function buildResultText(percentages) {
  const sorted = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
  const topType = sorted[0][0];

  const resultTexts = {
    M: "Du arbeitest gerne analytisch, erkennst Muster und setzt dich mit Zahlen, Modellen und Zusammenhängen auseinander.",
    I: "Du interessierst dich besonders für digitale Systeme, logische Abläufe und die Frage, wie Technik intelligent gesteuert werden kann.",
    N: "Du beobachtest gerne genau, untersuchst Veränderungen und möchtest verstehen, wie Natur, Umwelt, Stoffe oder der Körper funktionieren.",
    T: "Du magst praktische Lösungen, funktionierende Systeme und Aufgaben, bei denen gebaut, installiert, angepasst oder verbessert wird."
  };

  return resultTexts[topType];
}

function showResults() {
  const scores = getScores();
  const percentages = getPercentages(scores);

  document.getElementById("percent-m").textContent = `${percentages.M}%`;
  document.getElementById("percent-i").textContent = `${percentages.I}%`;
  document.getElementById("percent-n").textContent = `${percentages.N}%`;
  document.getElementById("percent-t").textContent = `${percentages.T}%`;

  document.getElementById("bar-m").style.width = `${percentages.M}%`;
  document.getElementById("bar-i").style.width = `${percentages.I}%`;
  document.getElementById("bar-n").style.width = `${percentages.N}%`;
  document.getElementById("bar-t").style.width = `${percentages.T}%`;

  document.getElementById("result-text").textContent = buildResultText(percentages);
  document.getElementById("result-summary").textContent =
    "Die Prozentwerte zeigen, welche MINT-Bereiche dich in diesem Durchlauf besonders angesprochen haben.";

  progressLabel.textContent = "100%";
  progressFill.style.width = "100%";

  showScreen(resultScreen);
}

function startQuiz() {
  prepareQuizQuestions();
  currentQuestion = 0;
  progressLabel.textContent = "0%";
  progressFill.style.width = "0%";
  showScreen(quizScreen);
  renderQuestion();
}

startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", () => {
  if (selectedAnswers[currentQuestion] === null) return;

  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});

restartBtn.addEventListener("click", () => {
  showScreen(startScreen);
});