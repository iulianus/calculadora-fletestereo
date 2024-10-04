import React, { useState } from 'react'
import { Instagram } from 'lucide-react'

function App() {
  const [serviceType, setServiceType] = useState('')
  const [distance, setDistance] = useState('')
  const [cost, setCost] = useState<number | null>(null)

  const calculateCost = () => {
    if (!serviceType || !distance) {
      alert('Por favor, selecciona un tipo de servicio y la distancia.')
      return
    }

    let baseCost = 0
    switch (serviceType) {
      case 'small':
        baseCost = 20000
        break
      case 'full':
        baseCost = 30000
        break
      case 'complete':
        baseCost = 60000
        break
      default:
        alert('Tipo de servicio no válido.')
        return
    }

    const distanceCost = parseInt(distance) * 3000
    const totalCost = baseCost + distanceCost
    setCost(totalCost)
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="bg-black p-8 rounded-lg shadow-md w-full max-w-md border border-yellow-400">
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-400">FleteStereo</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-yellow-400 mb-1">
              Tipo de Servicio:
            </label>
            <select
              id="serviceType"
              className="mt-1 block w-full rounded-md border-2 border-yellow-400 bg-black text-white shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 transition-colors duration-200"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="">Selecciona un tipo de servicio</option>
              <option value="small">Hasta 3 muebles/electrodomésticos</option>
              <option value="full">Flete de un viaje completo</option>
              <option value="complete">Mudanza Completa</option>
            </select>
          </div>
          <div>
            <label htmlFor="distance" className="block text-sm font-medium text-yellow-400 mb-1">
              Distancia en Kilómetros:
            </label>
            <input
              type="number"
              id="distance"
              className="mt-1 block w-full rounded-md border-2 border-yellow-400 bg-black text-white shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 transition-colors duration-200"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              min="1"
            />
          </div>
          <button
            type="button"
            className="w-full bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 font-semibold transition-colors duration-200"
            onClick={calculateCost}
          >
            Calcular Costo
          </button>
        </form>
        {cost !== null && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-yellow-400">
              El costo total es: <span className="text-yellow-300">${cost.toLocaleString()}</span> pesos
            </p>
          </div>
        )}
      </div>
      <a
        href="https://www.instagram.com/frenkyfletestereo/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
      >
        <Instagram className="mr-2" />
        Síguenos en Instagram
      </a>
    </div>
  )
}

export default App