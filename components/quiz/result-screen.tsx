"use client"

import { ArrowRight, Clock, RefreshCw, BarChart2, Lightbulb, X, Zap, Link2, Target } from "lucide-react"
import type { Result } from "@/lib/quiz-data"

interface ResultScreenProps {
  score: number
  maxScore: number
  result: Result
}

const iconMap: Record<string, React.ReactNode> = {
  clock: <Clock className="w-4 h-4" />,
  refresh: <RefreshCw className="w-4 h-4" />,
  chart: <BarChart2 className="w-4 h-4" />,
  bulb: <Lightbulb className="w-4 h-4" />,
  x: <X className="w-4 h-4" />,
  zap: <Zap className="w-4 h-4" />,
  link: <Link2 className="w-4 h-4" />,
  target: <Target className="w-4 h-4" />
}

export function ResultScreen({ score, maxScore, result }: ResultScreenProps) {
  return (
    <div className="flex-1 flex flex-col animate-fadeUp">
      <div className="px-6 py-8 flex-1 flex flex-col">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-teal mb-2.5">
          Il tuo profilo
        </p>
        
        <div className="mb-5">
          <span className={`inline-block text-[11px] font-semibold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full ${result.badgeClass}`}>
            {result.badgeText}
          </span>
        </div>
        
        <h2 className="font-[family-name:var(--font-syne)] font-bold text-[clamp(20px,5vw,26px)] leading-[1.25] text-navy mb-4">
          {result.title}
        </h2>
        
        <p className="text-slate text-[15px] leading-relaxed mb-6">
          {result.body}
        </p>
        
        <div className="bg-off-white rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate text-sm">Punteggio</span>
            <span className="font-[family-name:var(--font-syne)] font-bold text-navy text-lg">{score}/{maxScore}</span>
          </div>
          <div className="h-2 bg-fog rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-teal to-teal-dark rounded-full transition-all duration-700"
              style={{ width: `${(score / maxScore) * 100}%` }}
            />
          </div>
        </div>
        
        <div className="mb-7">
          <h3 className="text-[13px] font-semibold text-navy mb-3 uppercase tracking-wide">
            Piano consigliato
          </h3>
          <ul className="space-y-3">
            {result.plan.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate text-[14px] leading-relaxed">
                <span className="w-7 h-7 bg-teal-soft rounded-lg flex items-center justify-center flex-shrink-0 text-teal mt-0.5">
                  {iconMap[item.icon] || item.icon}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-off-white rounded-2xl p-5 mb-6">
          <h4 className="font-[family-name:var(--font-syne)] font-bold text-[15px] text-navy mb-2">
            {result.ctaTitle}
          </h4>
          <p className="text-slate text-[13px] leading-relaxed">
            {result.ctaSub}
          </p>
        </div>
        
        <div className="mt-auto">
          <a
            href="https://www.schienalibera.com/contatti"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 font-[family-name:var(--font-syne)] font-bold text-[15px] px-7 py-4 rounded-full bg-teal text-white shadow-[0_6px_24px_rgba(13,148,136,0.3)] transition-all hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(13,148,136,0.4)] active:translate-y-0"
          >
            Ricevi il piano via email
            <ArrowRight className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </div>
  )
}
