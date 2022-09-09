import './login.css';
import React, { useState, useContext, useEffect } from 'react';
import image from './icon.png'    
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import axios from '../axios';
import {cromos} from '../component/cromos'
import Each from './each'



const data = Object.values(cromos);
console.log(typeof(data))

function Album() {
  const navigate = useNavigate();


  const [pais, setPais]= useState('')
  const [vetor, setArray] = useState([]);
  
  
  
  function handleClick1(array) {
    navigate(`/each/${array}`);
  }
  function handleClick() {
    navigate("/");
  }
  useEffect(()=>{   
    listFig()
    console.log(vetor)
  

  },[  ])


  async function listFig() {
      

    try {
        
            const response = await axios.get('/fig/somaind').catch(err => alert(err));
            if (response) {
                console.log(response)
                console.log(typeof(response))
                const entry = Object.entries(response);
                console.log(entry[0][1])
        
                setArray(entry[0][1])
            }


    } catch (err) {
        alert(err)
    }

    


}

const [count, setCount] = useState(0);

  return (
    
    <div className="containerMapalbum">
      
      <div className='buttonVoltar' >
        <button onClick={handleClick}>Voltar</button>
      </div>

      {data && data.map(function(array, index){
          

            
            console.log(index)
            console.log(vetor)
            return(
                
                <div className="card" onClick={()=> handleClick1(array.pais)}>
                <img src={array.imagem} className="img"></img>
                <div className="TextCard">
                    <h1 style={{fontSize:'3vh'}} key={array.pais}>{array.pais}</h1>
                    <h2 style={{fontSize:'3vh'}}key={array.pais+"q"}>QUANTIDADE: {vetor[0].somaTotal}</h2>
                    
                </div>

            </div>
            
            )
           
      
      }
        
        
      )
     
      }
    </div>
            
  
       


  )
    }
    
    
export default Album;
