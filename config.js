const EVENT_CONFIG = {
  celebrantName: "Luciano & Vincenza",
  eventDate: "2026-12-31T15:30:00", // Formato ISO per il conto alla rovescia (31 Dicembre 2026, 15:30)
  eventDateFormatted: "Giovedì 31 Dicembre 2026, ore 15:30",
  calendarUrl: "https://www.google.com/calendar/render?action=TEMPLATE&text=Matrimonio+di+Luciano+ed+Enza&dates=20261231T143000Z%2F20261231T233000Z&details=Festeggiate+con+noi+il+nostro+matrimonio%21+Ricordatevi+di+dare+conferma+sul+sito.&location=Chiesa+Maria+S.S.+del+Monte+Carmelo%2C+Martina+Franca+TA",
  whatsAppPhone: "+393295658461", // WhatsApp di Vincenza per RSVP
  location: {
    name: "Abbazia San Lorenzo",
    address: "Contrada Sant'Angelo 5, Fasano (Br)",
    gmapsUrl: "https://maps.google.com/?q=Abbazia+San+Lorenzo+Fasano",
    notes: "La cerimonia si terrà alle 15:30 presso la Chiesa Maria S.S. del Monte Carmelo a Martina Franca (Ta). A seguire, festeggeremo presso l'Abbazia San Lorenzo a Fasano (Br).",
    isConfirmed: true
  },
  ceremony: {
    name: "Chiesa Maria S.S. del Monte Carmelo",
    address: "Martina Franca (Ta)",
    time: "ore 15:30",
    gmapsUrl: "https://maps.google.com/?q=Chiesa+Maria+S.S.+del+Monte+Carmelo+Martina+Franca"
  },
  contacts: {
    luciano: {
      name: "Luciano Calella",
      phone: "+393280069654"
    },
    vincenza: {
      name: "Vincenza Gioia",
      phone: "+393295658461"
    }
  },
  dressCode: "Nessun dress code: la libertà è l'abito migliore che possiate indossare!",
  rsvpDeadlineFormatted: "30 Novembre 2026",
  rsvpWebhookUrl: "",
  albumUrl: "https://weduploader.com/upload/xZ9szCItKS7FR8CF?utm_source=site&utm_medium=linkCopy&utm_campaign=upload&utm_content=xZ9szCItKS7FR8CF"
};
export default EVENT_CONFIG;
