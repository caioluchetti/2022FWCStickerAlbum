import './login.css';
import React, { useState, useContext, useEffect } from 'react';
import image from './icon.png'    
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import axios from '../axios';
import {cromos} from '../component/cromos'




const data = Object.values(cromos);
console.log(typeof(data))

function App() {
  
  return (
    
    <div className="containerMap">
      {data && data.map(function(array){
            console.log(array.pais);
            return(
                <div className="card">
                <img src={array.imagem} className="img"></img>
                <div className="TextCard">
                    <h1 style={{fontSize:'5vh'}}>TESTE</h1>
                    <h2 style={{fontSize:'3vh'}}>QUANTIDADE: 10</h2>
                </div>
    
            </div>
            
            )
           

      }
        
        
      )}
    </div>
            
  
       


  )
    }
    
    
export default App;