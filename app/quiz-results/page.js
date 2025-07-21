'use client'

import { useSearchParams } from 'next/navigation'

export default function QuizResults() {
  const params = useSearchParams()

  const score = parseInt(params.get('score')) || 0
  const correct = parseInt(params.get('correct')) || 0
  const total = parseInt(params.get('total')) || 0

  const getBadge = () => {
    if (score >= 90) return '🌟 Excellent!'
    if (score >= 80) return '🎉 Great Job!'
    if (score >= 60) return '👍 Good Effort'
    return '📚 Keep Practicing'
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-gray-900 p-10 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Quiz Complete</h1>
        <p className="text-xl text-green-400 mb-2">Your Score: {score}%</p>
        <p className="text-lg text-blue-300 mb-6">
          {correct} out of {total} correct
        </p>
        <div className="text-2xl font-semibold text-yellow-400">{getBadge()}</div>
      </div>
    </div>
  )
}
