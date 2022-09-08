import './login.css';
import React, { useState, useContext, useEffect } from 'react';
import image from './icon.png'    
import { useNavigate } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState(String)
  const [senha, setSenha] = useState(String)

  const navigate = useNavigate();

  function handleClick1() {
    navigate("/cadastrar");
  }
  function handleClick2() {
    navigate("/album");
  }


  
  return (
    <div className="container">


      <img src={image} alt="icon" width={"50%"} style={{alignSelf:'center'}}></img>



       
       
        <div className='formulario'>
        <div className='button'>
                <button onClick={handleClick1} >CADASTRAR</button>
        </div>
        <div className='button'>
                <button onClick={handleClick2}>MEU ALBUM</button>
        </div>
        </div>



    </div>

  );
}

export default App;
