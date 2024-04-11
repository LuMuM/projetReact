import React from 'react'
import ReactDOM from 'react-dom/client'
import { ROUTES } from "./routes/routes.js"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import './index.css'
import { Accueil } from './pages/accueil/Accueil.jsx'
import { Detail } from './pages/detail/Detail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Accueil />} path={ROUTES.index} />
      <Route element={<Detail />} path={ROUTES.detail + "/:id"} />
    </Routes>
  </BrowserRouter>
)
