import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Cart from "./components/Cart"

function App() {
  return ( 
    <BrowserRouter>
      <NavBar titulo={'Umbrella'}/>
      <Routes>
        < Route exact path="/" element={< Home />} />
        < Route exact path="/catalogue" element={< ItemListContainer />} />
        < Route exact path="/category/:category" element={ < ItemListContainer />} />
        < Route exact path="/item/:id" element={ < ItemDetailContainer /> } />
        < Route exact path="/cart" element={ < Cart />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
