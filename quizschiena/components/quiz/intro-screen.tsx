import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface IntroScreenProps {
  onStart: () => void
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="flex-1 flex flex-col animate-fadeUp">
      <div className="px-6 py-8 flex-1 flex flex-col">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.png-2BwC0dLyxL9F0rF7Vz6LVDgtf9qwiI.jpeg"
          alt="SchienaLibera Logo"
          width={180}
          height={120}
          className="mb-6 object-contain"
        />
        
        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-teal mb-2.5">
          Test gratuito · 2 minuti
        </p>
        
        <h1 className="font-[family-name:var(--font-dm-sans)] font-medium text-[clamp(28px,7vw,40px)] leading-[1.15] text-navy mb-4">
          Quanto sta<br />resistendo<br /><span className="text-teal">la tua schiena?</span>
        </h1>
        
        <p className="font-[family-name:var(--font-dm-sans)] text-base font-light leading-[1.7] text-slate mb-7">
          5 domande per scoprire il tuo livello di rischio — e cosa fare adesso prima che il problema peggiori.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-9">
          <span className="bg-teal-soft border border-teal-pale text-teal-dark text-xs font-medium px-3 py-1.5 rounded-full">
            Lavoratori sedentari
          </span>
          <span className="bg-teal-soft border border-teal-pale text-teal-dark text-xs font-medium px-3 py-1.5 rounded-full">
            Cervicale & lombare
          </span>
          <span className="bg-teal-soft border border-teal-pale text-teal-dark text-xs font-medium px-3 py-1.5 rounded-full">
            Risultato immediato
          </span>
        </div>
        
        <button
          onClick={onStart}
          className="w-full inline-flex items-center justify-center gap-2 font-[family-name:var(--font-syne)] font-bold text-[15px] px-7 py-4 rounded-full bg-teal text-white shadow-[0_6px_24px_rgba(13,148,136,0.3)] hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(13,148,136,0.4)] active:translate-y-0 transition-all"
        >
          Inizia il quiz
          <ArrowRight className="w-[18px] h-[18px]" />
        </button>
        
        <p className="mt-3 text-center text-xs text-fog">
          Nessun dato richiesto per iniziare
        </p>
      </div>
    </div>
  )
}
