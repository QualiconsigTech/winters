import { Link } from 'react-router-dom'
import './App.css'
import { Flex,  Text } from '@chakra-ui/react'
import Qualilogo from '../public/QualiconsigLogo.png'

function App() {

  return (
    <Flex w={'100vw'} justify={'center'}  h={'100vh'} bg={'#022144'}>
      <Flex w={'80%'} >
        <Flex h={'15vh'} >
          <Flex align={'center'}  gap={4} >
            <img src={Qualilogo}/>
            <Text textAlign={'center'} fontSize={'25px'} fontFamily={'poppins'} color={'white'} fontWeight={'650'}>Relatorios</Text>
          </Flex>
        </Flex>
        <Flex flexDir={'column'} justify={'center'} gap={7}>
          <Flex justify={'center'} borderRadius={'10px'} align={'center'} color={'white'} fontSize={'20px'} fontWeight={'650'} bg={'#000'} h={'60px'} alignContent={'center'} w={'250px'} p={2}>
            <Link to='/producao'>Qualiconsig</Link>
          </Flex>
          <Flex justify={'center'} borderRadius={'10px'} align={'center'} color={'white'} fontSize={'20px'} fontWeight={'650'} bg={'#000'} h={'60px'} alignContent={'center'} w={'250px'} p={2}> 
            <Link  to={'/Parceiros'}>Parceiros</Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
