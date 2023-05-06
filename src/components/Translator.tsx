'use client'

import { useStore } from '@/hooks/useStore'

const Translator = () => {
  const { fromLanguage, setFromLanguage } = useStore()

  console.log({ fromLanguage })

  return (
    <>
      <button
        onClick={() => setFromLanguage('es')}
        className='border border-solid border-gray-400 rounded bg-cyan-300/50 px-3 py-1'
      >
        Cambiar a Español
      </button>
      <span>{fromLanguage}</span>
    </>
  )
}

export default Translator
