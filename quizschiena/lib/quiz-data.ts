export interface Question {
  text: string
  options: { text: string; pts: number }[]
}

export interface Result {
  badgeClass: string
  badgeText: string
  title: string
  body: string
  plan: { icon: string; text: string }[]
  ctaTitle: string
  ctaSub: string
  tag: string
}

export const questions: Question[] = [
  {
    text: "Quante ore al giorno resti seduto senza alzarti?",
    options: [
      { text: "Meno di 4 ore", pts: 1 },
      { text: "4–6 ore", pts: 2 },
      { text: "6–8 ore", pts: 3 },
      { text: "Più di 8 ore", pts: 4 }
    ]
  },
  {
    text: "Dove senti tensione o dolore più spesso?",
    options: [
      { text: "Nessuna tensione particolare", pts: 0 },
      { text: "Solo cervicale (collo e spalle)", pts: 2 },
      { text: "Solo lombare (bassa schiena)", pts: 2 },
      { text: "Entrambe le zone", pts: 4 }
    ]
  },
  {
    text: "Con che frequenza il fastidio ti distrae durante il lavoro?",
    options: [
      { text: "Mai", pts: 0 },
      { text: "Raramente — 1–2 volte a settimana", pts: 1 },
      { text: "Spesso — quasi ogni giorno", pts: 3 },
      { text: "Sempre — è una costante", pts: 4 }
    ]
  },
  {
    text: "Hai già provato qualcosa per risolvere il problema?",
    options: [
      { text: "No, non ho ancora fatto nulla", pts: 1 },
      { text: "Sì, qualche esercizio su YouTube", pts: 2 },
      { text: "Sì, sono andato dal fisioterapista", pts: 2 },
      { text: "Ho provato più cose ma non ho mai continuato", pts: 3 }
    ]
  },
  {
    text: "Come ti senti fisicamente a fine giornata lavorativa?",
    options: [
      { text: "Bene — nessun problema particolare", pts: 0 },
      { text: "Un po' stanco ma niente di grave", pts: 1 },
      { text: "Rigido e affaticato — ho bisogno di tempo per recuperare", pts: 3 },
      { text: "A pezzi — il corpo me lo fa sentire ogni sera", pts: 4 }
    ]
  }
]

export const results: Record<1 | 2 | 3, Result> = {
  1: {
    badgeClass: "bg-emerald-50 border border-emerald-200 text-emerald-600",
    badgeText: "Livello 1",
    title: "Schiena in equilibrio — ma attenzione",
    body: "La tua schiena regge ancora bene. Ma il profilo che emerge indica che sei nella fase in cui è più facile intervenire. Chi aspetta il dolore cronico di solito aspetta troppo.",
    plan: [
      { icon: "clock", text: "Alzati almeno una volta ogni 45–50 minuti" },
      { icon: "refresh", text: "Fai 2–3 rotazioni delle spalle ad ogni pausa" },
      { icon: "chart", text: "Monitora come ti senti nel pomeriggio — i segnali arrivano prima del dolore" }
    ],
    ctaTitle: "Vuoi un sistema che lo faccia automaticamente per te?",
    ctaSub: "SchienaLibera gestisce reminder, esercizi guidati e tracking.",
    tag: "livello1"
  },
  2: {
    badgeClass: "bg-amber-50 border border-amber-200 text-amber-600",
    badgeText: "Livello 2",
    title: "Tensione cronica in formazione",
    body: "Il tuo punteggio indica una tensione che si sta strutturando. Non è ancora grave — ma è esattamente la fase in cui la maggior parte delle persone aspetta, normalizza, rimanda.",
    plan: [
      { icon: "clock", text: "Identifica i momenti in cui la tensione aumenta — di solito dopo le 14" },
      { icon: "bulb", text: "Introduci una micro-pausa attiva ogni ora, anche solo 3 minuti" },
      { icon: "x", text: "Smetti di aspettare la sera per fare stretching — non funziona, non lo farai" }
    ],
    ctaTitle: "Vuoi un protocollo che pensi per te?",
    ctaSub: "Reminder contestuale, esercizi guidati e tracking progressi.",
    tag: "livello2"
  },
  3: {
    badgeClass: "bg-red-50 border border-red-200 text-red-600",
    badgeText: "Livello 3",
    title: "Schiena sotto stress — serve un intervento",
    body: "Il tuo profilo è chiaro: ore di seduta prolungate, tensione già presente, soluzioni già provate senza continuità. Non è un problema di forza di volontà — è un problema di sistema.",
    plan: [
      { icon: "zap", text: "Non aspettare il momento giusto — non arriverà da solo" },
      { icon: "link", text: "Il problema non è la palestra o il fisio — è la continuità tra una seduta e l'altra" },
      { icon: "target", text: "Hai bisogno di un sistema che lavori durante la tua giornata, non dopo" }
    ],
    ctaTitle: "SchienaLibera è stato costruito esattamente per questo profilo.",
    ctaSub: "Inizia oggi e riprendi il controllo della tua schiena.",
    tag: "livello3"
  }
}

export function getResultLevel(score: number): 1 | 2 | 3 {
  if (score <= 5) return 1
  if (score <= 11) return 2
  return 3
}
