import { type ListOfTodos, type TodoId, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface TodosProps {
  todos: ListOfTodos
  remove: ({ id }: TodoId) => void
  toggleComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  // remove: (id: (string | number)) => void
}

export const Todos: React.FC<TodosProps> = ({ todos, remove, toggleComplete }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li className={`${todo.completed ? 'completed' : ''}`} key={todo.id}>
          <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} remove={remove} toggleComplete={toggleComplete} />
        </li>
      ))}
    </ul>
  )
}
