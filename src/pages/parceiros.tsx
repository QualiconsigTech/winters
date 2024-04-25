import {  Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import Qualilogo from '../../public/QualiconsigLogo.png'
import { Link } from "react-router-dom"

const Parceiros = () => {


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

        <Flex ml={'20px'} h={'40vh'} align={'center'}  gap={4}>
          <Flex cursor='pointer' justify={'center'} fontSize={'20px'} align={'center'} bg={'#081D2B'} borderRadius={'10px'} transition={'all ease 0.2s'} h={'150px'} w={'200px'} _hover={{bg: '#0d3149'}} p={5} color={'white'}>
            <Link target="_blank"   to={'https://app.powerbi.com/reportEmbed?reportId=e9eb89fd-43a0-40e1-b5dd-ff89fbfd72b9&autoAuth=true&ctid=ed734db2-bf1e-48a2-b516-1c83ccf1f060'}>Visão Bancos</Link>
          </Flex>
          <Flex cursor='pointer' justify={'center'} fontSize={'20px'} align={'center'} bg={'#081D2B'} borderRadius={'10px'} transition={'all ease 0.2s'} h={'150px'} w={'200px'} _hover={{bg: '#0d3149'}} p={5} color={'white'}>
            <Link target="_blank"   to={'https://app.powerbi.com/reportEmbed?reportId=52d5ad56-d742-4500-8712-cc8dc0916ff6&autoAuth=true&ctid=ed734db2-bf1e-48a2-b516-1c83ccf1f060'}>Visão Bancos</Link>
          </Flex>
        </Flex>

    </Flex>
    
  </Flex>
  )
}

export default Parceiros