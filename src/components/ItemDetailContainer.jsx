import ItemDetail from "./ItemDetail"
import Products from "../productos.json"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//import { getFirestore, collection, getDocs } from "firebase/firestore"

const itemDetailContainer = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState([]);
  useEffect(()=>{
    getProductos()
  },[])
  const getProductos = () => {
    return new Promise((resolve, reject) => {
      if (Products.length === 0){
        reject(new Error("Products not found"))
      }
      resolve(Products)
    })
  }
  async function fetchProductos() {
    try{
      const productosFetch = await getProductos()
      
    }catch(e){
      console.log(e)
    }
  }
  fetchProductos()
  /*useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "productos");
    getDocs(productosCollection).then((querySnapshot) => {
      const productos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(productos);
    });
  }, []);*/
  return <ItemDetail productos={Products} />;
}

export default itemDetailContainer