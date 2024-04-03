import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './users/Users'
function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className="container">
        <Users />
      </div>

    </div>
  )
}

export default App
