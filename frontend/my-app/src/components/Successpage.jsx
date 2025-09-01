import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SuccessPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state

  if (!data) {
    navigate('/')
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-8 bg-green-50">
      <h2 className="text-2xl font-bold mb-4">Form Submitted Successfully!</h2>
      <p className="mb-2"><strong>Name:</strong> {data.name}</p>
      <p className="mb-6"><strong>Email:</strong> {data.email}</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Home
      </button>
    </div>
  )
}

export default SuccessPage
