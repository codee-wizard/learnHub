'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import courseData from '../data/courses.json'

export default function QuizPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const course = searchParams.get('course')
  const level = searchParams.get('level')
  const lessonId = searchParams.get('lesson')

  const [quizData, setQuizData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])

  useEffect(() => {
    if (course && level && lessonId && courseData[course]) {
      const lessons = courseData[course][level]
      const lesson = lessons.find((l) => l.id === lessonId)
      if (lesson) {
        setQuizData(lesson.quiz || [])
      }
    }
  }, [course, level, lessonId])

  const handleAnswer = (selectedOption) => {
    const updatedAnswers = [...userAnswers]
    updatedAnswers[currentIndex] = {
      question: quizData[currentIndex].question,
      selected: selectedOption,
      correct: quizData[currentIndex].answer,
      explanation: quizData[currentIndex].explanation
    }
    setUserAnswers(updatedAnswers)
  }

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      router.push(`/quiz-results?data=${encodeURIComponent(JSON.stringify(userAnswers))}`)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  if (quizData.length === 0) {
    return <div className="p-10 text-white">❌ No quiz found.</div>
  }

  const currentQ = quizData[currentIndex]
  const selected = userAnswers[currentIndex]?.selected

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0c29] to-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(173,216,230,0.1)]">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-300 tracking-tight">
          Question {currentIndex + 1} of {quizData.length}
        </h2>
        <p className="text-lg mb-6 text-white/90">{currentQ.question}</p>

        <div className="space-y-4">
          {currentQ.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              className={`w-full text-left px-5 py-3 rounded-lg border transition duration-300
                ${
                  selected === option
                    ? 'bg-cyan-700/20 border-cyan-500 text-cyan-200'
                    : 'bg-white/5 border-white/10 hover:bg-violet-500/10 hover:border-violet-300'
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-10">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-5 py-2 rounded-lg text-sm text-white bg-white/10 border border-white/20 disabled:opacity-40 hover:bg-white/20 transition"
          >
            ⬅️ Previous
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:scale-105 transition-transform"
          >
            {currentIndex === quizData.length - 1 ? 'Submit 🚀' : 'Next ➡️'}
          </button>
        </div>
      </div>
    </div>
  )
}
