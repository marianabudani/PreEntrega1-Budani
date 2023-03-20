import { Card, Heading, CardBody, Text, CardFooter, Button, Center, Stack, Image, Divider } from '@chakra-ui/react'
import { Link } from "react-router-dom"

const Item = ({id, name, stock, category, image}) => {  
  return (
    <div>
      <div key={id} h="200" w="auto">
        <Center p="1rem">
          <Card align='center' className='card-main'>
            <CardBody>
              <Image borderRadius="lg" src={image} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>
                <Text>Category: {category}</Text>
                <Text>Stock: {stock}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className='card-footer'>
              <Center className='btn-center'>
                <Button variant="solid" colorScheme="green">
                  <Link to={`/item/${id}`}>Details</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  )
}

export default Item