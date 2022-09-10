import './login.css';
import React, { useState, useContext, useEffect } from 'react';
import image from './icon.png'    
import { useNavigate } from 'react-router-dom';
import axios from '../axios'


function App() {
  const [total, setTotal] = useState(0);
  const [repetidas, setRep] = useState(0);

  useEffect(() => {
    TotalFig();
    repFig();
  }, []);

  const navigate = useNavigate();

  function handleClick1() {
    navigate("/cadastrar");
  }
  function handleClick2() {
    navigate("/album");
  }

  const TotalFig = async () => {

    const result2 = await axios.get('/fig/total')
    .then((result2) =>{
        console.log(result2)
        setTotal(result2.data[0].somaTotal)

    }).catch((error) => {
        console.error(error);
    })


}
const repFig = async () => {

  const result2 = await axios.get('/fig/repetidas')
  .then((result2) =>{
      console.log(result2)
      setRep(result2.data[0].somaTotal)

  }).catch((error) => {
      console.error(error);
  })


}
  
  return (
    <div className="container">


      <img src={image} alt="icon" width={"50%"} style={{alignSelf:'center'}}></img>


        <div className='contador'>
          <div className='TemosFaltam'>
              Temos: 
          </div>
          <div className='num' style={{color: 'green'}}>
              {677-total}
          </div>
        </div>
        <div className='contador'>
          <div className='TemosFaltam'>
              Faltam: 
          </div>
          <div className='num' style={{color:'red'}}>
              {total}
          </div>
        </div>
        <div className='contador'>
          <div className='TemosFaltam'>
              Repetidas: 
          </div>
          <div className='num' style={{color:'purple'}}>
              {repetidas}
          </div>
        </div>
       
       
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
