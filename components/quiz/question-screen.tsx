"use client"

import { ArrowRight } from "lucide-react"
import type { Question } from "@/lib/quiz-data"

interface QuestionScreenProps {
  question: Question
  questionIndex: number
  totalQuestions: number
  selectedIndex: number | null
  onSelect: (index: number) => void
  onNext: () => void
  isLast: boolean
}

export function QuestionScreen({
  question,
  questionIndex,
  totalQuestions,
  selectedIndex,
  onSelect,
  onNext,
  isLast
}: QuestionScreenProps) {
  return (
    <div className="flex-1 flex flex-col animate-fadeUp" key={questionIndex}>
      <div className="px-6 py-8 flex-1 flex flex-col">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-teal mb-2.5">
          Domanda {questionIndex + 1} di {totalQuestions}
        </p>
        
        <h2 className="font-[family-name:var(--font-syne)] font-bold text-[clamp(20px,5vw,26px)] leading-[1.25] text-navy mb-7">
          {question.text}
        </h2>
        
        <div className="flex flex-col gap-2.5 flex-1">
          {question.options.map((option, idx) => {
            const isSelected = selectedIndex === idx

            return (
              <button
                key={idx}
                onClick={() => onSelect(idx)}
                className={`flex items-center gap-3.5 p-4 border-[1.5px] rounded-[14px] cursor-pointer transition-all select-none text-left
                  ${isSelected
                    ? "border-teal bg-teal-soft shadow-[0_0_0_3px_rgba(13,148,136,0.1)]"
                    : "border-border bg-off-white hover:border-teal-pale hover:bg-teal-soft"
                  }
                `}
              >
                <div 
                  className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all
                    ${isSelected
                      ? "border-teal bg-teal"
                      : "border-border bg-white"
                    }
                  `}
                >
                  <div 
                    className={`w-[7px] h-[7px] bg-white rounded-full transition-all
                      ${isSelected ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                    `}
                  />
                </div>
                <span 
                  className={`text-[15px] leading-[1.4] flex-1 transition-colors
                    ${isSelected ? "text-navy font-medium" : "text-slate"}
                  `}
                >
                  {option.text}
                </span>
              </button>
            )
          })}
        </div>
        
        <div className="mt-7">
          <button
            onClick={onNext}
            disabled={selectedIndex === null}
            className="w-full inline-flex items-center justify-center gap-2 font-[family-name:var(--font-syne)] font-bold text-[15px] px-7 py-4 rounded-full transition-all
              disabled:bg-fog disabled:shadow-none disabled:cursor-not-allowed disabled:text-slate disabled:translate-y-0
              enabled:bg-teal enabled:text-white enabled:shadow-[0_6px_24px_rgba(13,148,136,0.3)] enabled:hover:bg-teal-dark enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_10px_32px_rgba(13,148,136,0.4)] enabled:active:translate-y-0"
          >
            {isLast ? "Vedi il risultato" : "Avanti"}
            <ArrowRight className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  )
}
