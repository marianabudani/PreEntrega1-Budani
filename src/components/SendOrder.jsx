import { useState } from 'react'
import { Alert, AlertIcon, Button, Center, Container, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import {collection, getFirestore, addDoc} from 'firebase/firestore'

const SendOrder = () => {
  const [orderId, setOrderId] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name === '' || email === ''){
      console.log('Complete todos los campos')
    }else{
      addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
    }
    setEmail('')
  }
  const database = getFirestore()
  const ordersCollection = collection(database, 'orders')
  const order = { name, email }
  
  return (
    <div>
      <Center>
        <Heading>Sending orders</Heading>
      </Center>

      <Container>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <FormLabel>NAME</FormLabel>
            <Input size="lg" onChange={(e) => setName(e.target.value)} />
            <FormLabel>EMAIL</FormLabel>
            <Input size="lg" onChange={(e) => setEmail(e.target.value)} />
            <Button colorScheme="blue" type="submit" m={5}>
              Send Infomation
            </Button>
          </form>
        </FormControl>
      </Container>
      <Center>
        <Text as="b" m={3} fontSize="xl">
          Order ID:{" "}
        </Text>
        <Text as="mark" fontSize="2xl">
          {orderId}
        </Text>
      </Center>
    </div>
  )
}

export default SendOrder