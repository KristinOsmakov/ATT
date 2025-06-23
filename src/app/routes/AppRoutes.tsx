import { Route, Routes } from "react-router-dom"
import { SelectPage } from "../../pages/selectPage/selectPage"
import CardsPage from "../../pages/cardsPage/cardsPage"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<SelectPage />} />
                <Route path="test" element={<SelectPage/>} />
                <Route path="cards" element={<CardsPage />} />
            </Route>
        </Routes>
    )
}

