import { Container, Card, CardBody, Text } from '@chakra-ui/react'

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <Container maxW='50rem' p='5' maxH='200rem'>
        <Card>
          <CardBody>
            <Text pt='2' fontSize='md'>
              { greeting }
            </Text>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

export default ItemListContainer