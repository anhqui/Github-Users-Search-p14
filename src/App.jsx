import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './users/Users'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './users/Search'
import Alert from './components/layout/Alert'


function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)


  // Search Github users
  const searchUsers = async (text) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${import.meta.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setUsers(res.data.items);
    setLoading(false)
  }

  // Clear users from state
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }
  // Show Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => {
      setAlert(null)
    }, 5000)
  }

  return (
    <div className='App'>
      <Navbar />
      <div className="container">
        <Alert alert={alert} />
        <Search
          searchUsers={searchUsers}
          clearUsers={clearUsers}
          showClear={users.length > 0 ? true : false}
          showAlert={showAlert}
        />
        <Users users={users} loading={loading} />
      </div>
    </div>
  )
}

export default App
