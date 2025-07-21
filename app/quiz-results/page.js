'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function QuizResults() {
  const params = useSearchParams()
  const [results, setResults] = useState(null)

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

  if (!results || results.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg text-white/60">⏳ Loading results...</p>
      </div>
    )
  }

  const correctCount = results.filter(q => q.selected === q.correct).length
  const total = results.length
  const score = Math.round((correctCount / total) * 100 || 0)

  const getBadge = () => {
    if (score >= 90) return '🌌 Stellar!'
    if (score >= 80) return '🌟 Excellent'
    if (score >= 60) return '🔭 Keep Exploring'
    return '🛰️ Don’t Give Up'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0c29] to-black text-white px-4 py-12 flex items-center justify-center">
      <div className="max-w-7xl w-full space-y-12">
    
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(173,216,230,0.1)] text-center">
          <h1 style={{ fontFamily: 'var(--font-merienda)' }} className="text-5xl font-bold mb-3 text-white tracking-wide">Quiz Complete</h1>
          <p className="text-2xl text-[#7dd3fc] mb-1">Score: {score}%</p>
          <p className="text-lg text-violet-300 mb-6">{correctCount} out of {total} correct</p>

          {/* Progress Bar */}
          <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden mb-6">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500"
              style={{ width: `${score}%` }}
            />
          </div>

          <div style={{ fontFamily: 'var(--font-cormorant)' }} className="text-3xl font-semibold text-[#f472b6]">{getBadge()}</div>
        </div>

        {/* Answer Breakdown */}
        <div className="space-y-6">
          {results.map((q, index) => {
            const isCorrect = q.selected === q.correct
            return (
                <div
                key={index}
                className="bg-black/40 border border-white/10 p-6 rounded-xl shadow-[0_0_40px_rgba(173,216,230,0.1)] backdrop-blur-md"
              >
              
                <h2 className="text-lg font-semibold mb-3 text-white">
                  <span className="text-cyan-400">Q{index + 1}:</span> {q.question}
                </h2>

                <p className="mb-2">
                  <span className="font-medium text-white/80">Your Answer:</span>{' '}
                  <span className={isCorrect ? 'text-green-400' : 'text-red-400'}>
                    {q.selected || 'No answer'} {isCorrect ? '✅' : '❌'}
                  </span>
                </p>

                {!isCorrect && (
                  <p className="mb-2">
                    <span className="font-medium text-white/80">Correct Answer:</span>{' '}
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
