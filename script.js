import EVENT_CONFIG from './config.js';

// Global Language Variable
let currentLang = 'it';

const TRANSLATIONS = {
  it: {
    docTitle: "Il Matrimonio di Luciano & Vincenza | Invito Ufficiale",
    badge: "✨ 31 DICEMBRE 2026 ✨",
    announcementText: "annunciano con gioia il loro MATRIMONIO",
    dayName: "GIOVEDÌ",
    lblDays: "Giorni",
    lblHours: "Ore",
    lblMinutes: "Minuti",
    lblSeconds: "Secondi",
    ctaButton: "Conferma Presenza",
    detailsTitle: "I Dettagli dell'Evento",
    ceremonyTitle: "La Cerimonia",
    ceremonyFunny: "Alle 16 tutti pronti in Chiesa! La sposa arriverà in orario: è un evento raro da non perdere!",
    mapBtn: "Visualizza Mappa",
    receptionTitle: "Il Ricevimento",
    missionText: "<strong>MISSIONE DELLA SERATA:</strong> divertirsi! Contiamo su di voi per riempire la pista, brindare, ridere e rendere questa serata indimenticabile!",
    dressCodeTitle: "Dress Code",
    dressCodeVal: "Nessun dress code",
    dressCodeSub: "La libertà è l'abito migliore che possiate indossare!",
    calendarBtn: "Aggiungi al Calendario",
    rsvpTitle: "Sarai dei Nostri?",
    rsvpSubtitle: "È gradita conferma entro e non oltre il <strong>30.11.2026</strong>.",
    labelName: "Nome e Cognome",
    placeholderName: "Inserisci il tuo nome completo",
    labelAttendance: "Parteciperai?",
    optionYes: "Sì, con piacere!",
    optionNo: "Purtroppo non potrò esserci",
    labelGuests: "Numero di Persone",
    labelAllergies: "Hai intolleranze o allergie alimentari?",
    radioNo: "No, nessuna",
    radioYes: "Sì, ho intolleranze / allergie",
    labelDiet: "Specificare allergie o esigenze alimentari:",
    placeholderDiet: "Es. Celiaco (senza glutine), intollerante al lattosio, vegetariano, ecc.",
    labelNotes: "Messaggio o Note speciali",
    placeholderNotes: "Un messaggio di auguri per gli sposi...",
    submitBtn: "Salva e Conferma",
    successTitle: "Grazie per la tua risposta!",
    whatsappBtn: "Invia su WhatsApp",
    changeRsvpBtn: "Modifica risposta",
    contactsTitle: "Contatti",
    footerText: "Creato con amore per il matrimonio di Luciano e Vincenza.",
    footerNote: "Invito Geniale 2026 - Agenzia Geniale di Roberto Olivieri",
    // RSVP Dynamic Responses
    rsvpYesSummary: (guests) => `Hai confermato la tua presenza per <strong>${guests} person${guests > 1 ? 'e' : 'a'}</strong>.<br>Non vediamo l'ora di festeggiare insieme!`,
    rsvpNoSummary: "Hai risposto che purtroppo non potrai partecipare. Le tue note sono state salvate.",
    // WhatsApp templates
    waYesHeader: "Ciao Luciano e Vincenza! ✨ Confermo con piacere la mia presenza per il vostro matrimonio! 🥂\n\n",
    waNoHeader: "Ciao Luciano e Vincenza! ❤️ Vi ringrazio tantissimo per l'invito al vostro matrimonio, ma purtroppo non potrò partecipare. Vi faccio i miei migliori auguri di cuore! ✨\n\n",
    waGuestLabel: "👤 Invitato: ",
    waCountLabel: "👥 Saremo in: ",
    waPersonPlural: "persone",
    waPersonSingular: "persona",
    waAllergyLabel: "⚠️ Allergie/Intolleranze: ",
    waAllergyNone: "Nessuna",
    waAllergyTbc: "Sì (da concordare)",
    waMsgLabel: "📝 Messaggio: ",
    waMsgFromLabel: "👤 Da parte di: ",
    storiesTitle: "Le Nostre Storie",
    tabNoi: "💖 Noi",
    tabFianco: "🤝 Al nostro fianco",
    tabSpeciale: "✨ Un posto speciale",
    tabVoi: "👥 Voi",
    storyNoi: `
      <p><strong>A volte non serve cambiare strada, basta solo iniziare a percorrerla insieme.</strong></p>
      <p>Per quasi quattro anni siamo stati lì, a pochi passi l’uno dall’altra. Lavoravamo nello stesso stabile, ci vedevamo quasi ogni giorno, ci conoscevamo. Le nostre giornate si incrociavano tra corridoi e piccoli gesti quotidiani. La strada, in fondo, era già la stessa. Semplicemente, non avevamo ancora iniziato a percorrerla insieme.</p>
      <p>Luciano, con il suo modo gentile e discreto, cercava piccole occasioni per avvicinarsi a Enza: la posta da portare, qualche sorriso in più, qualche invito a bere qualcosa; ma certe storie hanno semplicemente bisogno del loro tempo.</p>
      <p>Poi è arrivato un momento diverso. Uno di quelli in cui, senza bisogno di tante parole, si riesce a vedere oltre ciò che si mostra. È bastato un messaggio, un’attenzione sincera, per farci iniziare a guardare con occhi nuovi qualcosa che era stato davanti a noi per anni.</p>
      <p>Da lì sono arrivati gli sguardi all’uscita dal lavoro, i messaggi, la voglia di cercarsi e, finalmente, di conoscersi davvero.</p>
      <p>Poco alla volta ci siamo scoperti e scelti. Ci hanno uniti la dolcezza dei piccoli gesti, la cura, la complicità e quella capacità di portare luce nelle giornate dell’altro.</p>
      <p>E pensare che il principe azzurro Enza lo immaginava in tutt’altro modo, di certo non con una divisa da lavoro azzurra.🤣</p>
      <p>E invece era già lì, a pochi passi.</p>
      <p>Per anni abbiamo condiviso gli stessi luoghi senza sapere che un giorno avremmo condiviso molto di più. Poi è arrivato il momento giusto: abbiamo iniziato a guardarci davvero, a sceglierci e a camminare nella stessa direzione.</p>
      <p>E oggi, quella strada che percorrevamo già senza saperlo, è diventata la nostra.</p>
    `,
    storyFianco: `
      <p><strong>Ci sono persone che rendono il viaggio più bello, semplicemente camminandoci accanto.</strong></p>
      <p>Ci sono persone che incontriamo lungo il cammino, e poi ci sono quelle che, semplicemente, ci sono da sempre.</p>
      <p><strong>Donato e Rosa</strong>, voi siete questo per noi.</p>
      <p>Quando abbiamo aperto gli occhi sul mondo, eravate già lì. Prima dei ricordi, prima delle parole, prima ancora che potessimo comprendere il significato di avere qualcuno accanto.</p>
      <p>Siete stati i nostri fratelli maggiori, le nostre prime certezze, una presenza che ha attraversato silenziosamente ogni stagione della nostra vita.</p>
      <p>Ci avete visti crescere, cambiare, cadere e ricominciare. Avete conosciuto tante versioni di noi, custodito pezzi della nostra storia e condiviso quei momenti che, senza saperlo, ci stavano conducendo fino a qui.</p>
      <p>E oggi, davanti a uno dei passi più importanti della nostra vita, abbiamo desiderato una cosa semplice: ritrovarvi ancora una volta accanto a noi.</p>
      <p>Scegliervi come testimoni non significa soltanto affidarvi un ruolo nel giorno del nostro matrimonio. Significa dare un posto speciale, nel nostro futuro, a chi ha fatto parte del nostro passato fin dal principio.</p>
      <p>Perché ci sono presenze che il tempo non deve spiegare.</p>
      <p>Ci sono legami che non hanno bisogno di essere scelti per diventare una scelta, ogni giorno.</p>
      <p>C’eravate all’inizio della nostra storia. Ci sarete all’inizio della nostra nuova vita. E forse non poteva esserci modo più bello di dirvi quanto siete importanti per noi.</p>
    `,
    storySpeciale: `
      <p><strong>Ci sono legami che crescono con noi, che il tempo rende preziosi e che, nei momenti più importanti, diventano parte della nostra storia.</strong></p>
      <p>In un giorno così speciale non potevano mancare i nostri nipoti: presenze uniche nelle nostre vite e custodi di un pezzo del nostro cuore.</p>
      <p><strong>Valeria, Daniela, Alisa, Monika e Giorgia</strong> saranno le nostre damigelle. Cinque ragazze, cinque sorrisi che abbiamo voluto accanto a noi per accompagnare con dolcezza uno dei momenti più emozionanti del nostro giorno.</p>
      <p>Ad annunciare che quel momento tanto atteso sta finalmente arrivando ci penserà <strong>Fabio</strong>, il nostro paggetto. Sarà lui a precedere la sposa e le damigelle con un messaggio tutto per lo zio.</p>
      <p>E poi c’è <strong>Francesco</strong>, al quale abbiamo affidato qualcosa di piccolo nelle dimensioni, ma immenso nel significato: le nostre fedi. Sarà lui a custodirle fino al momento in cui diventeranno il simbolo della promessa che stiamo per farci.</p>
      <p>Abbiamo voluto dare a ciascuno di loro un posto speciale perché, quando ricorderemo questo giorno, vogliamo ricordarli proprio così: vicini a noi, ognuno con il proprio ruolo, partecipi di un momento che porteremo per sempre nell'anima.</p>
      <p>Perché ci sono affetti che non hanno bisogno di grandi parole: basta desiderarli accanto quando la vita ci regala qualcosa di indimenticabile.</p>
    `,
    storyVoi: `
      <p><strong>Perché un giorno speciale lo diventa davvero solo quando è condiviso con le persone che contano.</strong></p>
      <p>Ci sono persone che avranno un ruolo speciale nel nostro giorno e altre che lo renderanno unico semplicemente con la loro presenza.</p>
      <p>Ognuno di voi occupa un posto importante nella nostra vita: amici, parenti, persone incontrate lungo il cammino e rimaste, nel tempo, parte della nostra storia.</p>
      <p>Siamo fortunati a essere circondati da tanti affetti sinceri, diversi tra loro ma ugualmente capaci di lasciare qualcosa di prezioso nelle nostre vite.</p>
      <p>Ed è proprio per questo che abbiamo desiderato fortemente avervi con noi: per condividere gli abbracci, le risate, gli sguardi e tutte quelle emozioni che, insieme, diventeranno ricordi.</p>
      <p>Perché questo sarà il nostro giorno, ma una parte della sua bellezza sarà fatta anche dalle persone che avremo intorno.</p>
      <p>E se abbiamo scelto di condividerlo con voi, è perché, ognuno a suo modo, siete parte della nostra vita.</p>
    `,
    scattiTitle: "I Vostri Scatti",
    scattiIntro: "Ci sono momenti che meritano di essere vissuti appieno, con gli occhi e con il cuore. Il nostro desiderio più grande è vedervi godere questa giornata insieme a noi, tra emozioni, abbracci e divertimento, senza la preoccupazione di dover immortalare ogni istante: alle foto ufficiali, infatti, penserà il nostro meraviglioso fotografo!<br><br>Sappiamo però che gli scatti più autentici nascono spesso all'improvviso, attraverso lo sguardo di chi ci vuole bene. Se catturerete una risata sincera, un brindisi o un momento speciale, vi chiediamo di condividerlo nel nostro album digitale. Sarà meraviglioso, dopo il matrimonio, rivivere questo giorno anche attraverso i vostri occhi e i vostri ricordi.<br><br>Qui sotto troverete tutte le indicazioni per caricare foto e video.",
    scattiBtn: "Carica Foto e Video"
  },
  fr: {
    docTitle: "Le Mariage de Luciano & Vincenza | Invitation Officielle",
    badge: "✨ 31 DÉCEMBRE 2026 ✨",
    announcementText: "annoncent avec joie leur MARIAGE",
    dayName: "JEUDI",
    lblDays: "Jours",
    lblHours: "Heures",
    lblMinutes: "Minutes",
    lblSeconds: "Secondes",
    ctaButton: "Confirmer la Présence",
    detailsTitle: "Les Détails de l'Évènement",
    ceremonyTitle: "La Cérémonie",
    ceremonyFunny: "À 16h00 tout le monde est prêt à l'église ! La mariée sera à l'heure : un événement rare à ne pas manquer !",
    mapBtn: "Voir la Carte",
    receptionTitle: "La Réception",
    missionText: "<strong>MISSION DE LA SOIRÉE:</strong> s'amuser ! Nous comptons sur vous pour remplir la piste, trinquer, rire et rendre cette soirée inoubliable !",
    dressCodeTitle: "Dress Code",
    dressCodeVal: "Aucun dress code",
    dressCodeSub: "La liberté est la meilleure tenue que vous puissiez porter !",
    calendarBtn: "Ajouter au Calendrier",
    rsvpTitle: "Serez-vous des nôtres ?",
    rsvpSubtitle: "Réponse souhaitée avant le <strong>30.11.2026</strong>.",
    labelName: "Nom et Prénom",
    placeholderName: "Entrez votre nom complet",
    labelAttendance: "Allez-vous participer ?",
    optionYes: "Oui, avec plaisir !",
    optionNo: "Malheureusement non, je ne pourrai pas",
    labelGuests: "Nombre de Personnes",
    labelAllergies: "Avez-vous des intolérances ou allergies alimentaires ?",
    radioNo: "Non, aucune",
    radioYes: "Oui, j'ai des intolérances / allergies",
    labelDiet: "Veuillez spécifier vos allergies ou exigences alimentaires :",
    placeholderDiet: "Ex. Cœliaque (sans gluten), intolérant au lactose, végétarien, etc.",
    labelNotes: "Message ou Notes spéciales",
    placeholderNotes: "Un message de vœux pour les mariés...",
    submitBtn: "Enregistrer et Confirmer",
    successTitle: "Merci pour votre réponse !",
    whatsappBtn: "Envoyer sur WhatsApp",
    changeRsvpBtn: "Modifier la réponse",
    contactsTitle: "Contacts",
    footerText: "Créé avec amour pour le mariage de Luciano et Vincenza.",
    footerNote: "Invito Geniale 2026 - Agenzia Geniale di Roberto Olivieri",
    // RSVP Dynamic Responses
    rsvpYesSummary: (guests) => `Vous avez confirmé votre présence pour <strong>${guests} personne${guests > 1 ? 's' : ''}</strong>.<br>Nous avons hâte de faire la fête ensemble !`,
    rsvpNoSummary: "Vous avez répondu que vous ne pourrez malheureusement pas participer. Vos notes ont été enregistrées.",
    // WhatsApp templates
    waYesHeader: "Salut Luciano et Vincenza ! ✨ C'est avec grand plaisir que je confirme ma présence pour votre mariage ! 🥂\n\n",
    waNoHeader: "Salut Luciano et Vincenza ! ❤️ Je voulais vous remercier pour l'invitation à votre mariage, mais malheureusement je ne pourrai pas participer. Je vous souhaite tous mes vœux de bonheur ! ✨\n\n",
    waGuestLabel: "👤 Invité: ",
    waCountLabel: "👥 Nombre de personnes: ",
    waPersonPlural: "personnes",
    waPersonSingular: "persona",
    waAllergyLabel: "⚠️ Allergies/Intolérances: ",
    waAllergyNone: "Aucune",
    waAllergyTbc: "Oui (à convenir)",
    waMsgLabel: "📝 Message: ",
    waMsgFromLabel: "👤 De la part de: "
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initEventDetails();
  initCountdown();
  initRSVP();
  initSmoothScroll();
  initStoriesAndAlbum();
});

// 0. Language Switcher Logic
function initLanguageSwitcher() {
  const btn = document.getElementById('lang-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const nextLang = btn.getAttribute('data-lang') === 'it' ? 'fr' : 'it';
    setLanguage(nextLang);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  
  // Translate all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = TRANSLATIONS[lang][key];
    if (translation) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else if (el.tagName === 'OPTION') {
        el.textContent = translation;
      } else {
        el.innerHTML = translation;
      }
    }
  });

  // Update dynamic document title
  document.title = TRANSLATIONS[lang].docTitle;

  // Toggle flag & text on switcher button
  const btn = document.getElementById('lang-btn');
  if (btn) {
    btn.setAttribute('data-lang', lang);
    btn.querySelector('.flag-icon').textContent = lang === 'it' ? '🇫🇷' : '🇮🇹';
    btn.querySelector('.lang-text').textContent = lang === 'it' ? 'FR' : 'IT';
  }

  // Refresh success screen message if RSVP is saved
  const savedRSVP = localStorage.getItem('rsvp_enza_luciano_wedding');
  if (savedRSVP) {
    const data = JSON.parse(savedRSVP);
    const summaryText = document.getElementById('rsvp-summary-text');
    if (summaryText && !document.getElementById('rsvp-success').classList.contains('hidden')) {
      if (data.attendance === 'yes') {
        summaryText.innerHTML = TRANSLATIONS[lang].rsvpYesSummary(data.guestsCount);
      } else {
        summaryText.innerHTML = TRANSLATIONS[lang].rsvpNoSummary;
      }
    }
  }
}

// 1. Initialize Event Metadata from Config
function initEventDetails() {
  const dateEl = document.getElementById('event-date-text');
  if (dateEl) {
    dateEl.textContent = EVENT_CONFIG.eventDateFormatted.split(',')[0]; // Prende solo la data
  }

  // Location
  const locNameEl = document.getElementById('location-name');
  const locAddressEl = document.getElementById('location-address');
  const locNotesEl = document.getElementById('location-notes');
  const locMapBtn = document.getElementById('location-map-btn');
  const calendarBtn = document.getElementById('calendar-btn');

  if (locNameEl) locNameEl.textContent = EVENT_CONFIG.location.name;
  if (locAddressEl) locAddressEl.textContent = EVENT_CONFIG.location.address;
  if (locNotesEl) locNotesEl.textContent = EVENT_CONFIG.location.notes;

  if (EVENT_CONFIG.location.isConfirmed && EVENT_CONFIG.location.gmapsUrl) {
    if (locMapBtn) {
      locMapBtn.href = EVENT_CONFIG.location.gmapsUrl;
      locMapBtn.classList.remove('hidden');
    }
  } else {
    if (locMapBtn) locMapBtn.classList.add('hidden');
  }

  if (calendarBtn && EVENT_CONFIG.calendarUrl) {
    calendarBtn.href = EVENT_CONFIG.calendarUrl;
  }

  // Initial language set to Italian
  setLanguage('it');
}

// 2. Countdown Timer Logic
function initCountdown() {
  const targetDate = new Date(EVENT_CONFIG.eventDate).getTime();

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(timerInterval);
      const timerContainer = document.querySelector('.countdown-container');
      if (timerContainer) {
        timerContainer.innerHTML = `<div class="glass-card" style="width:100%; text-align:center; padding: 15px; font-family: var(--font-serif); font-size:1.4rem; color: var(--gold-primary);">🎉</div>`;
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer(); // Esegui subito all'avvio
  const timerInterval = setInterval(updateTimer, 1000);
}

// 3. Photo Gallery & Gifts sections removed

// 5. RSVP Form Interactive Logic
function initRSVP() {
  const form = document.getElementById('rsvp-form');
  const successContainer = document.getElementById('rsvp-success');
  const attendanceSelect = document.getElementById('attendance');
  const guestsGroup = document.getElementById('guests-count-group');
  const dietGroup = document.getElementById('diet-group');
  const summaryText = document.getElementById('rsvp-summary-text');
  const changeRsvpBtn = document.getElementById('change-rsvp-btn');
  const sendWhatsAppBtn = document.getElementById('send-whatsapp-btn');

  if (!form) return;

  // Helper for menu options
  function populateMenuOptions(typeSelect, menuSelect) {
    const val = typeSelect.value;
    menuSelect.innerHTML = '';
    if (val === 'adult') {
      menuSelect.innerHTML = `
        <option value="Completo" selected>Completo</option>
        <option value="Vegetariano">Vegetariano</option>
        <option value="Vegano">Vegano</option>
      `;
    } else {
      menuSelect.innerHTML = `
        <option value="Menù Baby" selected>Menù Baby</option>
        <option value="Completo">Completo</option>
        <option value="Solo posto a sedere">Solo posto a sedere</option>
      `;
    }
  }

  // Bind first guest
  const mainTypeSelect = document.getElementById('main-guest-type');
  const mainMenuSelect = document.getElementById('main-guest-menu');
  if (mainTypeSelect && mainMenuSelect) {
    mainTypeSelect.addEventListener('change', () => {
      populateMenuOptions(mainTypeSelect, mainMenuSelect);
    });
  }

  // Toggle fields based on attendance choice (Yes/No)
  attendanceSelect.addEventListener('change', (e) => {
    const hasAllergiesChecked = document.querySelector('input[name="has-allergies"]:checked')?.value === 'yes';
    const mainGuestOptions = document.getElementById('main-guest-options-group');
    if (e.target.value === 'no') {
      guestsGroup.classList.add('hidden');
      if (mainGuestOptions) mainGuestOptions.classList.add('hidden');
      document.querySelector('input[name="has-allergies"][value="no"]').checked = true;
      document.querySelectorAll('input[name="has-allergies"]').forEach(el => el.disabled = true);
      dietGroup.classList.add('hidden');
    } else {
      guestsGroup.classList.remove('hidden');
      if (mainGuestOptions) mainGuestOptions.classList.remove('hidden');
      document.querySelectorAll('input[name="has-allergies"]').forEach(el => el.disabled = false);
      if (hasAllergiesChecked) {
        dietGroup.classList.remove('hidden');
      }
    }
  });

  // Toggle allergy details field based on radio selection
  document.querySelectorAll('input[name="has-allergies"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'yes') {
        dietGroup.classList.remove('hidden');
      } else {
        dietGroup.classList.add('hidden');
      }
    });
  });

  // Dynamic guest fields (Name, Type, Menu)
  const guestsCountInput = document.getElementById('guests-count');
  const guestNamesContainer = document.getElementById('guest-names-container');

  function updateGuestFields() {
    const count = parseInt(guestsCountInput.value, 10);
    
    // Add fields if needed
    while (guestNamesContainer.children.length < count - 1) {
      const idx = guestNamesContainer.children.length + 2; // Guest 2, 3, etc.
      const wrapper = document.createElement('div');
      wrapper.className = 'guest-field-group';
      wrapper.style.marginTop = '20px';
      wrapper.style.borderTop = '1px dashed var(--red-light)';
      wrapper.style.paddingTop = '15px';
      
      wrapper.innerHTML = `
        <div class="form-group">
          <label>Nome e Cognome Ospite ${idx}</label>
          <input type="text" class="guest-name-input" placeholder="Inserisci il nome completo" required>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Tipo Ospite</label>
            <select class="guest-type-select">
              <option value="adult" selected>Adulto</option>
              <option value="child">Bambino</option>
            </select>
          </div>
          <div class="form-group">
            <label>Scelta Menù</label>
            <select class="guest-menu-select">
              <option value="Completo" selected>Completo</option>
              <option value="Vegetariano">Vegetariano</option>
              <option value="Vegano">Vegano</option>
            </select>
          </div>
        </div>
      `;
      
      // Bind type select listener
      const typeSel = wrapper.querySelector('.guest-type-select');
      const menuSel = wrapper.querySelector('.guest-menu-select');
      typeSel.addEventListener('change', () => {
        populateMenuOptions(typeSel, menuSel);
      });

      guestNamesContainer.appendChild(wrapper);
    }

    // Remove extra fields if needed
    while (guestNamesContainer.children.length > count - 1) {
      guestNamesContainer.lastElementChild.remove();
    }
  }

  guestsCountInput.addEventListener('input', updateGuestFields);
  updateGuestFields();

  // Check for existing RSVP in localStorage
  const savedRSVP = localStorage.getItem('rsvp_enza_luciano_wedding');
  if (savedRSVP) {
    const data = JSON.parse(savedRSVP);
    showSuccessScreen(data);
  }

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('guest-name').value.trim();
    const attendance = attendanceSelect.value;
    const hasAllergies = document.querySelector('input[name="has-allergies"]:checked')?.value === 'yes';
    const guestsCount = attendance === 'yes' ? parseInt(guestsCountInput.value, 10) : 0;
    const diet = (attendance === 'yes' && hasAllergies) ? document.getElementById('diet-requirements').value.trim() : '';
    const notes = document.getElementById('guest-notes').value.trim();

    const guestsList = [];
    if (attendance === 'yes') {
      // Main guest
      const mainType = mainTypeSelect.value === 'adult' ? 'Adulto' : 'Bambino';
      const mainMenu = mainMenuSelect.value;
      guestsList.push({ name, type: mainType, menu: mainMenu });

      // Extra guests
      const groups = guestNamesContainer.querySelectorAll('.guest-field-group');
      groups.forEach(group => {
        const extraName = group.querySelector('.guest-name-input').value.trim();
        const extraType = group.querySelector('.guest-type-select').value === 'adult' ? 'Adulto' : 'Bambino';
        const extraMenu = group.querySelector('.guest-menu-select').value;
        if (extraName) {
          guestsList.push({ name: extraName, type: extraType, menu: extraMenu });
        }
      });
    }

    const rsvpData = { name, attendance, hasAllergies, guestsCount, diet, notes, guestsList };
    localStorage.setItem('rsvp_enza_luciano_wedding', JSON.stringify(rsvpData));

    showSuccessScreen(rsvpData);
    sendToWebhook(rsvpData);
  });

  // Edit Response button
  changeRsvpBtn.addEventListener('click', () => {
    successContainer.classList.add('hidden');
    form.classList.remove('hidden');
    
    // Pre-fill existing data
    const savedRSVP = localStorage.getItem('rsvp_enza_luciano_wedding');
    if (savedRSVP) {
      const data = JSON.parse(savedRSVP);
      document.getElementById('guest-name').value = data.name;
      attendanceSelect.value = data.attendance;
      
      const mainGuestOptions = document.getElementById('main-guest-options-group');

      if (data.attendance === 'no') {
        guestsGroup.classList.add('hidden');
        if (mainGuestOptions) mainGuestOptions.classList.add('hidden');
        dietGroup.classList.add('hidden');
        document.querySelectorAll('input[name="has-allergies"]').forEach(el => el.disabled = true);
      } else {
        guestsCountInput.value = data.guestsCount;
        updateGuestFields();
        
        if (data.guestsList && data.guestsList.length > 0) {
          // Pre-fill primary guest
          const pGuest = data.guestsList[0];
          if (mainTypeSelect) {
            mainTypeSelect.value = pGuest.type === 'Adulto' ? 'adult' : 'child';
            populateMenuOptions(mainTypeSelect, mainMenuSelect);
            mainMenuSelect.value = pGuest.menu;
          }

          // Pre-fill extra guests
          const groups = guestNamesContainer.querySelectorAll('.guest-field-group');
          groups.forEach((group, i) => {
            const guestData = data.guestsList[i + 1];
            if (guestData) {
              group.querySelector('.guest-name-input').value = guestData.name;
              const typeSel = group.querySelector('.guest-type-select');
              const menuSel = group.querySelector('.guest-menu-select');
              typeSel.value = guestData.type === 'Adulto' ? 'adult' : 'child';
              populateMenuOptions(typeSel, menuSel);
              menuSel.value = guestData.menu;
            }
          });
        }

        document.querySelectorAll('input[name="has-allergies"]').forEach(el => el.disabled = false);
        if (data.hasAllergies) {
          document.querySelector('input[name="has-allergies"][value="yes"]').checked = true;
          document.getElementById('diet-requirements').value = data.diet;
          dietGroup.classList.remove('hidden');
        } else {
          document.querySelector('input[name="has-allergies"][value="no"]').checked = true;
          dietGroup.classList.add('hidden');
        }
        guestsGroup.classList.remove('hidden');
        if (mainGuestOptions) mainGuestOptions.classList.remove('hidden');
      }
      document.getElementById('guest-notes').value = data.notes;
    }
  });

  // WhatsApp redirection message builder
  sendWhatsAppBtn.addEventListener('click', () => {
    const savedRSVP = localStorage.getItem('rsvp_enza_luciano_wedding');
    if (!savedRSVP) return;

    const data = JSON.parse(savedRSVP);
    let message = "";
    
    const t = TRANSLATIONS[currentLang];

    if (data.attendance === 'yes') {
      message = `*Conferma di partecipazione al Matrimonio*\n\n`;
      message += `Sì, confermiamo la presenza!\n\n`;
      message += `*Dettagli Ospiti:*\n`;
      if (data.guestsList && data.guestsList.length > 0) {
        data.guestsList.forEach((g, idx) => {
          message += `👤 Ospite ${idx + 1}: ${g.name} (${g.type} - Menù: ${g.menu})\n`;
        });
      } else {
        message += `👤 Ospite 1: ${data.name}\n`;
      }
      message += `\n*Totale Persone:* ${data.guestsCount}\n`;
      if (data.hasAllergies && data.diet) {
        message += `⚠️ *Allergie/Intolleranze:* ${data.diet}\n`;
      } else {
        message += `⚠️ *Allergie/Intolleranze:* Nessuna\n`;
      }
      if (data.notes) {
        message += `✉️ *Note:* "${data.notes}"\n`;
      }
    } else {
      message = `*Conferma di partecipazione al Matrimonio*\n\n`;
      message += `Purtroppo non potrò esserci.\n\n`;
      message += `Un caloroso abbraccio da: ${data.name}`;
      if (data.notes) {
        message += `\n✉️ *Messaggio:* "${data.notes}"`;
      }
    }

    const waLink = `https://api.whatsapp.com/send?phone=${EVENT_CONFIG.whatsAppPhone}&text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  });

  function showSuccessScreen(data) {
    form.classList.add('hidden');
    successContainer.classList.remove('hidden');

    const t = TRANSLATIONS[currentLang];
    if (data.attendance === 'yes') {
      summaryText.innerHTML = t.rsvpYesSummary(data.guestsCount);
    } else {
      summaryText.innerHTML = t.rsvpNoSummary;
    }
  }
}

// 7. Smooth Scroll for scroll link CTAs
function initSmoothScroll() {
  document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// 8. Send data to Google Apps Script Web App (Google Sheets Integration)
function sendToWebhook(data) {
  if (EVENT_CONFIG.rsvpWebhookUrl) {
    fetch(EVENT_CONFIG.rsvpWebhookUrl, {
      method: 'POST',
      mode: 'no-cors', // Evita il blocco CORS (Preflight OPTIONS) di Google Apps Script
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .catch(error => {
      console.error("Errore durante l'invio al Webhook:", error);
    });
  }
}

// 9. Interactive Stories Tabs and Photo Album Binding
function initStoriesAndAlbum() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      const targetTab = button.getAttribute('data-tab');
      const activeContent = document.getElementById(`tab-${targetTab}`);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });

  const albumBtn = document.getElementById('scatti-album-btn');
  if (albumBtn) {
    if (EVENT_CONFIG.albumUrl && EVENT_CONFIG.albumUrl !== '#') {
      albumBtn.href = EVENT_CONFIG.albumUrl;
    } else {
      albumBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Il link per caricare le foto sarà attivo il giorno del matrimonio! 📸');
      });
    }
  }
}
