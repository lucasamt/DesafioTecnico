import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Rota from './Rota/Rota';

function App(){
    return (
         <ChakraProvider>
         <Rota/>
         </ChakraProvider>
    )
}

export default App;
