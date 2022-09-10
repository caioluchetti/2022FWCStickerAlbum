import './login.css';
import React, { useState, useContext, useEffect } from 'react';
import image from './icon.png'
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import axios from '../axios';
import { cromos } from '../component/cromos'
import Each from './each'





function Album() {

  useEffect(() => {

    listFig()
  }, [])


  const navigate = useNavigate();


  const [pais, setPais] = useState('')
  const [vetor, setArray] = useState([]);



  function handleClick1(array) {
    navigate(`/each/${array}`);
  }
  function handleClick() {
    navigate("/");
  }


  async function listFig() {

    try {
      let data = Object.values(cromos);
      console.log(typeof (data))


      const response = await axios.get('/fig/somaind')
       
     if(response){
      response.data.forEach(element => {
        const i = data.findIndex(el => element.PAGINA == el.nome)
        data[i].falta = element.somaTotal
        console.log(data[i].rota)
      });

     }
      console.log(data)
      setArray(data)
      
      // if (response) {
      //     console.log(response)
      //     console.log(typeof(response))
      //     const entry = Object.entries(response);
      //     console.log(entry[0][1])

      //     setArray(entry[0][1])
      // }

    }catch(error){
      console.log(error)
    }


    }






  const [count, setCount] = useState(0);

  return (

    <div className="containerMapalbum">

      <div className='buttonVoltar' >
        <button onClick={handleClick}>Voltar</button>
      </div>
      {
        console.log(vetor)
      }
      {vetor &&  vetor.map(function (array, index) {



        // console.log(vetor[index].somaTotal)
        return (

          <div className="card" onClick={() => handleClick1(array.nome)}>
            <img src={array.imagem} className="img"></img>
            <div className="TextCard">
              <h1 style={{ fontSize: '3vh' }} key={array.pais}>{array.pais}</h1>
              <h2 style={{ fontSize: '3vh' }} key={array.pais + "q"}>Faltantes: {array.falta}</h2>

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
