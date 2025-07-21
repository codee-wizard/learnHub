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
      // Finished quiz, go to results
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
    <div className="min-h-screen bg-black text-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-6">Question {currentIndex + 1} of {quizData.length}</h2>
        <p className="text-lg mb-6">{currentQ.question}</p>

        <div className="space-y-3">
          {currentQ.options.map((option, i) => (
            <button
              key={i}
              className={`w-full px-4 py-2 rounded border text-left ${
                selected === option
                  ? 'bg-blue-700 border-blue-400'
                  : 'bg-gray-800 border-gray-600 hover:bg-gray-700'
              }`}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-10">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-gray-600 px-4 py-2 rounded disabled:opacity-40"
          >
            ⬅️ Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            {currentIndex === quizData.length - 1 ? 'Submit' : 'Next ➡️'}
          </button>
        </div>
      </div>
    </div>
  )
}
