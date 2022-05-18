import { useRef } from 'react'

export default function Search({ util }) {
  const ref = useRef()

  const fillCells = () => util(ref.current.value)

  return <input type = "text" placeholder = "Search for your favorite teams, leagues and much more." onChange = { fillCells } ref = { ref } />
}