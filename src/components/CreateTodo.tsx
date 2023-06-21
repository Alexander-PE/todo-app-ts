import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && inputValue !== '') {
      onAddTodo({ title: inputValue })
      setInputValue('')
    }
  }

  return (
    <input type="text" className='new-todo' value={inputValue} onChange={e => { setInputValue(e.target.value) }} onKeyDown={handleKeyDown} placeholder='Que quieres hacer' autoFocus />
  )
}
