"use client"

import { useState } from "react"
import { ArrowRight, Mail, Lock, Check } from "lucide-react"
import type { Result } from "@/lib/quiz-data"

interface OptinScreenProps {
  userLevel: 1 | 2 | 3
  result: Result
  onSubmit: (email: string) => void
}

export function OptinScreen({ userLevel, result, onSubmit }: OptinScreenProps) {
  const [email, setEmail] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setIsValid(validateEmail(value))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isValid && !isSubmitting) {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))
      onSubmit(email)
    }
  }

  return (
    <div className="flex-1 flex flex-col animate-fadeUp">
      <div className="px-6 py-8 flex-1 flex flex-col">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-teal mb-2.5">
          Quasi fatto
        </p>
        
        <h2 className="font-[family-name:var(--font-syne)] font-bold text-[clamp(20px,5vw,26px)] leading-[1.25] text-navy mb-3">
          Ricevi il tuo piano personalizzato
        </h2>
        
        <p className="text-slate text-[15px] leading-relaxed mb-6">
          Inserisci la tua email per ricevere il piano completo per il tuo{" "}
          <span className={`font-semibold ${
            userLevel === 1 ? "text-emerald-600" : 
            userLevel === 2 ? "text-amber-600" : 
            "text-red-600"
          }`}>
            {result.badgeText}
          </span>
          , con esercizi e consigli mirati.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col flex-1">
          <div className="relative mb-4">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="La tua email migliore"
              className="w-full pl-12 pr-12 py-4 bg-off-white border-[1.5px] border-border rounded-xl text-[15px] text-navy placeholder:text-slate/60 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all"
            />
            {isValid && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-teal animate-fadeIn">
                <Check className="w-5 h-5" />
              </div>
            )}
          </div>
          
          <div className="flex items-start gap-3 mb-6 p-4 bg-off-white rounded-xl">
            <Lock className="w-4 h-4 text-slate mt-0.5 flex-shrink-0" />
            <p className="text-slate text-[13px] leading-relaxed">
              I tuoi dati sono al sicuro. Non condivideremo mai la tua email. Puoi disiscriverti in qualsiasi momento.
            </p>
          </div>
          
          <ul className="space-y-3 mb-7">
            {[
              "Piano PDF personalizzato per il tuo livello",
              "3 esercizi specifici da fare subito",
              "Video tutorial gratuito di 10 minuti"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate text-[14px]">
                <div className="w-5 h-5 rounded-full bg-teal-soft flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-teal" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          
          <div className="mt-auto">
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 font-[family-name:var(--font-syne)] font-bold text-[15px] px-7 py-4 rounded-full transition-all
                disabled:bg-fog disabled:shadow-none disabled:cursor-not-allowed disabled:text-slate disabled:translate-y-0
                enabled:bg-teal enabled:text-white enabled:shadow-[0_6px_24px_rgba(13,148,136,0.3)] enabled:hover:bg-teal-dark enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_10px_32px_rgba(13,148,136,0.4)] enabled:active:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  <span className="w-[18px] h-[18px] border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Invio in corso...
                </>
              ) : (
                <>
                  Invia il piano
                  <ArrowRight className="w-[18px] h-[18px]" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
