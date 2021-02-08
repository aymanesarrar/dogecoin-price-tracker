import { ChakraProvider, theme, Flex, Heading } from '@chakra-ui/react';
const  PriceCard = ({type, price, border, borderColor}) => {
  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection="column" mt="4" p="4" border={border} borderColor={borderColor}>
      <Heading as="h4" size="md">{type}</Heading>
      <Heading as="h1" size="xl">$ {price}</Heading>
      </Flex>
    </ChakraProvider>
  )
}

export default PriceCard
