import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Shell from './shell'
import Concept from './pages/Concept'
import Inscription from './pages/Inscription'
import Classement from './pages/Classement'

const RootApp: React.FC = () => (
  <BrowserRouter>
    <Shell>
      <Routes>
        <Route path='/' element={<Concept />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/classement' element={<Classement />} />
      </Routes>
    </Shell>
  </BrowserRouter>
)

createRoot(document.getElementById('root')!).render(<RootApp />)
