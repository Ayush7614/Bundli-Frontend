import { useState, useEffect } from 'react'
import Brand from './components/brand'
import Search from './components/search'
import Videos from './components/videos'
import Navigation from './components/navigation'

const API_KEY = 'MTg5MThfMTY1MjA4MDYxNV85Y2IzMGUxM2I3MmVlNzc1OGU5NzNmOTExMmY5MWQ5NDUwMzE3NzAx'
const limit = 8

function App() {
  const [store, setStore] = useState([])
  const [data, setData] = useState([])
  const [term, setTerm] = useState('')
  const [page, setPage] = useState(12)

  useEffect(() => {
    fetch('https://www.scorebat.com/video-api/v3/feed/?token=' + API_KEY)
         .then((response) => response.json())
         .then((json) => setStore(json.response))
  }, [])

  useEffect(() => {
    if(term === '') {
      setData(store.slice(0, page))
    } else {
      let dump = store.filter((item) => item.title.split("-")[0].toLowerCase().includes(term.toLowerCase()) || item.title.split("-")[1].toLowerCase().includes(term.toLowerCase()) || item.competition.split(":")[1].toLowerCase().includes(term.toLowerCase()))
      setData(dump.slice(0, page)) 
    }  
  }, [store, term, page])

  const offset = () => setPage(page + limit)

  return (
    <div className = "wrapper">
      <Brand />
      <Search util = { setTerm } />
      <Videos chunk = { data } />
      <Navigation current = { offset } />
    </div>
  )
}

export default App