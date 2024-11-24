import { Routes, Route } from 'react-router'
import Header from './Header'
import LandingPage from './LandingPage'
import Research from './Research'
import About from './About'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App
