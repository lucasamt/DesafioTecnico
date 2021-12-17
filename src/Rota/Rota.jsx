import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Competidores from '../Pages/Competidores';
import AlterarCompetidores from '../Pages/AlterarCompetidores';
import ExcluirCompetidores from '../Pages/ExcluirCompetidores';
import PistaCorrida from '../Pages/PistaCorrida';
import EditPistaCorrida from '../Pages/EditPistaCorrida';
import ExcluirPista from '../Pages/ExcluirPista';
import Historico from '../Pages/Historico';
const Rota = () => {

    return (

        <Router>
            <Routes>

            <Route exact={true} path='/' element={<Home/>}/>

            <Route 
            exact={true} 
            path='/home' 
            element={<Home/>}
            />

            <Route 
            exact={true} 
            path='/competidores' 
            element={<Competidores/>}
            />

            <Route
            exact={true}
            path='/alterarcompetidor'
            element={<AlterarCompetidores/>}
            />

            <Route 
            exact={true}
            path='/excluircompetidor'
            element={<ExcluirCompetidores/>}
            />

            <Route 
            exact={true}
            path='/pistacorrida'
            element={<PistaCorrida/>}
            /> 

            <Route 
            exact={true}
            path='/alterarpista'
            element={<EditPistaCorrida/>}
            /> 

            <Route 
            exact={true}
            path='/excluirpista'
            element={<ExcluirPista/>}
            />

            <Route 
            exact={true}
            path='/historico'
            element={<Historico/>}
            />
            
        </Routes>

        </Router>

    );
}
export default Rota;