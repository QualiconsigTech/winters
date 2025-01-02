import { Box, Flex, Text, IconButton, Collapse, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import Qualilogo from '../../../public/QualiconsigLogo.png';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

export const Header = () => {
  const location = useLocation();
  const { isOpen, onToggle } = useDisclosure();
  
  const isCurrentPage = (path: string) => location.pathname === path;

  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      direction="column"
      p={4}
      position="relative"
    >
      <Flex align="center" justify="space-between" mb={4}>
        <Link to="/">
        <Box ml={'15px'} mt={'20px'}>
          <img src={Qualilogo} alt="logo" />
        </Box>
        </Link>
        {!isDesktop && (
          <IconButton
            icon={isOpen ? <IoMdCloseCircleOutline /> : <CiMenuBurger />            }
            onClick={onToggle}
            aria-label="Toggle Navigation"
            variant="outline"
            color={'white'}
            cursor={'pointer'}
          />
        )}
      </Flex>

      {isDesktop ? (
        <Flex justify="center" gap={8}>
           <Link to={'/Qualiconsig'}>
          <Text
            color={isCurrentPage("/Qualiconsig") ? "yellow.400" : "white"}
            fontWeight={isCurrentPage("/Qualiconsig") ? "bold" : "normal"}
          >
            Qualiconsig
          </Text>
          </Link>
          <Link to={'/Parceiros'}>
          <Text
            color={isCurrentPage("/Parceiros") ? "yellow.400" : "white"}
            fontWeight={isCurrentPage("/Parceiros") ? "bold" : "normal"}
          >
            Parceiros
          </Text>
          </Link>
          <Link to={'/Digital'}>
          <Text
            color={isCurrentPage("/Digital") ? "yellow.400" : "white"}
            fontWeight={isCurrentPage("/Digital") ? "bold" : "normal"}
          >
            Digital
          </Text>
          </Link>
          <Link to={'/Treinamento'}>
          <Text
            color={isCurrentPage("/Treinamento") ? "yellow.400" : "white"}
            fontWeight={isCurrentPage("/Treinamento") ? "bold" : "normal"}
          >
            Treinamento
          </Text>
          </Link>
          <Link to={'/Backoffice'}>
          <Text
            color={isCurrentPage("/Backoffice") ? "yellow.400" : "white"}
            fontWeight={isCurrentPage("/Backoffice") ? "bold" : "normal"}
          >
            Backoffice
          </Text>
          </Link>
        </Flex>
      ) : (
        <Collapse in={isOpen}>
          <Flex direction="column" align="center" gap={4}>
            <Link to="/Qualiconsig">
            <Text
              color={isCurrentPage("/Qualiconsig") ? "yellow.400" : "white"}
              fontWeight={isCurrentPage("/Qualiconsig") ? "bold" : "normal"}
              onClick={() => { /* Handle navigation */ }}
            >
              Qualiconsig
            </Text>
            </Link>
            <Link to="/Parceiros">
            <Text
              color={isCurrentPage("/Parceiros") ? "yellow.400" : "white"}
              fontWeight={isCurrentPage("/Parceiros") ? "bold" : "normal"}
              onClick={() => { /* Handle navigation */ }}
            >
              Parceiros
            </Text>
            </Link>
            <Link to="/Digital">
            <Text
              color={isCurrentPage("/Digital") ? "yellow.400" : "white"}
              fontWeight={isCurrentPage("/Digital") ? "bold" : "normal"}
              onClick={() => { /* Handle navigation */ }}
            >
              Digital
            </Text>
            </Link>
            <Link to={'/Treinamento'}>
          <Text
            color={isCurrentPage("/Treinamento") ? "yellow.400" : "white"}
            fontWeight={isCurrentPage("/Treinamento") ? "bold" : "normal"}
          >
            Treinamento
          </Text>
          </Link>
          <Link to={'/Backoffice'}>
          <Text
            color={isCurrentPage("/Backoffice") ? "yellow.400" : "white"}
            fontWeight={isCurrentPage("/Backoffice") ? "bold" : "normal"}
          >
            Backoffice
          </Text>
          </Link>
          </Flex>
        </Collapse>
      )}
    </Flex>
  );
};
