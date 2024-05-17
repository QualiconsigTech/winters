import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Qualilogo from '../../public/QualiconsigLogo.png'
import { ButtonPage } from "../components/ButtonPage"

const Producao = () => {

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
                <Link   to={'/suporteDigital'}>Digital</Link>
              </ListItem>
            
          </UnorderedList>
        </Flex>

        <Flex ml={'20px'} h={'40vh'} align={'center'} gap={4}>
          <ButtonPage text={'Ranking Diario'} link={'https://app.powerbi.com/reportEmbed?reportId=e01cab67-3e49-415d-8374-58d8207e4a7c&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e'}/>
          <ButtonPage text={'Retorno Cip'} link={'https://app.powerbi.com/reportEmbed?reportId=b55d49ce-f31a-4fe5-bf82-7b8cceeda7a6&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e'}/>
          <ButtonPage text={'Assinaturas'} link={'https://app.powerbi.com/reportEmbed?reportId=a4078798-7440-46e8-bd9f-3cbc58dd1669&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e'}/>
        </Flex>

    </Flex>
    
  </Flex>
  )
}

export default Producao