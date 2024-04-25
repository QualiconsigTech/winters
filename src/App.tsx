import './App.css'
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'


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
          <Box w={'35vw'}>
            <Link transition={'all ease 0.2s'} href={'/producao'} _hover={{
              textStyle: 'none',
              backgroundColor: '#768485'
            }}  bg={'#8f9d9e'} borderRadius={'7px'} p={2}>Qualiconsig Produção</Link>
          </Box>
          <Box w={'35vw'}> 
            <Link transition={'all ease 0.2s'} _hover={{
              textStyle: 'none',
              backgroundColor: '#768485'
            }} p={2} borderRadius={'7px'} bg={'#8f9d9e'} href={'/Parceiros'}>Qualiconsig Parceiros</Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
