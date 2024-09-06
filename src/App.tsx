import { Link } from 'react-router-dom'
import './App.css'
import { Box, Flex,  ListItem, UnorderedList } from '@chakra-ui/react'
import Qualilogo from '../public/QualiconsigLogo.png'
import Mask from '../src/assets/mask.png'
import Bi from '../src/assets/birem.png'
import { Header } from './components/Header'

function App() {

  return (
    <Flex bg={'100vw'} h={'100vh'} >
      <Flex flexDir={'column'} w={'97%'}  margin={'0 auto'} mt={'1px'}>
        

       <Header/>
        <Flex align='center'  p={'16px'} mt='10px'>
          </Flex>

          <Flex w={'60%'} margin={'0 auto'} justify={'space-between'} h={'full'} align={'center'}>
            <Box w={'300px'}>
              <img src={Mask}/>
            </Box>
            <Box w={'300px'}>
              <img src={Bi} alt="" />
            </Box>
          </Flex>

      </Flex>
      
    </Flex>
  )
}

export default App
