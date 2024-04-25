import { Link } from 'react-router-dom'
import './App.css'
import { Box, Flex,  ListItem,  Text, UnorderedList } from '@chakra-ui/react'
import Qualilogo from '../public/QualiconsigLogo.png'

function App() {

  return (
    <Flex bg={'100vw'} h={'100vh'} bgColor='#0D2434'>
      <Flex flexDir={'column'} w={'90%'}  margin={'0 auto'} mt={'20px'}>
        

        <Flex align='center' h='15vh'>
          <Box>
            <img src={Qualilogo} alt="logo" />
          </Box>
            <UnorderedList  display={'flex'} gap={5} style={{listStyle:'none'}}>
              <ListItem color={'white'}>
                <Link to={'/producao'}>Qualiconsig</Link>
              </ListItem>
              <ListItem color={'white'}>
                <Link to={'/Parceiros'}>Parceiros</Link>
              </ListItem>
              
            </UnorderedList>
          </Flex>

          <Flex bg='white'>
            <Box>
              
            </Box>
          </Flex>

      </Flex>
      
    </Flex>
  )
}

export default App
