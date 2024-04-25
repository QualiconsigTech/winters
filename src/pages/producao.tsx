import { Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Qualilogo from '../../public/QualiconsigLogo.png'

const Producao = () => {

  return (
    <Flex w={'100vw'} justify={'center'}  h={'100vh'} bg={'#0D2434'}>
    <Flex w={'80%'}  >
      <Link  to="/" ></Link>
      <Flex h={'10vh'} align={'center'}>
        <Flex align={'center'} gap={2}>
            <img src={Qualilogo}/>
            <Text fontSize={'25px'}  color={'white'}>Produção</Text>
        </Flex>
      </Flex>
      <Flex align={'center'}>
      <Flex bg={'#081D2B'} color={'white'} p={5} borderRadius={'14px'}>
        <Link to="https://app.powerbi.com/reportEmbed?reportId=e01cab67-3e49-415d-8374-58d8207e4a7c&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e">Ranking Diario</Link>
      </Flex>
      </Flex>
    </Flex>
  </Flex>
  )
}

export default Producao