import { useState } from 'react'

const useCrypto = (label, inicial, opciones) => {
    
    const [state, setState] = useState(inicial)

    function handleInput(e){
        setState(e.target.value)
    }


    const SelectionCrypto = () => (
        <>
        <label className='py-5 text-white text-left' htmlFor='crypto'>{label}</label>
        <select className='block appearance-none w-full bg-gray-700 border-0 text-white py-2 px-3 pr-8 rounded-md leading-tight focus:outline-none focus:ring-0 focus:border-0' name='state' id='crypto' value={state} onChange={handleInput}>
        <option value=''>Seleccione una cryptomoneda</option>
        {
            opciones.map((e,i)=>{ 
               return (
                    <option key={i} value={e.CoinInfo.Name}>{e.CoinInfo.FullName}</option>
                )
            })
        }
        </select>
        </>
    )

  return [state, SelectionCrypto, setState];

}

export default useCrypto
