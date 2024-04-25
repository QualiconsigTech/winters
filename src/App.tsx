import { Link } from 'react-router-dom'
import './App.css'
import { Box, Flex,  ListItem, UnorderedList } from '@chakra-ui/react'
import Qualilogo from '../public/QualiconsigLogo.png'
import Mask from '../src/assets/mask.png'
import Bi from '../src/assets/birem.png'

function App() {

  return (
    <Flex bg={'100vw'} h={'100vh'} bgColor='#0D2434'>
      <Flex flexDir={'column'} w={'90%'}  margin={'0 auto'} mt={'20px'}>
        

        <Flex align='center' h='15vh'>
        <Box cursor={'pointer'}>
          <Link to={'/'}>
            <img src={Qualilogo} alt="logo" />
          </Link>
        </Box>
            <UnorderedList  display={'flex'} gap={5} style={{listStyle:'none'}}>
              <ListItem color={'#ccc'} cursor={'pointer'} transition={'all ease 0.2s'} _hover={{
                color: '#fff'
              }}>
                <Link to={'/producao'}>Qualiconsig</Link>
              </ListItem>
              <ListItem color={'#ccc'} cursor={'pointer'} transition={'all ease 0.2s'} _hover={{
                color: '#fff'
              }}>
                <Link to={'/Parceiros'}>Parceiros</Link>
              </ListItem>
              
            </UnorderedList>
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
