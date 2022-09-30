import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { History } from './pages/History'

import { Home } from './pages/Home'

export function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/ignite-timer" element={<Home />} />
            <Route path="/ignite-timer/history" element={<History />} />
        </Routes>
        </BrowserRouter>
    )
}