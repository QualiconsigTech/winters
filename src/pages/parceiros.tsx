import {  Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import Qualilogo from '../../public/QualiconsigLogo.png'
import { Link } from "react-router-dom"
import { ButtonPage } from "../components/ButtonPage"

const Parceiros = () => {
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
                color: '#fafafa'
              }}>
              <Link to={'/Qualiconsig'}>Qualiconsig</Link>
            </ListItem>
            <ListItem color={'#ffffff'} cursor={'pointer'} transition={'all ease 0.2s'} _hover={{
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
          <ButtonPage text={'Inbursa Visão Bancos'} link={'https://app.powerbi.com/reportEmbed?reportId=d17ec5ad-fa5e-4b20-9eb1-5a4cc32ea22f&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e'}/> 
          <ButtonPage text={'Inbursa Visão Empresas'} link={'https://app.powerbi.com/reportEmbed?reportId=6fe7dd93-995b-4de6-b2e5-3defa597706a&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e'}/>
          <ButtonPage text={'Top 10 | Diario'} link={'https://app.powerbi.com/reportEmbed?reportId=7c4aa573-dc1d-44d6-9085-698053139d82&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e'}/>
          <ButtonPage text={'Q20'} link={'https://app.powerbi.com/reportEmbed?reportId=fa06a7f7-0ac6-4a6f-a04d-025d32d2a45b&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e'}/>
          
        </Flex>
    </Flex>
  </Flex>
  )
}
export default Parceiros