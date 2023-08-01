import './App.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    </Router>
  )
}

export default App
