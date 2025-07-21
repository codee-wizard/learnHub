'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function QuizResults() {
  const params = useSearchParams()
  const [results, setResults] = useState([])

  useEffect(() => {
    const raw = params.get('data')
    if (raw) {
      try {
        const parsed = JSON.parse(decodeURIComponent(raw))
        setResults(parsed)
      } catch (err) {
        console.error('Failed to parse results:', err)
      }
    }
  }, [params])

  const correctCount = results.filter(q => q.selected === q.correct).length
  const total = results.length
  const score = Math.round((correctCount / total) * 100 || 0)

  const getBadge = () => {
    if (score >= 90) return '🌟 Excellent!'
    if (score >= 80) return '🎉 Great Job!'
    if (score >= 60) return '👍 Good Effort'
    return '📚 Keep Practicing'
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Quiz Complete</h1>
          <p className="text-xl text-green-400 mb-1">Score: {score}%</p>
          <p className="text-blue-300 text-lg mb-4">{correctCount} out of {total} correct</p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden mb-4">
            <div
              className="bg-green-500 h-full transition-all duration-500"
              style={{ width: `${score}%` }}
            />
          </div>

          <div className="text-2xl font-semibold text-yellow-400">{getBadge()}</div>
        </div>

        <div className="space-y-8">
          {results.map((q, index) => {
            const isCorrect = q.selected === q.correct
            return (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-semibold mb-2">Q{index + 1}: {q.question}</h2>

                <p className="mb-2">
                  <span className="font-medium">Your Answer:</span>{' '}
                  <span className={isCorrect ? 'text-green-400' : 'text-red-400'}>
                    {q.selected || 'No answer'} {isCorrect ? '✅' : '❌'}
                  </span>
                </p>

                {!isCorrect && (
                  <p className="mb-2">
                    <span className="font-medium">Correct Answer:</span>{' '}
                    <span className="text-green-400">{q.correct}</span>
                  </p>
                )}

                <p className="text-sm text-gray-400 italic">
                  Explanation: {q.explanation}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
