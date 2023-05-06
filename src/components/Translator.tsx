import { useReducer } from 'react'
import { initialState, reducer } from '@/reducers/translationReducer'

const Translator = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>Translator</div>
  )
}

export default Translator
