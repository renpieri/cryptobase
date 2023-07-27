
import { useEffect, useState } from 'react'
import useMoneda from '../hooks/useMoneda'
import useCrypto from '../hooks/useCrypto'



    const Formulario = ({ setMoneda, setCrypto }) => {
    const monedas = [
        { codigo: 'USD', nombre: 'Dolar Estados Unidos'},
        { codigo: 'EUR', nombre: 'Euro'},
        { codigo: 'GBP', nombre: 'Libra Esterlina'},
    ]
    const [ cryptos, setCryptos ] = useState([])
    const [ error, setError ] = useState(false)

    const [ stateMoneda, SeleccionarMoneda, setStateMoneda ] = useMoneda('Moneda', '', monedas)
    const [ stateCrypto, SelectionCrypto, setstateCrypto ] = useCrypto('Crypto', '', cryptos)



    useEffect(()=>{

        fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')
            .then(res => res.json())
            .then(res=> {
                setCryptos(res.Data)
        })  

    }, [])
    
    function onSubmit(e){
        e.preventDefault()

        if(stateMoneda === '' || stateCrypto === '') {
            setError(true) 
            return
        }

        setError(false)
        
        setMoneda(stateMoneda)
        setCrypto(stateCrypto)
       
    }

    
    
    return (
        
        <form onSubmit={onSubmit} className='flex flex-col lg:w-1/4 sm:w-1/2 m-5'>      
            <SeleccionarMoneda/>
            <SelectionCrypto/>

            <button className='p-2 w-full sm:w-1/2 mt-5 font-medium rounded-md text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-900'>Ver precio</button>
            {error ? <p className='bg-red-500 p-2 mt-5 text-center text-white'>Ingrese los campos requeridos</p>: null}
        </form>
  )
}

export default Formulario
