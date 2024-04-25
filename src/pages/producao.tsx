import { Flex, Icon, Image, Link, Text } from "@chakra-ui/react"
import { MdKeyboardArrowLeft } from "react-icons/md"

const Producao = () => {

  return (
    <Flex w={'100vw'} justify={'center'}  h={'100vh'} bg={'#022144'}>
    <Flex w={'80%'}  >
      <Link href='/' textAlign={'center'} mt={'20px'} color={'white'}><Icon fontSize={'40px'} as={MdKeyboardArrowLeft }/></Link>
      <Flex h={'10vh'} align={'center'}>
        <Flex align={'center'} gap={2}>
            <Image src='../public/QualiconsigLogo.png'/>
            <Text fontSize={'25px'}  color={'white'}>Produção</Text>
        </Flex>
      </Flex>
      <Flex align={'center'}>
      <Flex >
        <Link display={'flex'} alignItems={'center'} justifyContent={'center'} bg={'black'} borderRadius={'12px'} h={'150px'} w={'200px'} textAlign={'center'} fontSize={'20px'} _hover={{
          textStyle: 'none',

        }}  color={'white'} href="https://app.powerbi.com/reportEmbed?reportId=e01cab67-3e49-415d-8374-58d8207e4a7c&autoAuth=true&ctid=83bc0f1e-f029-4f4f-a62a-401fb961118e">Ranking Diario</Link>
      </Flex>
      </Flex>
    </Flex>
  </Flex>
  )
}

export default Producao