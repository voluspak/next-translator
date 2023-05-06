'use client'

import { useStore } from '@/hooks/useStore'

const Translator = () => {
  const { fromLanguage, toLanguage, interchangeLanguages } = useStore()

  console.log({ fromLanguage })

  return (
    <section className='flex justify-evenly w-4/5'>
      <div className='flex flex-col'>
        <h2>From</h2>
        {fromLanguage}
      </div>

      <div className='flex flex-col'>
        <button
          onClick={interchangeLanguages}
          className='border border-solid border-gray-800 text-white bg-zinc-800 py-1 px-3 rounded-full'
        >
          Intercambiar
        </button>
      </div>

      <div className='flex flex-col'>
        <h2>To</h2>
        {toLanguage}
      </div>
    </section>
  )
}

export default Translator
