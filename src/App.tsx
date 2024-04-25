import { Link } from 'react-router-dom'
import './App.css'
import { Box, Flex, Image, Text } from '@chakra-ui/react'


function App() {

  return (
    <Flex w={'100vw'} justify={'center'}  h={'100vh'} bg={'#022144'}>
      <Flex w={'80%'} >
        <Flex h={'15vh'} align={'center'}>
          <Flex align={'center'}  gap={4} >
            <Image src='../public/QualiconsigLogo.png'/>
            <Text textAlign={'center'} fontSize={'25px'} fontFamily={'poppins'} color={'white'} fontWeight={'650'}>Relatorios</Text>
          </Flex>
        </Flex>
        <Flex flexDir={'column'} justify={'center'} gap={7}>
          <Box w={'15vw'}  bg={'#45474b'} color={'white'}>
            <Link to='/producao'>Qualiconsig Produção</Link>
          </Box>
          <Box w={'15vw'}  bg={'#45474b'} color={'white'}> 
            <Link  to={'/Parceiros'}>Qualiconsig Parceiros</Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
