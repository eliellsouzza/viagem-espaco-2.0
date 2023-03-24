import "./App.css";
import ProductList from "./Components/ProductList"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Menu from "./Pages/Menu/Menu";
import Footer from "./Pages/Footer/Footer";
import Catalog from "./Pages/Catalog/Catalog";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Car";
import NotFound from "./Pages/NotFound/NotFound";
import { useState } from "react";
 






function App(props) {






  const [rota, setRota] = useState(ProductList)
  

  const [query, setQuery] = useState("")
  const [orderParam, setOrderParam] = useState("")

  const [carinho, setCarinho] = useState([])

  const handleInputQuery = (event) => setQuery (event.target.value)
  const handleInputOrderParam = (event) => setOrderParam (event.target.value)


  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          

          <Route path="/Catalog" element={< Catalog
          
            rota={rota}

            states = {{query, orderParam, carinho}}

            handles = {{handleInputQuery, handleInputOrderParam, setCarinho}}
          
          
          
          />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
