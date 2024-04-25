import {  Flex, Text } from "@chakra-ui/react"
import Qualilogo from '../../public/QualiconsigLogo.png'
import { Link } from "react-router-dom"

const Parceiros = () => {


  return (
    <Flex w={'100vw'} justify={'center'}  h={'100vh'} bg={'#022144'}>
      <Flex w={'80%'}  >
        <Link to='/'>voltar</Link>
        <Flex h={'10vh'} align={'center'}>
          <Flex align={'center'} gap={2}>
              <img src={Qualilogo}/>
              <Text fontSize={'25px'}  color={'white'}>Parceiros</Text>
          </Flex>
        </Flex>
        <Flex align={'center'}>
        <Flex display={'flex'} alignItems={'center'} justifyContent={'center'} bg={'black'} borderRadius={'12px'} h={'150px'} w={'200px'} textAlign={'center'} fontSize={'20px'} _hover={{
            textStyle: 'none',

          }}  color={'white'} >
          <Link  to="https://app.powerbi.com/reportEmbed?reportId=e9eb89fd-43a0-40e1-b5dd-ff89fbfd72b9&autoAuth=true&ctid=ed734db2-bf1e-48a2-b516-1c83ccf1f060">Visão Bancos</Link>
        </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Parceiros