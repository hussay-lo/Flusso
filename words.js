const levels = [
  {
    id: 'level-1',
    title: 'A1',
    topics: [

{
  id: 'greetings-polite-expressions',
  title: 'Greetings & Polite Expressions',
  words: [
    { it: 'Ciao', en: 'Hi / Bye (informal)' },
    { it: 'Salve', en: 'Hello (neutral)' },
    { it: 'Buongiorno', en: 'Good morning / Good day' },
    { it: 'Buonasera', en: 'Good evening' },
    { it: 'Buonanotte', en: 'Good night' },
    { it: 'Arrivederci', en: 'Goodbye' },
    { it: 'A presto', en: 'See you soon' },
    { it: 'A domani', en: 'See you tomorrow' },
    { it: 'Buona giornata', en: 'Have a nice day' },
    { it: 'Come stai?', en: 'How are you? (informal)' },
    { it: 'Come sta?', en: 'How are you? (formal)' },
    { it: 'Sto bene', en: "I'm fine" },
    { it: 'Così così', en: 'So-so' },
    { it: 'E tu?', en: 'And you? (informal)' },
    { it: 'Come ti chiami?', en: "What's your name? (informal)" },
    { it: 'Mi chiamo…', en: 'My name is…' },
    { it: 'Piacere', en: 'Nice to meet you' },
    { it: 'Per favore', en: 'Please' },
    { it: 'Grazie', en: 'Thank you' },
    { it: 'Mille grazie', en: 'Thank you very much' },
    { it: 'Prego', en: "You're welcome / Please, go ahead" },
    { it: 'Scusa', en: 'Sorry / Excuse me (informal)' },
    { it: 'Scusi', en: 'Sorry / Excuse me (formal)' },
    { it: 'Mi dispiace', en: "I'm sorry" },
    { it: "Non c'è problema", en: 'No problem' },
    { it: 'Permesso?', en: 'May I come in? / Excuse me (to pass)' },
    { it: 'Va bene', en: 'OK / All right' },
    { it: 'Buon appetito', en: 'Enjoy your meal' },
    { it: 'Sì', en: 'Yes' },
    { it: 'No', en: 'No' },
  ],
  quiz: [
    {
      sentence: '___, signora Rossi!',
      translation: 'Good morning, Mrs. Rossi!',
      options: ['Buonanotte', 'Buongiorno', 'Prego'],
      answer: 'Buongiorno',
    },
    {
      sentence: '— Grazie! — ___.',
      translation: "— Thank you! — You're welcome.",
      options: ['Scusi', 'Piacere', 'Prego'],
      answer: 'Prego',
    },
    {
      sentence: '— Come stai? — ___, grazie. E tu?',
      translation: "— How are you? — I'm fine, thanks. And you?",
      options: ['Prego', 'Sto bene', 'Arrivederci'],
      answer: 'Sto bene',
    },
    {
      sentence: '— Mi chiamo Anna. — ___!',
      translation: '— My name is Anna. — Nice to meet you!',
      options: ['Scusi', 'Buonanotte', 'Piacere'],
      answer: 'Piacere',
    },
    {
      sentence: 'Come ___, signora Bianchi?',
      translation: 'How are you, Mrs. Bianchi? (formal)',
      options: ['stai', 'sto', 'sta'],
      answer: 'sta',
    },
    {
      sentence: 'A ___!',
      translation: 'See you soon!',
      options: ['domani', 'notte', 'presto'],
      answer: 'presto',
    },
    {
      sentence: '___ appetito!',
      translation: 'Enjoy your meal!',
      options: ['Buona', 'Buon', 'Bene'],
      answer: 'Buon',
    },
    {
      sentence: 'Mi ___!',
      translation: "I'm sorry!",
      options: ['chiamo', 'dispiace', 'piace'],
      answer: 'dispiace',
    },
  ],
},
      {
        id: 'introductions',
        title: 'Introducing yourself',
        words: [
          { it: 'Come ti chiami?', en: 'What is your name?' },
          { it: 'Mi chiamo…', en: 'My name is…' },
          { it: 'Piacere!', en: 'Nice to meet you!' },
          { it: 'Come stai?', en: 'How are you?' },
          { it: 'Sto bene', en: "I'm fine" },
          { it: 'Di dove sei?', en: 'Where are you from?' },
        ],
        quiz: [
          {
            sentence: 'Come ti ___?',
            translation: 'What is your name?',
            options: ['chiami', 'chiamo', 'si chiama'],
            answer: 'chiami',
          },
          {
            sentence: 'Io ___ Marco.',
            translation: 'I am Marco.',
            options: ['sono', 'sei', 'è'],
            answer: 'sono',
          },
          {
            sentence: '___ bene, grazie.',
            translation: "I'm fine, thank you.",
            options: ['Sto', 'Stai', 'Sta'],
            answer: 'Sto',
          },
          {
            sentence: 'Di dove ___?',
            translation: 'Where are you from? (informal)',
            options: ['sei', 'sono', 'è'],
            answer: 'sei',
          },
        ],
      },
    ],
  },

  
  {
    id: 'level-2',
    title: 'A2',
    topics: [
      {
        id: 'my-first-topic',
        title: 'My first topic',
        words: [
          // { it: '...', en: '...' },
          
        ],
        quiz: [],
      },
    ],
  },
];
