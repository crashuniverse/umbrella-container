import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import Header from './Header'
import LandingPage from './LandingPage'
import About from './About'
import './App.css'
const Research = lazy(() => import('umbrella_research/Research'))

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/research" element={<Suspense fallback={<div style={{ padding: "20px" }}>Loading...</div>}><Research /></Suspense>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App
