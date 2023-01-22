import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App() {
  return ( 
    <>
      <NavBar titulo={'Umbrella'}/>
      < ItemListContainer greeting={'la prop greeting'}/>
    </> 
  )
}

export default App
