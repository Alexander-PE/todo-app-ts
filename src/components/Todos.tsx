import { type ListOfTodos, type TodoId } from '../types'
import { Todo } from './Todo'

interface TodosProps {
  todos: ListOfTodos
  remove: ({ id }: TodoId) => void
  // remove: (id: (string | number)) => void
}

export const Todos: React.FC<TodosProps> = ({ todos, remove }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li className={`${todo.completed ? 'completed' : ''}`} key={todo.id}>
          <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} remove={remove} />
        </li>
      ))}
    </ul>
  )
}
