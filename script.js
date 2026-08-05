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
    waMsgFromLabel: "👤 Da parte di: "
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

  // Toggle fields based on attendance choice (Yes/No)
  attendanceSelect.addEventListener('change', (e) => {
    const hasAllergiesChecked = document.querySelector('input[name="has-allergies"]:checked')?.value === 'yes';
    if (e.target.value === 'no') {
      guestsGroup.classList.add('hidden');
      document.querySelector('input[name="has-allergies"][value="no"]').checked = true;
      document.querySelectorAll('input[name="has-allergies"]').forEach(el => el.disabled = true);
      dietGroup.classList.add('hidden');
    } else {
      guestsGroup.classList.remove('hidden');
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

  // Check for existing RSVP in localStorage
  const savedRSVP = localStorage.getItem('rsvp_enza_luciano_wedding');
  if (savedRSVP) {
    const data = JSON.parse(savedRSVP);
    showSuccessScreen(data);
  }

  // Dynamic guest name fields
  const guestsCountInput = document.getElementById('guests-count');
  const guestNamesContainer = document.getElementById('guest-names-container');

  function updateGuestNameFields() {
    const count = parseInt(guestsCountInput.value, 10);
    const currentFields = guestNamesContainer.children;

    while (currentFields.length < count - 1) {
      const i = currentFields.length + 1;
      const wrapper = document.createElement('div');
      wrapper.className = 'form-group guest-name-field';
      wrapper.innerHTML = `
        <label>Nome Ospite ${i + 1}</label>
        <input type="text" class="guest-name-input" placeholder="Nome e cognome ospite ${i + 1}">
      `;
      guestNamesContainer.appendChild(wrapper);
    }

    while (currentFields.length > count - 1) {
      currentFields[currentFields.length - 1].remove();
    }
  }

  guestsCountInput.addEventListener('input', updateGuestNameFields);
  updateGuestNameFields();

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('guest-name').value.trim();
    const attendance = attendanceSelect.value;
    const hasAllergies = document.querySelector('input[name="has-allergies"]:checked')?.value === 'yes';
    const guestsCount = attendance === 'yes' ? parseInt(guestsCountInput.value, 10) : 0;
    const diet = (attendance === 'yes' && hasAllergies) ? document.getElementById('diet-requirements').value.trim() : '';
    const notes = document.getElementById('guest-notes').value.trim();

    const guestNames = [];
    guestNamesContainer.querySelectorAll('.guest-name-input').forEach(input => {
      const val = input.value.trim();
      if (val) guestNames.push(val);
    });

    const rsvpData = { name, attendance, hasAllergies, guestsCount, diet, notes, guestNames };
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
      
      if (data.attendance === 'no') {
        guestsGroup.classList.add('hidden');
        dietGroup.classList.add('hidden');
        document.querySelectorAll('input[name="has-allergies"]').forEach(el => el.disabled = true);
      } else {
        guestsCountInput.value = data.guestsCount;
        updateGuestNameFields();
        if (data.guestNames) {
          const inputs = guestNamesContainer.querySelectorAll('.guest-name-input');
          data.guestNames.forEach((gn, i) => {
            if (inputs[i]) inputs[i].value = gn;
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
      message = t.waYesHeader;
      message += `${t.waGuestLabel}${data.name}\n`;
      if (data.guestNames && data.guestNames.length > 0) {
        data.guestNames.forEach(gn => {
          message += `${t.waGuestLabel}${gn}\n`;
        });
      }
      message += `${t.waCountLabel}${data.guestsCount} ${data.guestsCount > 1 ? t.waPersonPlural : t.waPersonSingular}\n`;
      if (data.hasAllergies && data.diet) {
        message += `${t.waAllergyLabel}${data.diet}\n`;
      } else if (data.hasAllergies) {
        message += `${t.waAllergyLabel}${t.waAllergyTbc}\n`;
      } else {
        message += `${t.waAllergyLabel}${t.waAllergyNone}\n`;
      }
      if (data.notes) {
        message += `${t.waMsgLabel}"${data.notes}"\n`;
      }
    } else {
      message = t.waNoHeader;
      message += `${t.waMsgFromLabel}${data.name}`;
      if (data.notes) {
        message += `\n${t.waMsgLabel}"${data.notes}"`;
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
