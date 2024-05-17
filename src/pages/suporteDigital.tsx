import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Qualilogo from '../../public/QualiconsigLogo.png'
import { ButtonPage } from "../components/ButtonPage"

const SuporteDigital = () => {

  return (
    <Flex bg={'100vw'} h={'100vh'} bgColor='#356e94'> 
    <Flex flexDir={'column'}   w={'97%'}  margin={'0 auto'} mt={'1px'}>
      

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
              <Link to={'/Qualiconsig'}>Qualiconsig</Link>
            </ListItem>
            <ListItem color={'#ccc'} cursor={'pointer'} transition={'all ease 0.2s'} _hover={{
                color: '#fff'
              }}>
              <Link to={'/Parceiros'}>Parceiros</Link>
            </ListItem>
             <ListItem color={'#fff'} cursor={'pointer'} transition={'all ease 0.2s'} _hover={{
                color: '#fff'
              }}>
                <Link   to={'/suporteDigital'}>Digital</Link>
              </ListItem>
            
            
          </UnorderedList>
        </Flex>

        <Flex ml={'20px'} h={'40vh'} align={'center'} gap={4}>
          <ButtonPage text={'Performance'} link={'https://app.powerbi.com/reportEmbed?reportId=82fd01d8-2aa7-458a-bc44-2e35be9f4634&autoAuth=true&ctid=75cf0ea6-2f10-4408-b1d7-c48910e155ad'}/>
          <ButtonPage text={'Assinaturas'} link={'https://app.powerbi.com/reportEmbed?reportId=8dc0ca85-6e6d-4a40-b7f2-a42b55901006&autoAuth=true&ctid=75cf0ea6-2f10-4408-b1d7-c48910e155ad'}/>
        </Flex>

    </Flex>
    
  </Flex>
  )
}

export default SuporteDigital