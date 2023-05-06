import React from 'react'
import { SUPPORTED_LANGUAGES } from '@/constants'

const LanguageSelector = ({ onChange }) => {
  return (
    <select
      aria-label='Selecciona el idioma'
      className=' border border-solid border-gray-800 py-1 px-2 text-center'
    >
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option
          key={key}
          value={key}
        >
          {literal}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelector
