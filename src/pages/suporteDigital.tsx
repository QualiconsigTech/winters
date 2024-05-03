import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Qualilogo from '../../public/QualiconsigLogo.png'

const SuporteDigital = () => {

  return (
    <Flex bg={'100vw'} h={'100vh'} bgColor='#0d3149'> 
    <Flex flexDir={'column'} w={'90%'}  margin={'0 auto'} mt={'20px'}>
      

      <Flex align='center' h='15vh'>
        <Box cursor={'pointer'}>
          <Link to={'/'}>
            <img src={Qualilogo} alt="logo" />
          </Link>
        </Box>
          <UnorderedList  display={'flex'} gap={5} style={{listStyle:'none'}}>
            <ListItem color={'#ffffff'} cursor={'pointer'} transition={'all ease 0.2s'} _hover={{
                color: '#fff'
              }}>
              <Link to={'/Qualiconsig'}>Qualiconsig</Link>
            </ListItem>
            <ListItem color={'#ccc'} cursor={'pointer'} transition={'all ease 0.2s'} _hover={{
                color: '#fff'
              }}>
              <Link to={'/Parceiros'}>Parceiros</Link>
            </ListItem>
             <ListItem color={'#ccc'} cursor={'pointer'} transition={'all ease 0.2s'} _hover={{
                color: '#fff'
              }}>
                <Link   to={'/suporteDigital'}>Suporte Digital</Link>
              </ListItem>
            
            
          </UnorderedList>
        </Flex>

        <Flex ml={'20px'} h={'40vh'} align={'center'} gap={4}>
          <Flex cursor='pointer' justify={'center'} fontSize={'20px'} align={'center'} bg={'#0D2434'} borderRadius={'10px'} transition={'all ease 0.2s'}  _hover={{bg: '#02578f'}} p={5} color={'white'}>
            <Link to={'https://app.powerbi.com/reportEmbed?reportId=82fd01d8-2aa7-458a-bc44-2e35be9f4634&autoAuth=true&ctid=75cf0ea6-2f10-4408-b1d7-c48910e155ad'} style={{
               height: '150px',
               width: '200px',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }} target="_blank">Produtividade</Link>
          </Flex>
            
            
        </Flex>

    </Flex>
    
  </Flex>
  )
}

export default SuporteDigital