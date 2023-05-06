'use client'

import { AUTO_LANGUAGE } from '@/constants'
import { useStore } from '@/hooks/useStore'
import { ChangeIcon } from './Icons'
import LanguageSelector from './LanguageSelector'

const Translator = () => {
  const { fromLanguage, toLanguage, interchangeLanguages } = useStore()

  console.log({ fromLanguage })

  return (
    <section className='flex justify-evenly w-4/5'>
      <div className='flex flex-col'>
        <LanguageSelector />
      </div>

      <div className='flex flex-col'>
        <button
          disabled={fromLanguage === AUTO_LANGUAGE}
          onClick={interchangeLanguages}
          className='text-white py-1 px-3'
        >
          <ChangeIcon />
        </button>
      </div>

      <div className='flex flex-col'>
        <LanguageSelector />
      </div>
    </section>
  )
}

export default Translator
