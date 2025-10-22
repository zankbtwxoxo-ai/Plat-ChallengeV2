import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Shell from './shell'
import Concept from './pages/Concept'
import Classement from './pages/Classement'
import Inscription from './pages/Inscription'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Shell>
        <Routes>
          {/* Redirection de la page d’accueil vers /classement */}
          <Route path="/" element={<Navigate to="/classement" replace />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/classement" element={<Classement />} />
          <Route path="/inscription" element={<Inscription />} />
          {/* Si l’utilisateur entre une mauvaise URL, on le renvoie sur /classement */}
          <Route path="*" element={<Navigate to="/classement" replace />} />
        </Routes>
      </Shell>
    </BrowserRouter>
  </React.StrictMode>
)
