import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/layout/header";
import APage from "../pages/aPage";
import BPage from "../pages/bPage";

function RootRoute() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<APage />} />
                <Route path="/bPage" element={<BPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootRoute;
