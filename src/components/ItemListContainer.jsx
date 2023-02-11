import Products from "../productos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams()
  console.log(category)

  const getProducts = () => {
    return new Promise((resolve, reject)=>{
      if(Products.length === 0){
        reject(new Error("No hay productos"))
      }
      setTimeout(()=>{
        resolve(Products)
      }, 2000)
    })
  }
  async function fetchProducts() {
    try {
      const productosFetch = await getProducts()
      console.log(productosFetch)
    } catch (error) {
      console.log(error)
    }
  }
  fetchProducts()

  if(category === undefined){
    return(
      <div>
        <ItemList products={Products} />
      </div>
    )
  }else{
    const catFilter = Products.filter((product) => product.category === category)
    return(
      <div>
        { catFilter ? < ItemList products={catFilter} /> : < ItemList products={Products} /> }
      </div>
    )
  }
}

export default ItemListContainer