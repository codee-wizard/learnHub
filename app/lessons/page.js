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
    console.log("Query subject:", subject)

    if (subject && subject !== "undefined" && courseData[subject]) {
      setSelectedSubject(subject)
    }
  }, [searchParams])

  if (!selectedSubject) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl bg-gray-900">
        ❌ No subject selected or subject is invalid.
      </div>
    )
  }

  const levels = courseData[selectedSubject]

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        {selectedSubject} Lessons
      </h1>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {Object.entries(levels).map(([levelName, lessons]) => (
          <div key={levelName} className="bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">{levelName}</h2>

            {lessons.map((lesson) => (
              <div key={lesson.id} className="mb-6">
                <h3 className="text-xl font-medium mb-2">{lesson.title}</h3>
                <div className="aspect-video mb-4">
                  <iframe
                    src={lesson.videoUrl}
                    title={lesson.title}
                    className="w-full h-full rounded"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <Link
                  href={`/quizzes/${lesson.id}`}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Take Quiz
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
