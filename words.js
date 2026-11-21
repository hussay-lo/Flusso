

const levels = [
  {
    id: 'level-1',
    title: 'A1',
    topics: [
      {
        id: 'basics',
        title: 'Basics',
        words: [
          { it: 'Ciao', en: 'Hello / Bye' },
          { it: 'Grazie', en: 'Thank you' },
          { it: 'Prego', en: "You're welcome" },
          { it: 'Per favore', en: 'Please' },
          { it: 'Scusi', en: 'Excuse me' },
          { it: 'Sì', en: 'Yes' },
          { it: 'No', en: 'No' },
          { it: 'Buongiorno', en: 'Good morning' },
          { it: 'Arrivederci', en: 'Goodbye' },
          { it: 'Acqua', en: 'Water' },
        ],
        quiz: [
          {
            sentence: '___!',
            translation: 'Thank you!',
            options: ['Grazie', 'Prego', 'Scusi'],
            answer: 'Grazie',
          },
          {
            sentence: '___, dov\'è il bagno?',
            translation: 'Excuse me, where is the bathroom?',
            options: ['Scusi', 'Acqua', 'Arrivederci'],
            answer: 'Scusi',
          },
          {
            sentence: '___, signora!',
            translation: 'Good morning, ma\'am!',
            options: ['Buongiorno', 'Arrivederci', 'Grazie'],
            answer: 'Buongiorno',
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
