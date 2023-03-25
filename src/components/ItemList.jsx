import Item from "./Item"
import { Container, Flex } from '@chakra-ui/react'
const ItemList = ({ productos }) => {
  return (
    <>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
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
      </Flex> 
    </>
  )
}

export default ItemList;