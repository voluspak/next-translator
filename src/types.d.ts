export interface State {
  fromLanguage: string
  toLanguage: string
  fromText: string
  result: string
  loading: boolean
}

export type Action =
  | { type: 'SET_FROM_LANGUAGES', payload: string }
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_TO_LAGUAGE', payload: string }
  | { type: 'SET_FROM_TEXT', payload: string }
  | { type: 'SET_RESULT', payload: string }
