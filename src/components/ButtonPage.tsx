import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ButtonPage = ({ text, link }: any) => {
  return (
    <Flex
      cursor="pointer"
      justify={"center"}
      fontSize={"20px"}
      align={"center"}
      bg={"#507ea3"}
      borderRadius={"10px"}
      transition={"all ease 0.2s"}
      boxShadow={'9px 3px 20px -3px rgba(51, 53, 53, 0.75)'}
      textAlign={'center'}
      _hover={{ bg: "#02578f" }}
      p={5}
      color={"white"}
    >
      <Link
        to={
          link
        }
        style={{
          height: "150px",
          width: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        target="_blank"
      >
        {text}
      </Link>
    </Flex>
  );
};
