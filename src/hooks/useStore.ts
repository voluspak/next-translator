import { initialState, reducer } from '@/reducers/translationReducer'
import { FromLanguage, Language } from '@/types'
import { useReducer } from 'react'

export function useStore () {
  const [{
    fromLanguage,
    fromText,
    loading,
    result,
    toLanguage
  }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGES', payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LAGUAGE', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    fromText,
    loading,
    result,
    toLanguage,
    setFromLanguage,
    setToLanguage,
    setFromText,
    interchangeLanguages,
    setResult
  }
}
