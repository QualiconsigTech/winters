import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Qualilogo from '../../public/QualiconsigLogo.png'

const Producao = () => {

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
            
          </UnorderedList>
        </Flex>

        <Flex ml={'20px'} h={'40vh'} align={'center'} gap={4}>
          <Flex cursor='pointer' justify={'center'} fontSize={'20px'} align={'center'} bg={'#0D2434'} borderRadius={'10px'} transition={'all ease 0.2s'}  _hover={{bg: '#02578f'}} p={5} color={'white'}>
            <Link to={'https://app.powerbi.com/reportEmbed?reportId=e01cab67-3e49-415d-8374-58d8207e4a7c&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e'} style={{
               height: '150px',
               width: '200px',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }} target="_blank">Ranking Diario</Link>
          </Flex>
            
            
        </Flex>

    </Flex>
    
  </Flex>
  )
}

export default Producao