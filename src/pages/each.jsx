import './login.css';
import React, { useState, useContext, useEffect } from 'react';
import image from './icon.png'    
import { useNavigate, useParams } from 'react-router-dom';
import InputMask from 'react-input-mask';
import axios from '../axios';
import {cromos} from '../component/cromos'
import Switch from "../component/Switch";



function Each() {

 

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [value, setValue] = useState(false);
    const [vetor, setArray] = useState([]);
    const [codfig, setCodfig] = useState('');
    const [cell, setCell] = useState('');


    const { id } = useParams();
   
    useEffect(()=>{   
        Envio()
        // console.log(props.route.params.rota)

      },[

        // props.route.params.rota

      ])
      
      let paramfig = {
         PAGINA: id
    }
    const data = Object.values(paramfig);
    console.log(typeof(data))
    console.log(paramfig)

    async function Envio() {
      

      try {
          
              const response = await axios.post('/fig/listaespecifico',paramfig).catch(err => alert(err));
              if (response) {
                  console.log(response)
                  setArray(response.data)
              }


      } catch (err) {
          alert(err)
      }






  }
    
  return (
    
    <div className="containerMap">
      <div className="Switch">

     <div className="SwitchTextGreen">Adicionar </div>  <Switch
        isOn={value}
        onColor="#EF476F"
        handleToggle={() => setValue(!value)}
      /><div className="SwitchTextRed"> Remover </div>
      </div>

      
      {vetor && vetor.map(function(array){
                  return(
                
                <div className="cardfig" key={array.CODIGO}>
                
                <h1 style={{fontSize:'5vw', color:'white', textShadow:'2px 2px 8px #000000'}}>{array.PAGINA}</h1>
                <h2 style={{fontSize:'4vw',fontStyle:'italic', color:'white', textShadow:'2px 2px 8px #000000'}} >{array.CODIGO}</h2>
                <h3 style={{fontSize:'4vw',fontWeight:'bold', color:'white', textShadow:'2px 2px 8px #000000'}}>Quantidade: X</h3>
                
                </div>
            
            )
           

      }
        
        
      )}
    </div>

    
        
        
    
   
            
  
       


  )
    }
    
    
export default Each;
