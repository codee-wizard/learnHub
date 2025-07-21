'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import courseData from '../data/courses.json'
import Link from 'next/link'

export default function LessonsPage() {
  const searchParams = useSearchParams()
  const [selectedSubject, setSelectedSubject] = useState(null)

  useEffect(() => {
    const subject = searchParams.get('subject')
    if (subject && subject !== "undefined" && courseData[subject]) {
      setSelectedSubject(subject)
    }
  }, [searchParams])

  if (!selectedSubject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white text-xl">
        ❌ No subject selected or subject is invalid.
      </div>
    )
  }

  const levels = courseData[selectedSubject]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 style={{ fontFamily: 'var(--font-merienda)' }} className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-4">
          {selectedSubject} Lessons
        </h1>
        <p style={{ fontFamily: 'var(--font-cormorant)' }} className="text-gray-300 text-xl">
          Explore interactive video lessons curated for {selectedSubject}. Watch, learn, and then test your knowledge!
        </p>
      </div>

      <div className="space-y-12 max-w-7xl mx-auto">
        {Object.entries(levels).map(([levelName, lessons]) => (
          <div key={levelName} className="max-h-300 bg-gradient-to-br from-[#1a1a40] to-[#2e1a47] border border-indigo-700/50 rounded-xl shadow-[0_0_20px_#6d28d9aa] hover:shadow-[0_0_30px_#818cf8] transition duration-300 p-6">
            <h2 style={{ fontFamily: 'var(--font-cormorant)' }} className="text-4xl font-bold text-cyan-400 mb-6 border-b border-gray-700 pb-2">{levelName}</h2>

            <div className="space-y-8">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-xl transition">
                  <h3 style={{ fontFamily: 'var(--font-cormorant)' }} className="text-xl font-semibold mb-3 text-purple-300">{lesson.title}</h3>

                  <div
                    className="aspect-video mb-6 rounded-lg overflow-hidden border border-gray-700 shadow-md"
                    style={{ maxWidth: '1000px', width: '100%', height: 'auto', margin: '0 auto' }}
                  >
                    <iframe
                      src={lesson.videoUrl}
                      title={lesson.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="mt-4">
                    <Link
                      href={`/quiz?course=${encodeURIComponent(selectedSubject)}&level=${encodeURIComponent(levelName)}&lesson=${lesson.id}`}
                      className="mt-2 block w-full max-w-[1000px] mx-auto text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Take Quiz
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
