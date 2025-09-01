import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormPage = () => {
  const [formdata, setFormData] = useState({ name: '', email: '' })
  const navigate = useNavigate()
  
  const handlechange = e => setFormData({ ...formdata, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/success', { state: formdata })
  }

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-8 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Fill the form</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formdata.name}
          onChange={handlechange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formdata.email}
          onChange={handlechange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormPage

