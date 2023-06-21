import { FILTERS_BTNS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  // filterSelected: 'all' | 'active' | 'completed'
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, handleFilterChange }) => {
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BTNS).map(([key, { href, text }]) => {
          const isSelected = filterSelected === key
          const className = isSelected ? 'selected' : ''
          return (
            <li key={key}>
              <a className={className} href={href} onClick={e => {
                e.preventDefault()
                handleFilterChange(key as FilterValue)
              }}>{text}</a>
            </li>
          )
        })
      }
      {/* <li>
        <a className={`${filterSelected === 'all' ? 'selected' : ''}`} onClick={() => { onFilterChange('all') }}>Todos</a>
      </li> */}
    </ul>
  )
}
