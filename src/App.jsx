import { useEffect, useState } from 'react'
import Formulario from '../pages/Formulario'
import Lista from '../pages/Lista'
import Spinner from '../pages/Spinner'
import './App.css'


function App() {

  const [ moneda, setMoneda ] = useState('') 
  const [ crypto, setCrypto ] = useState('') 
  const [ resultado, setResultado ] = useState('') 
  const [ spinner, setspinner ] = useState(false) 


useEffect(()=>{

  if(moneda === '') return
  
  fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`)
      .then(res => res.json())
      .then(res=> {
    
        setspinner(true)

        setTimeout(()=>{
        setspinner(false)
          setResultado(res.DISPLAY[crypto][moneda])
        }, 1000)
  })  

}, [moneda, crypto])

  return (
    <>
      <div className='flex justify-center items-center'>
        <h1 className='text-center p-5 text-white font-bold text-5xl'>CRYPTOBASE</h1>
      </div>
      <div className='flex items-center justify-around flex-col lg:flex-row'>
        <Formulario setMoneda={setMoneda} setCrypto={setCrypto} />
        { spinner ? <Spinner/> : <Lista resultado={resultado}/> }
       
      </div>
    </>
  )
}

export default App
