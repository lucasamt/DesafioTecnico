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
    toast,
  } from '@chakra-ui/react';
import Header from '../../Components/Header';

const Historico = () =>{
    return(
        <ChakraProvider>
        <Header/>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Historico de Corrida</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                Insira os detalhes abaixo:
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
                  <Input type="number"/>
              </FormControl>
              <FormControl>
                  <FormLabel>Competidor</FormLabel>
                  <Input type="number" />
                </FormControl>
                <FormControl>
                  <FormLabel>Pista</FormLabel>
                  <Input type="number" />
                </FormControl>
                <FormControl>
                <FormLabel>Data da Corrida</FormLabel>
                <Input type="date"/>
                </FormControl>
                <FormControl>
                <FormLabel>Tempo Gasto</FormLabel>
                <Input type="number"/>
                </FormControl>
                  <Button
                    bg={'blue.700'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.800',
                    }}>
                    Cadastrar
                  </Button>
                  <Button
                    bg={'gray.700'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.800',
                    }}>
                    Alterar
                  </Button>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        © 2021 Qyon Adventure Works. Todos Direitos Reservados
        </ChakraProvider>
    )
}

export default Historico;