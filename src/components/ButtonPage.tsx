import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ButtonPage = ({ text, link }: any) => {
  return (
    <Flex  bg={'#0a68a35e'} p={[2, 4, 6]} h={'120px'} align={'center'} border={'1px solid #23232340'} borderTopRadius={'14px'} borderBottomRadius={'10px'}  justify={'center'} 
    boxShadow={"0px 0px 7px -0.5px rgba(0, 0, 0, 0.397)"}
    textTransform={"uppercase"}
    transition="all ease 0.5s"
    color={'white'}
    _hover={{
      boxShadow:"inset 0px 0px 10px -1px rgba(0,0,0,0.75)",
      background: "#0c79b8c0",  
      color: '#faf0bb',
      fontSize: "18px"
}}
    >
      <Link to={link} style={{
        transition: "all ease 0.2s",
        textAlign: 'center',
        alignContent: 'center',
        display: 'flex',
        width: "100%",
        height: '100%',
        alignItems: 'center',
        fontWeight: '600',
        justifyContent: 'center',
        
      }} target="_blank">
        {text}
      </Link>
    </Flex>
  );
};
