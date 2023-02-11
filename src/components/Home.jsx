import { Center, Box, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="home-container">
      <Center>
        <Box boxSize="lg">
          <Image src="https://www.nicepng.com/png/detail/640-6404773_umbrella-corp-png-umbrella-corporation-logo-vector.png"/>
        </Box>
      </Center>
    </div>
  )
}

export default Home