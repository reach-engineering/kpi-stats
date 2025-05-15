'use client'

import { useEffect } from 'react'

export default function ComponentError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2 className="text-opacity-10 mt-4 text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
        Something went wrong when loading the component.
      </h2>
      <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        {error.digest}
      </p>
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={reset}
      >
        Try again!
      </button>
    </div>
  )
}
