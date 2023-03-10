import { useState } from 'react'
import { Alert, AlertIcon, Button, Center, Container, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import {collection, getFirestore, addDoc} from 'firebase/firestore'

const SendOrder = () => {
  const [orderId, setOrderId] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const database = getFirestore()
  const ordersCollection = collection(database, 'orders')
  const order = { name, email }
  let alert = false
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name === '' || email === ''){
      alert = true
    }else{
      addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
    }
    setEmail('')
    setName('')
  }
function CompExample() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    <Alert status='success'>
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your application has been received. We will review your application
          and respond within the next 48 hours.
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button onClick={onOpen}>Show Alert</Button>
  )
}
  if (alert != true) {
    return (
      <div>
        <Center>
          <Heading>Sending orders</Heading>
        </Center>
        <Container>
          <FormControl>
            <form onSubmit={handleSubmit}>
              <FormLabel>Name</FormLabel>
              <Input size="lg" onChange={(e) => setName(e.target.value)} />
              <FormLabel>e-mail</FormLabel>
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
  }else{
    return(
      <div>
        <Alert status='warning'>
          <AlertIcon />
          Debe completar todos los campos
        </Alert>
      </div>
    )
  }
  
}

export default SendOrder