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
        words: [
          { it: 'Chi?', en: 'Who?' },
          { it: 'Che cosa?', en: 'What? (also just "Cosa?")' },
          { it: 'Dove?', en: 'Where?' },
          { it: 'Quando?', en: 'When?' },
          { it: 'Perché?', en: 'Why? / Because' },
          { it: 'Come?', en: 'How? / Pardon?' },
          { it: 'Quanto?', en: 'How much? (feminine: quanta)' },
          { it: 'Quanti?', en: 'How many? (feminine: quante)' },
          { it: 'Quale?', en: 'Which? (plural: quali)' },
          { it: 'Come si dice…?', en: 'How do you say…?' },
          { it: 'Come si scrive?', en: 'How do you spell it? / How is it written?' },
          { it: 'Cosa significa…?', en: 'What does … mean?' },
          { it: 'Non capisco', en: "I don't understand" },
          { it: 'Capisco', en: 'I understand' },
          { it: 'Non lo so', en: "I don't know" },
          { it: 'Puoi ripetere?', en: 'Can you repeat? (informal)' },
          { it: 'Può ripetere?', en: 'Can you repeat? (formal)' },
          { it: 'Più piano, per favore', en: 'More slowly, please' },
          { it: 'Ho una domanda', en: 'I have a question' },
          { it: 'Ascolta', en: 'Listen (informal)' },
          { it: 'Ripeti', en: 'Repeat (informal)' },
          { it: 'Leggi', en: 'Read (informal)' },
          { it: 'Scrivi', en: 'Write (informal)' },
          { it: 'Guarda', en: 'Look (informal)' },
          { it: 'La domanda', en: 'The question' },
          { it: 'La risposta', en: 'The answer' },
          { it: 'La parola', en: 'The word' },
          { it: 'La frase', en: 'The sentence' },
          { it: 'Un esempio', en: 'An example' },
          { it: 'Giusto / Sbagliato', en: 'Right / Wrong' },
          { it: 'Il libro', en: 'The book' },
          { it: 'Il quaderno', en: 'The notebook' },
          { it: 'La penna', en: 'The pen' },
          { it: 'La lavagna', en: 'The board / blackboard' },
        ],
        quiz: [
          {
            sentence: '___ è Marco?',
            translation: 'Who is Marco?',
            options: ['Dove', 'Chi', 'Quando'],
            answer: 'Chi',
          },
          {
            sentence: '— ___ arrivi? — Domani.',
            translation: '— When do you arrive? — Tomorrow.',
            options: ['Quando', 'Dove', 'Chi'],
            answer: 'Quando',
          },
          {
            sentence: '— ___ studi italiano? — Perché mi piace.',
            translation: '— Why do you study Italian? — Because I like it.',
            options: ['Come', 'Quale', 'Perché'],
            answer: 'Perché',
          },
          {
            sentence: 'Non ___. Può ripetere, per favore?',
            translation: "I don't understand. Can you repeat, please?",
            options: ['ripeto', 'capisco', 'scrivo'],
            answer: 'capisco',
          },
          {
            sentence: 'Come si ___ "hello" in italiano?',
            translation: 'How do you say "hello" in Italian?',
            options: ['ascolta', 'guarda', 'dice'],
            answer: 'dice',
          },
          {
            sentence: 'Ascolta e ___, per favore.',
            translation: 'Listen and repeat, please.',
            options: ['ripeti', 'giusto', 'domanda'],
            answer: 'ripeti',
          },
          {
            sentence: '___ studenti ci sono?',
            translation: 'How many students are there?',
            options: ['Quale', 'Quanto', 'Quanti'],
            answer: 'Quanti',
          },
          {
            sentence: 'Roma è in Francia? No, è ___!',
            translation: 'Rome is in France? No, that is wrong!',
            options: ['giusto', 'sbagliato', 'risposta'],
            answer: 'sbagliato',
          },
        ],
      },

      // ---------- A1 · 03 / 20 ----------
      {
        id: 'essential-verbs',
        title: 'Essential Verbs',
        words: [
          { it: 'io', en: 'I' },
          { it: 'tu', en: 'you (informal)' },
          { it: 'lui / lei', en: 'he / she' },
          { it: 'Lei', en: 'you (formal) — uses the same verb form as lei' },
          { it: 'noi', en: 'we' },
          { it: 'voi', en: 'you (plural)' },
          { it: 'loro', en: 'they' },
          { it: 'essere', en: 'to be (io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono)' },
          { it: 'avere', en: 'to have (io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno)' },
          { it: 'stare', en: 'to stay / to be (health) (io sto, tu stai, lui/lei sta, noi stiamo, voi state, loro stanno)' },
          { it: 'fare', en: 'to do / to make (io faccio, tu fai, lui/lei fa, noi facciamo, voi fate, loro fanno)' },
          { it: 'andare', en: 'to go (io vado, tu vai, lui/lei va, noi andiamo, voi andate, loro vanno)' },
          { it: 'venire', en: 'to come (io vengo, tu vieni, lui/lei viene, noi veniamo, voi venite, loro vengono)' },
          { it: 'volere', en: 'to want (io voglio, tu vuoi, lui/lei vuole, noi vogliamo, voi volete, loro vogliono)' },
          { it: 'potere', en: 'can / to be able to (io posso, tu puoi, lui/lei può, noi possiamo, voi potete, loro possono)' },
          { it: 'dovere', en: 'must / to have to (io devo, tu devi, lui/lei deve, noi dobbiamo, voi dovete, loro devono)' },
          { it: 'dire', en: 'to say / to tell (io dico, tu dici, lui/lei dice, noi diciamo, voi dite, loro dicono)' },
          { it: 'vedere', en: 'to see (io vedo, tu vedi, lui/lei vede, noi vediamo, voi vedete, loro vedono)' },
          { it: 'mangiare', en: 'to eat (io mangio, tu mangi, lui/lei mangia, noi mangiamo, voi mangiate, loro mangiano)' },
          { it: 'bere', en: 'to drink (io bevo, tu bevi, lui/lei beve, noi beviamo, voi bevete, loro bevono)' },
          { it: 'parlare', en: 'to speak / to talk (io parlo, tu parli, lui/lei parla, noi parliamo, voi parlate, loro parlano)' },
          { it: 'abitare', en: 'to live (in a place) (io abito, tu abiti, lui/lei abita, noi abitiamo, voi abitate, loro abitano)' },
          { it: 'lavorare', en: 'to work (io lavoro, tu lavori, lui/lei lavora, noi lavoriamo, voi lavorate, loro lavorano)' },
          { it: 'studiare', en: 'to study (io studio, tu studi, lui/lei studia, noi studiamo, voi studiate, loro studiano)' },
          { it: 'capire', en: 'to understand (io capisco, tu capisci, lui/lei capisce, noi capiamo, voi capite, loro capiscono)' },
          { it: 'prendere', en: 'to take / to have (food, drinks) (io prendo, tu prendi, lui/lei prende, noi prendiamo, voi prendete, loro prendono)' },
          { it: 'comprare', en: 'to buy (io compro, tu compri, lui/lei compra, noi compriamo, voi comprate, loro comprano)' },
          { it: 'leggere', en: 'to read (io leggo, tu leggi, lui/lei legge, noi leggiamo, voi leggete, loro leggono)' },
          { it: 'scrivere', en: 'to write (io scrivo, tu scrivi, lui/lei scrive, noi scriviamo, voi scrivete, loro scrivono)' },
          { it: 'dormire', en: 'to sleep (io dormo, tu dormi, lui/lei dorme, noi dormiamo, voi dormite, loro dormono)' },
        ],
        quiz: [
          {
            sentence: 'Noi ___ studenti.',
            translation: 'We are students.',
            options: ['sono', 'siamo', 'siete'],
            answer: 'siamo',
          },
          {
            sentence: 'Maria ___ due fratelli.',
            translation: 'Maria has two brothers.',
            options: ['è', 'fa', 'ha'],
            answer: 'ha',
          },
          {
            sentence: 'Tu ___ a Roma domani?',
            translation: 'Are you going to Rome tomorrow?',
            options: ['vai', 'vado', 'va'],
            answer: 'vai',
          },
          {
            sentence: 'Loro ___ italiano molto bene.',
            translation: 'They speak Italian very well.',
            options: ['parla', 'parlano', 'parliamo'],
            answer: 'parlano',
          },
          {
            sentence: 'Io ___ un caffè, per favore.',
            translation: 'I want a coffee, please.',
            options: ['vuole', 'vogliamo', 'voglio'],
            answer: 'voglio',
          },
          {
            sentence: 'Voi ___ molta acqua.',
            translation: 'You (plural) drink a lot of water.',
            options: ['bevete', 'bevo', 'beve'],
            answer: 'bevete',
          },
          {
            sentence: 'Io non ___ bene oggi.',
            translation: "I'm not well today.",
            options: ['sono', 'faccio', 'sto'],
            answer: 'sto',
          },
          {
            sentence: 'Io ___ lavorare oggi.',
            translation: 'I have to work today.',
            options: ['vado', 'devo', 'dico'],
            answer: 'devo',
          },
        ],
      },

      // ---------- A1 · 04 / 20 ----------
      {
        id: 'numbers-0-100',
        title: 'Numbers 0–100',
        words: [
          { it: 'zero', en: 'zero (0)' },
          { it: 'uno', en: 'one (1)' },
          { it: 'due', en: 'two (2)' },
          { it: 'tre', en: 'three (3)' },
          { it: 'quattro', en: 'four (4)' },
          { it: 'cinque', en: 'five (5)' },
          { it: 'sei', en: 'six (6) — also "you are"' },
          { it: 'sette', en: 'seven (7)' },
          { it: 'otto', en: 'eight (8)' },
          { it: 'nove', en: 'nine (9)' },
          { it: 'dieci', en: 'ten (10)' },
          { it: 'undici', en: 'eleven (11)' },
          { it: 'dodici', en: 'twelve (12)' },
          { it: 'tredici', en: 'thirteen (13)' },
          { it: 'quattordici', en: 'fourteen (14)' },
          { it: 'quindici', en: 'fifteen (15)' },
          { it: 'sedici', en: 'sixteen (16)' },
          { it: 'diciassette', en: 'seventeen (17)' },
          { it: 'diciotto', en: 'eighteen (18)' },
          { it: 'diciannove', en: 'nineteen (19)' },
          { it: 'venti', en: 'twenty (20)' },
          { it: 'ventuno', en: 'twenty-one (21) — venti drops its final -i before uno and otto' },
          { it: 'ventidue', en: 'twenty-two (22)' },
          { it: 'ventitré', en: 'twenty-three (23) — tre takes an accent at the end of a number (trentatré, quarantatré…)' },
          { it: 'ventotto', en: 'twenty-eight (28) — same dropped -i as ventuno' },
          { it: 'trenta', en: 'thirty (30)' },
          { it: 'quaranta', en: 'forty (40)' },
          { it: 'cinquanta', en: 'fifty (50)' },
          { it: 'sessanta', en: 'sixty (60)' },
          { it: 'settanta', en: 'seventy (70)' },
          { it: 'ottanta', en: 'eighty (80)' },
          { it: 'novanta', en: 'ninety (90)' },
          { it: 'cento', en: 'one hundred (100)' },
          { it: 'più', en: 'plus / more' },
          { it: 'meno', en: 'minus / less' },
          { it: 'il numero', en: 'the number' },
        ],
        quiz: [
          {
            sentence: 'Due più due fa ___.',
            translation: 'Two plus two makes four.',
            options: ['tre', 'cinque', 'quattro'],
            answer: 'quattro',
          },
          {
            sentence: 'Ho ___ anni.',
            translation: "I'm twenty-one years old.",
            options: ['ventuno', 'venti uno', 'ventiuno'],
            answer: 'ventuno',
          },
          {
            sentence: 'Una settimana ha ___ giorni.',
            translation: 'A week has seven days.',
            options: ['sei', 'sette', 'otto'],
            answer: 'sette',
          },
          {
            sentence: 'Sette più otto fa ___.',
            translation: 'Seven plus eight makes fifteen.',
            options: ['sedici', 'quattordici', 'quindici'],
            answer: 'quindici',
          },
          {
            sentence: 'Cento meno dieci fa ___.',
            translation: 'One hundred minus ten makes ninety.',
            options: ['novanta', 'ottanta', 'settanta'],
            answer: 'novanta',
          },
          {
            sentence: 'Venti più tre fa ___.',
            translation: 'Twenty plus three makes twenty-three.',
            options: ['venti tre', 'ventitré', 'ventitre'],
            answer: 'ventitré',
          },
          {
            sentence: 'Ho ___ euro.',
            translation: 'I have fifty euros.',
            options: ['cinquanta', 'quindici', 'cinque'],
            answer: 'cinquanta',
          },
          {
            sentence: 'Ottanta più ___ fa cento.',
            translation: 'Eighty plus twenty makes one hundred.',
            options: ['dieci', 'venti', 'trenta'],
            answer: 'venti',
          },
        ],
      },

      // ---------- A1 · 05 / 20 ----------
      {
        id: 'days-months-seasons',
        title: 'Days, Months & Seasons',
        words: [
          { it: 'lunedì', en: 'Monday' },
          { it: 'martedì', en: 'Tuesday' },
          { it: 'mercoledì', en: 'Wednesday' },
          { it: 'giovedì', en: 'Thursday' },
          { it: 'venerdì', en: 'Friday' },
          { it: 'sabato', en: 'Saturday' },
          { it: 'domenica', en: 'Sunday' },
          { it: 'gennaio', en: 'January' },
          { it: 'febbraio', en: 'February' },
          { it: 'marzo', en: 'March' },
          { it: 'aprile', en: 'April' },
          { it: 'maggio', en: 'May' },
          { it: 'giugno', en: 'June' },
          { it: 'luglio', en: 'July' },
          { it: 'agosto', en: 'August' },
          { it: 'settembre', en: 'September' },
          { it: 'ottobre', en: 'October' },
          { it: 'novembre', en: 'November' },
          { it: 'dicembre', en: 'December' },
          { it: 'la primavera', en: 'spring' },
          { it: "l'estate", en: 'summer' },
          { it: "l'autunno", en: 'autumn / fall' },
          { it: "l'inverno", en: 'winter' },
          { it: 'la stagione', en: 'season' },
          { it: 'il giorno', en: 'day' },
          { it: 'la settimana', en: 'week' },
          { it: 'il mese', en: 'month' },
          { it: "l'anno", en: 'year' },
          { it: 'il fine settimana', en: 'weekend' },
          { it: 'oggi', en: 'today' },
          { it: 'ieri', en: 'yesterday' },
          { it: 'domani', en: 'tomorrow' },
          { it: 'Che giorno è oggi?', en: 'What day is it today?' },
          { it: 'Oggi è…', en: 'Today is…' },
        ],
        quiz: [
          {
            sentence: 'Oggi è ___: domani è martedì.',
            translation: 'Today is Monday: tomorrow is Tuesday.',
            options: ['sabato', 'domenica', 'lunedì'],
            answer: 'lunedì',
          },
          {
            sentence: 'Sabato e ___ sono il fine settimana.',
            translation: 'Saturday and Sunday are the weekend.',
            options: ['venerdì', 'domenica', 'lunedì'],
            answer: 'domenica',
          },
          {
            sentence: 'Il Natale è a ___.',
            translation: 'Christmas is in December.',
            options: ['dicembre', 'novembre', 'gennaio'],
            answer: 'dicembre',
          },
          {
            sentence: 'In ___ fa molto caldo.',
            translation: 'In summer it is very hot.',
            options: ['inverno', 'estate', 'autunno'],
            answer: 'estate',
          },
          {
            sentence: "Giugno, luglio e ___ sono i mesi dell'estate.",
            translation: 'June, July and August are the summer months.',
            options: ['marzo', 'dicembre', 'agosto'],
            answer: 'agosto',
          },
          {
            sentence: "Dopo mercoledì c'è ___.",
            translation: 'After Wednesday comes Thursday.',
            options: ['giovedì', 'martedì', 'venerdì'],
            answer: 'giovedì',
          },
          {
            sentence: 'Un ___ ha dodici mesi.',
            translation: 'A year has twelve months.',
            options: ['giorno', 'anno', 'mese'],
            answer: 'anno',
          },
          {
            sentence: "Dopo l'estate c'è ___.",
            translation: 'After summer comes autumn.',
            options: ['la primavera', "l'inverno", "l'autunno"],
            answer: "l'autunno",
          },
        ],
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
