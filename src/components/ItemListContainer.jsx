import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { category } = useParams()
  useEffect(() => {
    const database = getFirestore()
    const productosCollection = collection(database, 'productos')

    getDocs(productosCollection).then((querySnapshot) => {
      const productos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id:doc.id,
      }))
      setProductos(productos)
    })
  },[])
  
  const catFilter = productos.filter((producto) => producto.category === category)
  return(
    <div>
      {category ? <ItemList productos={catFilter}/>:<ItemList productos={productos}/>}
    </div>
  )
}

export default ItemListContainer