import { ROUTES } from "./routes/routes.js"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import './index.css'
import { Accueil } from './pages/Accueil/Accueil.jsx'
import { Detail } from './pages/Detail/Detail.jsx'

export function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Accueil />} path={ROUTES.index} />
                    <Route element={<Detail />} path={ROUTES.detail + "/:id"} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}


