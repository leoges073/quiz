"use client"

import { CheckCircle, Mail, ArrowRight, AlertCircle } from "lucide-react"

interface ThankYouScreenProps {
  email: string
}

export function ThankYouScreen({ email }: ThankYouScreenProps) {
  return (
    <div className="flex-1 flex flex-col animate-fadeUp">
      <div className="px-6 py-8 flex-1 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-teal-soft flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-teal" />
        </div>
        
        <h2 className="font-[family-name:var(--font-syne)] font-bold text-[clamp(22px,5vw,28px)] leading-[1.25] text-navy mb-4">
          Perfetto! Controlla la tua email
        </h2>
        
        <p className="text-slate text-[15px] leading-relaxed mb-4">
          Ti abbiamo inviato il piano personalizzato a:
        </p>
        
        <div className="flex items-center gap-3 bg-off-white rounded-xl px-5 py-3.5 mb-8">
          <Mail className="w-5 h-5 text-teal" />
          <span className="text-navy font-medium text-[15px]">{email}</span>
        </div>
        
        <div className="bg-amber-50 rounded-xl p-5 mb-8 text-left w-full">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-[14px] leading-relaxed">
              <strong>Non la trovi?</strong> Controlla nella cartella spam o promozioni. A volte le email finiscono lì per errore.
            </p>
          </div>
        </div>
        
        <div className="mt-auto w-full">
          <a
            href="https://www.schienalibera.com/contatti"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 font-[family-name:var(--font-syne)] font-bold text-[15px] px-7 py-4 rounded-full bg-teal text-white shadow-[0_6px_24px_rgba(13,148,136,0.3)] transition-all hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(13,148,136,0.4)] active:translate-y-0"
          >
            Ricevi SchienaLibera gratis per una settimana
            <ArrowRight className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </div>
  )
}
