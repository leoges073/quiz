"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/quiz/header"
import { ProgressBar } from "@/components/quiz/progress-bar"
import { IntroScreen } from "@/components/quiz/intro-screen"
import { QuestionScreen } from "@/components/quiz/question-screen"
import { ResultScreen } from "@/components/quiz/result-screen"
import { Footer } from "@/components/quiz/footer"
import { questions, results, getResultLevel } from "@/lib/quiz-data"

type Screen = "intro" | "question" | "result"

export default function QuizPage() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("intro")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [userLevel, setUserLevel] = useState<1 | 2 | 3>(1)
  const [animatedScore, setAnimatedScore] = useState(0)

  const showProgress = currentScreen === "question" || currentScreen === "result"
  const progressPercent = currentScreen === "result" 
    ? 100 
    : (currentQuestion / questions.length) * 100
  
  const stepText = currentScreen === "result" 
    ? "Completato" 
    : currentScreen === "question" 
      ? `${currentQuestion + 1} / ${questions.length}` 
      : ""

  useEffect(() => {
    if (currentScreen === "result") {
      let current = 0
      const step = Math.max(1, Math.round(totalScore / 18))
      const interval = setInterval(() => {
        current = Math.min(current + step, totalScore)
        setAnimatedScore(current)
        if (current >= totalScore) clearInterval(interval)
      }, 45)
      return () => clearInterval(interval)
    }
  }, [currentScreen, totalScore])

  const startQuiz = () => {
    setCurrentQuestion(0)
    setTotalScore(0)
    setSelectedIndex(null)
    setCurrentScreen("question")
  }

  const selectOption = (index: number) => {
    setSelectedIndex(index)
  }

  const nextQuestion = () => {
    if (selectedIndex === null) return
    
    const points = questions[currentQuestion].options[selectedIndex].pts
    const newScore = totalScore + points
    setTotalScore(newScore)
    setSelectedIndex(null)

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const level = getResultLevel(newScore)
      setUserLevel(level)
      setCurrentScreen("result")
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <div className="w-full max-w-[520px] min-h-screen bg-card flex flex-col relative shadow-[0_0_40px_rgba(15,23,42,0.08)] max-[520px]:shadow-none">
        <Header stepText={stepText} />
        
        {showProgress && (
          <ProgressBar percent={progressPercent} />
        )}

        {currentScreen === "intro" && (
          <IntroScreen onStart={startQuiz} />
        )}

        {currentScreen === "question" && (
          <QuestionScreen
            question={questions[currentQuestion]}
            questionIndex={currentQuestion}
            totalQuestions={questions.length}
            selectedIndex={selectedIndex}
            onSelect={selectOption}
            onNext={nextQuestion}
            isLast={currentQuestion === questions.length - 1}
          />
        )}

        {currentScreen === "result" && (
          <ResultScreen
            score={animatedScore}
            maxScore={19}
            result={results[userLevel]}
          />
        )}

        <Footer />
      </div>
    </div>
  )
}
