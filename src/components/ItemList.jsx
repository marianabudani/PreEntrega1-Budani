import Item from "./Item"
import { Container } from '@chakra-ui/react'
const ItemList = ({ productos }) => {
  return (
    <>
      <Container maxW="container.md" className='main-catalogue'>
        {productos?.map((producto)=>(
          <Item
            key={producto.id}
            id={producto.id}
            name={producto.name}
            image={producto.image}
            description={producto.description}
            price={producto.price}
            stock={producto.stock}
            category={producto.category}
          />
        ))}
      </Container>   
    </>
  )
}

export default ItemList;