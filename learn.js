// ---------- Page elements ----------
const italianWord = document.getElementById('italian-word');
const englishWord = document.getElementById('english-word');
const learnBtn = document.getElementById('learn-btn');
const saveBtn = document.getElementById('save-btn');
const savedList = document.getElementById('saved-list');
const card = document.querySelector('.learn-card');
const speakBtn = document.getElementById('speak-btn');
const levelList = document.getElementById('level-list');
const topicList = document.getElementById('topic-list');
const topicsView = document.getElementById('topics-view');
const learnView = document.getElementById('learn-view');
const backBtn = document.getElementById('back-btn');
const topicTitle = document.getElementById('topic-title');
const savedBtn = document.getElementById('saved-btn');
const savedView = document.getElementById('saved-view');
const savedBackBtn = document.getElementById('saved-back-btn');
const quizBtn = document.getElementById('quiz-btn');
const quizView = document.getElementById('quiz-view');
const quizBackBtn = document.getElementById('quiz-back-btn');
const quizBarFill = document.getElementById('quiz-bar-fill');
const quizCount = document.getElementById('quiz-count');
const quizPlay = document.getElementById('quiz-play');
const quizSentence = document.getElementById('quiz-sentence');
const quizTranslation = document.getElementById('quiz-translation');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizNextBtn = document.getElementById('quiz-next-btn');
const quizResult = document.getElementById('quiz-result');
const quizScoreText = document.getElementById('quiz-score-text');
const quizMessage = document.getElementById('quiz-message');
const quizRetryBtn = document.getElementById('quiz-retry-btn');
const quizExitBtn = document.getElementById('quiz-exit-btn');

// ---------- Storage keys ----------
const LEVEL_KEY = 'flusso.currentLevel';
const SAVED_KEY = 'flusso.savedWords';

// ---------- Icons ----------
const TRASH_ICON = `
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M4 7h16" />
    <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    <path d="M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
  </svg>
`;

const CHEVRON_ICON = `
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
       stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 6l6 6-6 6" />
  </svg>
`;

// ---------- Storage helpers ----------
function loadSaved() {
  try {
    return JSON.parse(localStorage.getItem(SAVED_KEY)) || [];
  } catch {
    return [];
  }
}

function persistSaved() {
  localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
}

function indexKey(topic) {
  return 'flusso.index.' + topic.id;
}

function loadIndex(topic) {
  const index = Number(localStorage.getItem(indexKey(topic))) || 0;
  return index >= topic.words.length ? 0 : index;
}

// ---------- State ----------
function readyTopics(level) {
  return level.topics.filter((topic) => topic.words.length > 0);
}

const readyLevels = levels.filter((level) => readyTopics(level).length > 0);

let currentLevel =
  readyLevels.find((level) => level.id === localStorage.getItem(LEVEL_KEY)) ||
  readyLevels[0];

let currentTopic = null;
let words = [];
let currentIndex = 0;
let currentWord = null;
let listScroll = 0;
let quizIndex = 0;
let quizCorrect = 0;
let viewBeforeSaved = null;
let savedFromScroll = 0;
let saved = loadSaved();

const views = [topicsView, learnView, quizView, savedView];

// ---------- Helpers ----------
function isSaved(word) {
  return saved.some((w) => w.it === word.it);
}

function updateSaveButton() {
  const alreadySaved = currentWord !== null && isSaved(currentWord);
  saveBtn.classList.toggle('is-saved', alreadySaved);
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;

  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'it-IT';
  utterance.rate = 0.9;

  const italianVoice = speechSynthesis
    .getVoices()
    .find((voice) => voice.lang.toLowerCase().startsWith('it'));

  if (italianVoice) {
    utterance.voice = italianVoice;
  }
  speechSynthesis.speak(utterance);
}

function showWord(word) {
  currentWord = word;
  if ('speechSynthesis' in window) {
    speakBtn.hidden = false;
  }
  italianWord.textContent = word.it;
  englishWord.textContent = word.en;
  updateSaveButton();

  card.classList.remove('is-new');
  void card.offsetWidth;
  card.classList.add('is-new');
}

function selectLevel(level) {
  currentLevel = level;
  localStorage.setItem(LEVEL_KEY, level.id);
  renderLevels();
  renderTopics();
}

function renderLevels() {
  levelList.innerHTML = '';

  readyLevels.forEach((level) => {
    const levelBtn = document.createElement('button');
    levelBtn.className = 'level-btn';
    levelBtn.textContent = level.title;
    levelBtn.setAttribute('aria-pressed', level === currentLevel);
    levelBtn.addEventListener('click', () => {
      if (level === currentLevel) return;
      selectLevel(level);
    });
    levelList.append(levelBtn);
  });
}

function renderTopics() {
  topicList.innerHTML = '';

  readyTopics(currentLevel).forEach((topic) => {
    const item = document.createElement('li');

    const topicBtn = document.createElement('button');
    topicBtn.className = 'topic-row';
    topicBtn.addEventListener('click', () => openTopic(topic));

    const text = document.createElement('span');
    text.className = 'topic-text';

    const title = document.createElement('span');
    title.className = 'topic-title';
    title.textContent = topic.title;

    const meta = document.createElement('span');
    meta.className = 'topic-meta';
    meta.textContent = topic.words.length + (topic.words.length === 1 ? ' word' : ' words');

    const chevron = document.createElement('span');
    chevron.className = 'topic-chevron';
    chevron.innerHTML = CHEVRON_ICON;

    text.append(title, meta);
    topicBtn.append(text, chevron);
    item.append(topicBtn);
    topicList.append(item);
  });
}

function showView(view) {
  views.forEach((v) => {
    v.hidden = v !== view;
  });
  savedBtn.classList.toggle('is-active', view === savedView);
  window.scrollTo(0, 0);
}

function openTopic(topic) {
  currentTopic = topic;
  words = topic.words;
  currentIndex = loadIndex(topic);

  currentWord = null;
  topicTitle.textContent = topic.title;
  italianWord.textContent = 'Tap Learn to start';
  englishWord.textContent = '';
  speakBtn.hidden = true;
  updateSaveButton();
  quizBtn.hidden = topic.quiz.length === 0;

  listScroll = window.scrollY;
  showView(learnView);
}

function showTopics() {
  showView(topicsView);
  window.scrollTo(0, listScroll);
}

function toggleSaved() {
  if (!savedView.hidden) {
    closeSaved();
    return;
  }

  viewBeforeSaved = views.find((view) => !view.hidden);
  savedFromScroll = window.scrollY;
  showView(savedView);
}

function closeSaved() {
  showView(viewBeforeSaved);
  window.scrollTo(0, savedFromScroll);
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  quizIndex = 0;
  quizCorrect = 0;
  quizPlay.hidden = false;
  quizResult.hidden = true;
  showView(quizView);
  renderQuestion();
}

function renderQuestion() {
  const question = currentTopic.quiz[quizIndex];
  const total = currentTopic.quiz.length;

  quizCount.textContent = 'Question ' + (quizIndex + 1) + ' of ' + total;
  quizBarFill.style.width = (quizIndex / total) * 100 + '%';
  quizSentence.textContent = question.sentence;
  quizTranslation.textContent = question.translation;
  quizFeedback.textContent = '';
  quizFeedback.className = 'quiz-feedback';
  quizNextBtn.hidden = true;

  quizOptions.innerHTML = '';
  shuffle(question.options).forEach((option) => {
    const optionBtn = document.createElement('button');
    optionBtn.setAttribute('translate', 'no');
    optionBtn.lang = 'it';
    optionBtn.className = 'quiz-option';
    optionBtn.textContent = option;
    optionBtn.addEventListener('click', () => answerQuestion(optionBtn, question));
    quizOptions.append(optionBtn);
  });
}

function answerQuestion(chosenBtn, question) {
  const isCorrect = chosenBtn.textContent === question.answer;

  quizOptions.querySelectorAll('.quiz-option').forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === question.answer) {
      btn.classList.add('is-correct');
    }
  });

  if (isCorrect) {
    quizCorrect++;
    quizFeedback.textContent = 'Perfetto!';
    quizFeedback.classList.add('is-correct');
  } else {
    chosenBtn.classList.add('is-wrong');
    quizFeedback.textContent = 'Not quite. The answer is "' + question.answer + '".';
    quizFeedback.classList.add('is-wrong');
  }

  quizSentence.textContent = question.sentence.replace('___', question.answer);
  quizNextBtn.textContent =
    quizIndex === currentTopic.quiz.length - 1 ? 'Finish' : 'Continue';
  quizNextBtn.hidden = false;
}

function nextQuestion() {
  quizIndex++;

  if (quizIndex < currentTopic.quiz.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const total = currentTopic.quiz.length;

  quizBarFill.style.width = '100%';
  quizCount.textContent = 'Done';
  quizScoreText.textContent = quizCorrect + ' / ' + total;
  quizMessage.textContent =
    quizCorrect === total
      ? 'Perfetto! Everything correct.'
      : 'Good effort. Try again to improve your score.';

  quizPlay.hidden = true;
  quizResult.hidden = false;
}

function renderSaved() {
  savedList.innerHTML = '';

  saved.forEach((word) => {
    const item = document.createElement('li');
    item.className = 'saved-item';

    const itSpan = document.createElement('span');
    itSpan.setAttribute('translate', 'no');
    itSpan.lang = 'it';
    itSpan.className = 'saved-it';
    itSpan.textContent = word.it;

    const enSpan = document.createElement('span');
    enSpan.className = 'saved-en';
    enSpan.textContent = word.en;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'saved-remove';
    removeBtn.innerHTML = TRASH_ICON;
    removeBtn.setAttribute('aria-label', 'Remove ' + word.it);
    removeBtn.addEventListener('click', () => {
      saved = saved.filter((w) => w.it !== word.it);
      persistSaved();
      renderSaved();
      updateSaveButton();
    });

    item.append(itSpan, enSpan, removeBtn);
    savedList.append(item);
  });
}

// ---------- Events ----------
speakBtn.addEventListener('click', () => {
  if (currentWord === null) return;
  speak(currentWord.it);
});

backBtn.addEventListener('click', showTopics);
savedBtn.addEventListener('click', toggleSaved);
savedBackBtn.addEventListener('click', closeSaved);
quizBtn.addEventListener('click', startQuiz);
quizNextBtn.addEventListener('click', nextQuestion);
quizRetryBtn.addEventListener('click', startQuiz);
quizBackBtn.addEventListener('click', () => showView(learnView));
quizExitBtn.addEventListener('click', () => showView(learnView));

learnBtn.addEventListener('click', () => {
  showWord(words[currentIndex]);
  currentIndex = (currentIndex + 1) % words.length;
  localStorage.setItem(indexKey(currentTopic), currentIndex);
});

saveBtn.addEventListener('click', () => {
  if (currentWord === null) return;
  if (isSaved(currentWord)) return;

  saved.push(currentWord);
  persistSaved();
  renderSaved();
  updateSaveButton();
});

// ---------- Start ----------
renderLevels();
renderTopics();
renderSaved();
