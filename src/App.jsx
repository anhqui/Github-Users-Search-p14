import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './users/Users'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get('https://api.github.com/users')
      // console.log(res.data);
      setUsers(res.data);
      setLoading(false)
    }
    getUsers()

  }, [])

  return (
    <div className='App'>
      <Navbar />
      <div className="container">
        <Users users={users} loading={loading} />
      </div>
    </div>
  )
}

export default App
