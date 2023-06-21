import { type Todo as TodoType, type TodoId } from '../types'

interface Props extends TodoType {
  remove: ({ id }: TodoId) => void
  toggleComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  // remove: (id: (string | number)) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, remove, toggleComplete }) => {
  // to use event handlers of inputs, we need to use React.ChangeEvent<HTMLInputElement>
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    toggleComplete({ id, completed: e.target.checked }) // or just put this logic inside of onChange attribute
  }

  return (
    <div className="view">
      <input type="checkbox" className="toggle" checked={completed} onChange={(e) => { handleCheckBox(e) }} />
      <label>{title}</label>
      <button className='destroy' onClick={() => { remove({ id }) }}></button>
    </div>
  )
}
