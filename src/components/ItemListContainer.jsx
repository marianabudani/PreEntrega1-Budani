import Products from "../productos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const { category } = useParams()

  const getProducts = () => {
    return new Promise((resolve, reject)=>{
      if(Products.length === 0){
        reject(new Error("No hay productos"))
      }
      resolve(Products)
    })
  }
  const [product, setProduct] = useState([])
  useEffect(() => {
    getProducts().then((product) => setProduct(product))
  }, [])
  console.log('Hola ', product);
  /*
  async function fetchProducts() {
    try {
      const productosFetch = await getProducts()
    } catch (error) {
      console.log(error)
    }
  }
  fetchProducts()*/

  if(category === undefined){
    return(
      <div w="400">
        <ItemList products={Products} />
      </div>
    )
  }else{
    const catFilter = Products.filter((product) => product.category === category)
    return(
      <div w="400">
        { catFilter ? < ItemList products={catFilter} /> : < ItemList products={Products} /> }
      </div>
    )
  }
}

export default ItemListContainer