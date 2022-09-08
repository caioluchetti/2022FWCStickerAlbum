import './login.css';
import React, { useState, useContext, useEffect } from 'react';
import image from './icon.png'    
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import axios from '../axios';



function App() {
  const [fig, setFig] = useState(String)
  const [senha, setSenha] = useState(String)
  const [total, setTotal] = useState(0);


  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  function Teste() {
    
    alert(fig.toUpperCase())

}
  useEffect(() => {
    TotalFig();
  }, []);

  
  const TotalFig = async () => {

    const result2 = await axios.get('/fig/total')
    .then((result2) =>{
        console.log(result2.data[0].total)
        setTotal(result2.data[0].total)

    }).catch((error) => {
        console.error(error);
    })


}


const postFiguras = async () => {


    var figtrat = fig.toUpperCase()
    const paramfig = {
        CODIGO: figtrat,
    }
    
    console.log(figtrat)


    const result = await axios.post('/fig/cadastrar',paramfig)
    .then((result) => {
        console.log(result.data);

        alert("FIGURINHA CADASTRADA COM SUCESSO",result.data,
        [
            {text: 'OK', onPress: () => TotalFig()},
          ],
          {cancelable: false},
          )
      }).catch((error) => {
        alert("ERRO FIGURINHA INEXISTENTE","FIGURINHA NÃO EXISTENTE")
      });

    }


  return (
    <div className="container">

<img src={image} alt="icon" width={"50%"} style={{alignSelf:'center'}}></img>

<div className='email'>
               
                <InputMask mask="aaa99" placeholder='BRA01' value={fig} onChange={(event) => setFig(event.target.value)}>
                {(inputProps) => (
                  <input
                    {...inputProps}
                  
                  />
                )}
                </InputMask>
              </div>

<div className='button'>
        <button onClick={postFiguras}>CADASTRAR</button>
</div>
<div className='buttonVoltar' >
        <button onClick={handleClick}>Voltar</button>
</div>



     
    </div>

  );
}

export default App;
