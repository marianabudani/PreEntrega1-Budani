import ItemDetail from "./ItemDetail"
import Products from "../productos.json"

const itemDetailContainer = () => {
  const getProductos=()=>{
    return new Promise((resolve, reject)=>{
      if (Products.length === 0) {
        reject(new Error("No hay productos"))
      }
      setTimeout(()=>{
        resolve(Products)
      }, 2000)
    })
  }
  async function fetchProductos() {
    try {
      const productosFetch = await getProductos()
    } catch (error) {
      console.log(error)
    }
  }
  fetchProductos()
  return (
    <>
      < ItemDetail products={Products} />
    </>
  )
}

export default itemDetailContainer