import { SUPPORTED_LANGUAGES } from '@/constants'
import { FromLanguage, type Language } from '@/types'

type Props =
  | { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: 'to', value: Language, onChange: (language: Language) => void }

const LanguageSelector: React.FC<Props> = ({ onChange }) => {
  function handleChange (event: React.ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value as Language)
  }
  return (
    <select
      aria-label='Selecciona el idioma'
      className=' border border-solid border-gray-800 py-1 px-2 text-center'
      onChange={handleChange}
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
