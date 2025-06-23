import { Route, Routes } from "react-router-dom"
import { SelectPage } from "../../pages/selectPage/selectPage"
import CardsPage from "../../pages/cardsPage/cardsPage"
import BasePage from "../../pages/BasePage"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<BasePage/>}/>
            <Route path="/test" element={<SelectPage/>} />
            <Route path="/cards" element={<CardsPage />} />
        </Routes>
    )
}