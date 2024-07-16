import { Box, Flex, ListItem, SimpleGrid, UnorderedList } from "@chakra-ui/react"
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
          <SimpleGrid columns={4} spacing={4} ml={'20px'} h={'40vh'}>
            <ButtonPage text={'Performance'} link={'https://app.powerbi.com/reportEmbed?reportId=a5f5e577-eba8-40c4-bf77-9ba018e570b9&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e'}/>
            <ButtonPage text={'Assinaturas'} link={'https://app.powerbi.com/reportEmbed?reportId=a4078798-7440-46e8-bd9f-3cbc58dd1669&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e'}/>
            <ButtonPage text={'Esteira Cip'} link={'https://app.powerbi.com/reportEmbed?reportId=c8edc0fc-6e7e-4f64-84eb-5d78da71fdc0&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e'}/>
          </SimpleGrid>
        </Flex>

    </Flex>
    
  </Flex>
  )
}

export default SuporteDigital