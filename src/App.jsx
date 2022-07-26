import "./components/scss/app.scss";
import Home from "./pages/home/Home";
import Latest from "./pages/latest/Latest";
import Male from "./pages/gender/Male";
import Female from "./pages/gender/Female";
import Kids from "./pages/gender/Kids";
import Accessories from "./pages/accessories/Accessories";
import Cart from "./pages/cart/Cart";
import Boxes from "./pages/boxes/Boxes";
import Item from "./pages/Item/Item";
import Error from "./pages/error/Error";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { createContext, useState } from "react";

export const SearchContext = createContext();

function App() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                <Header />
                <Routes>
                    <Route path="/QazaqRepublic" element={<Home />} />
                    <Route path="/latest" element={<Latest />} />
                    <Route path="/male" element={<Male />} />
                    <Route path="/female" element={<Female />} />
                    <Route path="/kids" element={<Kids />} />
                    <Route path="/boxes" element={<Boxes />} />
                    <Route path="/accessories" element={<Accessories />} />
                    <Route path="/:item/:id" element={<Item />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </SearchContext.Provider>
        </div>
    );
}

export default App;
