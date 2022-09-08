import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Main from './pages/App'
import Cadastrar from './pages/cadastrar'
import Album from './pages/album'



function Rotas(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/cadastrar" element={<Cadastrar/>} />
                <Route path="/album" element={<Album/>} />

            </Routes>

        </Router>

);


}
export default Rotas;