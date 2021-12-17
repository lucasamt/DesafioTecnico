import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    ChakraProvider,
  } from '@chakra-ui/react';
  import Header from '../../Components/Header';
const ExcluirPista = () => {
    return (
        <ChakraProvider>
        <Header/>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Exclusão de Pista</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                Digite o ID da pista abaixo:
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>ID</FormLabel>
                  <Input type="number" />
                </FormControl>
                  <Button
                    bg={'red.500'}
                    color={'white'}
                    _hover={{
                      bg: 'red.600',
                    }}>
                    Excluir
                  </Button>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        © 2021 Qyon Adventure Works. Todos Direitos Reservados
        </ChakraProvider>
      );
}

export default ExcluirPista;