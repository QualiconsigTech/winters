import { Box, Grid } from "@chakra-ui/react";

export function PageComponent({ children }: any) {
  return (
    <Box w="100vw" maxW="1200px" mx="auto" p={[2, 4, 6]} m={'0 auto'}  >
      <Grid
        templateColumns={["repeat(1, 2fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} // Responsividade: 1 coluna em telas pequenas, até 4 em grandes
        gap={6} // Espaçamento entre os elementos
      >
        {children}
      </Grid>
    </Box>  
  );
}
