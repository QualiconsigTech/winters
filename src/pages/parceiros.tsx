import {  Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import Qualilogo from '../../public/QualiconsigLogo.png'
import { Link } from "react-router-dom"
import { ButtonPage } from "../components/ButtonPage"

const Parceiros = () => {
  

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
          <ButtonPage text={'Inbursa Visão Bancos'} link={'https://app.powerbi.com/reportEmbed?reportId=2a920037-28ea-4077-b31b-2f3f0fd03c9f&autoAuth=true&ctid=ed734db2-bf1e-48a2-b516-1c83ccf1f060'}/> 
          <ButtonPage text={'Inbursa Visão Empresas'} link={'https://app.powerbi.com/reportEmbed?reportId=52d5ad56-d742-4500-8712-cc8dc0916ff6&autoAuth=true&ctid=ed734db2-bf1e-48a2-b516-1c83ccf1f060'}/>
          <ButtonPage text={'Top 10 | Diario'} link={'https://app.powerbi.com/reportEmbed?reportId=68876870-bef1-43a9-80da-1f9f693a745f&autoAuth=true&ctid=ed734db2-bf1e-48a2-b516-1c83ccf1f060'}/>
        </Flex>
        

    </Flex>
    
  </Flex>
  )
}

export default Parceiros