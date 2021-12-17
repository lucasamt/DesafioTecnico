import { ChakraProvider} from '@chakra-ui/react';
import Header from '../../Components/Header';
import './home.css'
const Home = () =>{
    return(
        <ChakraProvider>
        <Header/>
        <div className='home'>
        <h2>
        O QyonAdventureWorks é um sistema de controle de competições de corrida. Ele armazena
o registro de competidores e o histórico de corridas (em cada pista) que cada competidor
participou.
        Para desfrutar do sistema selecione as opções no cabeçalho!
        </h2>
        </div>
        © 2021 Qyon Adventure Works. Todos Direitos Reservados
        </ChakraProvider>

    );
}

export default Home;