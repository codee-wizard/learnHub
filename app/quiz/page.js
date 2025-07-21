'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import courseData from '../data/courses.json'

export default function QuizPage() {
  const searchParams = useSearchParams()
  const [quizQuestions, setQuizQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const course = searchParams.get('course')
    const level = searchParams.get('level')
    const lessonId = searchParams.get('lesson')

    if (course && level && lessonId) {
      const lessons = courseData[course]?.[level] || []
      const lesson = lessons.find((l) => l.id === lessonId)

      if (lesson && lesson.quiz) {
        setQuizQuestions(lesson.quiz)
      }
    }
  }, [searchParams])

  const currentQuestion = quizQuestions[currentQuestionIndex]

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    const correct = option === currentQuestion.answer
    if (correct) setScore(score + 1)

    setTimeout(() => {
      setSelectedOption(null)
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        setShowResult(true)
      }
    }, 1000)
  }

  if (!quizQuestions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        ❌ Quiz not found or invalid query params.
      </div>
    )
  }

  if (showResult) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-green-400">Quiz Complete!</h1>
        <p className="text-xl">You scored {score} out of {quizQuestions.length}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">{currentQuestion.question}</h2>
        <ul className="space-y-4">
          {currentQuestion.options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleOptionClick(option)}
              className={`
                p-4 rounded-lg cursor-pointer border transition 
                ${
                  selectedOption
                    ? option === currentQuestion.answer
                      ? 'bg-green-600 border-green-400'
                      : option === selectedOption
                      ? 'bg-red-600 border-red-400'
                      : 'bg-gray-800 border-gray-700'
                    : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                }
              `}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
