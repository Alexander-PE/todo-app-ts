import { type Todo as TodoType, type TodoId } from '../types'

interface Props extends TodoType {
  remove: ({ id }: TodoId) => void
  // remove: (id: (string | number)) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, remove }) => {
  return (
    <div className="view">
      <input type="checkbox" className="toggle" checked={completed} onChange={() => {}} />
      <label>{title}</label>
      <button className='destroy' onClick={() => { remove({ id }) }}></button>
    </div>
  )
}
