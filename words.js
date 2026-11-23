const levels = [
  // ============================================================
  // LEVEL A1  (20 topics, fixed order)
  // ============================================================
  {
    id: 'level-1',
    title: 'A1',
    topics: [
      // ---------- A1 · 01 / 20 ----------
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

      // ---------- A1 · 02 / 20 ----------
      {
        id: 'question-words-classroom-phrases',
        title: 'Question Words & Classroom Phrases',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 03 / 20 ----------
      {
        id: 'essential-verbs',
        title: 'Essential Verbs',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 04 / 20 ----------
      {
        id: 'numbers-0-100',
        title: 'Numbers 0–100',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 05 / 20 ----------
      {
        id: 'days-months-seasons',
        title: 'Days, Months & Seasons',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 06 / 20 ----------
      {
        id: 'time-parts-of-day',
        title: 'Time & Parts of the Day',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 07 / 20 ----------
      {
        id: 'countries-nationalities-languages',
        title: 'Countries, Nationalities & Languages',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 08 / 20 ----------
      {
        id: 'personal-information-jobs',
        title: 'Personal Information & Jobs',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 09 / 20 ----------
      {
        id: 'family',
        title: 'Family',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 10 / 20 ----------
      {
        id: 'describing-people',
        title: 'Describing People',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 11 / 20 ----------
      {
        id: 'colors-opposites',
        title: 'Colors & Opposites',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 12 / 20 ----------
      {
        id: 'food-drinks',
        title: 'Food & Drinks',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 13 / 20 ----------
      {
        id: 'fruit-vegetables-shopping-quantities',
        title: 'Fruit, Vegetables & Shopping Quantities',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 14 / 20 ----------
      {
        id: 'cafe-restaurant',
        title: 'Café & Restaurant',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 15 / 20 ----------
      {
        id: 'house-furniture',
        title: 'House & Furniture',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 16 / 20 ----------
      {
        id: 'clothes-prices',
        title: 'Clothes & Prices',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 17 / 20 ----------
      {
        id: 'body-feeling-unwell',
        title: 'Body & Feeling Unwell',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 18 / 20 ----------
      {
        id: 'city-places-directions',
        title: 'City Places & Directions',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 19 / 20 ----------
      {
        id: 'transport-travel-basics',
        title: 'Transport & Travel Basics',
        words: [],
        quiz: [],
      },

      // ---------- A1 · 20 / 20 ----------
      {
        id: 'weather-nature',
        title: 'Weather & Nature',
        words: [],
        quiz: [],
      },
    ],
  },

  // ============================================================
  // LEVEL A2  (20 topics, fixed order, all empty for now)
  // ============================================================
  {
    id: 'level-2',
    title: 'A2',
    topics: [
      // ---------- A2 · 01 / 20 ----------
      {
        id: 'daily-routine-reflexive-verbs',
        title: 'Daily Routine & Reflexive Verbs',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 02 / 20 ----------
      {
        id: 'free-time-hobbies-sports',
        title: 'Free Time, Hobbies & Sports',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 03 / 20 ----------
      {
        id: 'shopping-sizes-discounts-payment',
        title: 'Shopping: Shops, Sizes, Discounts & Payment',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 04 / 20 ----------
      {
        id: 'italian-meals-restaurant-cooking',
        title: 'Italian Meals, Restaurant & Cooking',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 05 / 20 ----------
      {
        id: 'past-tense-toolkit',
        title: 'Past Tense Toolkit',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 06 / 20 ----------
      {
        id: 'travel-hotels-booking',
        title: 'Travel I: Hotels & Booking',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 07 / 20 ----------
      {
        id: 'travel-trains-airports-tickets-delays',
        title: 'Travel II: Trains, Airports, Tickets & Delays',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 08 / 20 ----------
      {
        id: 'health-pharmacy-doctor-symptoms',
        title: 'Health: Pharmacy, Doctor & Symptoms',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 09 / 20 ----------
      {
        id: 'feelings-personality',
        title: 'Feelings & Personality',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 10 / 20 ----------
      {
        id: 'work-office',
        title: 'Work & Office',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 11 / 20 ----------
      {
        id: 'school-university',
        title: 'School & University',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 12 / 20 ----------
      {
        id: 'housing-renting-bills-repairs',
        title: 'Housing: Renting, Bills & Repairs',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 13 / 20 ----------
      {
        id: 'phone-internet-technology',
        title: 'Phone, Internet & Technology',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 14 / 20 ----------
      {
        id: 'invitations-appointments-plans',
        title: 'Invitations, Appointments & Making Plans',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 15 / 20 ----------
      {
        id: 'holidays-festivals-traditions',
        title: 'Holidays, Festivals & Traditions',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 16 / 20 ----------
      {
        id: 'childhood-memories',
        title: 'Childhood & Memories',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 17 / 20 ----------
      {
        id: 'plans-intentions-predictions',
        title: 'Plans, Intentions & Predictions',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 18 / 20 ----------
      {
        id: 'prepositions-place-expressions',
        title: 'Prepositions & Place Expressions',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 19 / 20 ----------
      {
        id: 'connectors-adverbs',
        title: 'Connectors & Adverbs',
        words: [],
        quiz: [],
      },

      // ---------- A2 · 20 / 20 ----------
      {
        id: 'verbs-that-behave-differently',
        title: 'Verbs That Behave Differently',
        words: [],
        quiz: [],
      },
    ],
  },
];
