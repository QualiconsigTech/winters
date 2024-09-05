import { Box, Flex, Text, IconButton, Collapse, useDisclosure, useBreakpointValue, MenuButton } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import Qualilogo from '../../../public/QualiconsigLogo.png';
import { IoCloseCircleOutline } from "react-icons/io5";
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
        <Box>
          <img src={Qualilogo} alt="logo" width="120px" />
        </Box>
        </Link>
        {!isDesktop && (
          <IconButton
            icon={isOpen ? <IoMdCloseCircleOutline /> : <CiMenuBurger />            }
            onClick={onToggle}
            aria-label="Toggle Navigation"
            variant="outline"
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
          </Flex>
        </Collapse>
      )}
    </Flex>
  );
};
