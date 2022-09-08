import './login.css';
import React, { useState, useContext, useEffect } from 'react';
import image from './icon.png'    
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import axios from '../axios';
import {cromos} from '../component/cromos'
import Switch from "../component/Switch";



function Each(props) {

    console.log()

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [vetor, setArray] = useState([]);
    const [codfig, setCodfig] = useState('');
    const [cell, setCell] = useState('');



    
    useEffect(()=>{
        listFig();        

        console.log(props.route.params.rota)

      },[

        props.route.params.rota

      ])
      
      let paramfig = {
        PAGINA: props.route.params.rota
    }


      function listFig() {
        //  console.log(cell)
        //  console.log("teste")
        //  console.log(paramfig)

        const result2 =  axios.post('/fig/listaespecifico', paramfig)
        .then((result2) =>{
            console.log(result2.data)
            setArray(result2.data)

        }).catch((error) => {
            console.error(error);
        })


    }

    function postFiguras(paramfig){

        console.log(paramfig);

      if(!isEnabled){
        const result = axios.post('/fig/cadastrar',paramfig)
        .then((result) => {
            

           alert("Sucesso",result.data,
           
              )
            listFig()
          }).catch((error) => {
           alert("ERRO","FIGURINHA NÃO EXISTENTE")
          });
  
      } else{
        const result = axios.post('/fig/remover',paramfig)
        .then((result) => {
            

           alert("Sucesso",result.data,
           
              )
            listFig()
          }).catch((error) => {
           alert("ERRO","FIGURINHA NÃO EXISTENTE")
          });

      }
        }

    
  
  return (
    
    <div className="container">
        <Switch />
        <div className="card">

        </div>
     
           

    
        
        
    
    </div>
            
  
       


  )
    }
    
    
export default Each;
