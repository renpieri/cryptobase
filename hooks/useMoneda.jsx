import { useState } from 'react';

const useMoneda = (label, inicial, opciones) => {
  const [state, setState] = useState(inicial);

    function handleInput(e){
        setState(e.target.value)
    }


  const Seleccionar = () => (
    <>
        <label className='py-5 text-white text-left' htmlFor='moneda'>{label}</label>
        <select className='block appearance-none w-full bg-gray-700 border-0 text-white py-2 px-3 pr-8 rounded-md leading-tight focus:outline-none focus:ring-0 focus:border-0' name='state' id='moneda' value={state} onChange={handleInput}>
        <option value=''>Seleccione una moneda</option>
        {
            opciones.map((e,i)=>{ 
               return (
                    <option key={i} value={e.codigo}>{e.nombre}</option>
                )
            })
        }
        </select>
    </>
  );

  return [state, Seleccionar, setState];
};

export default useMoneda;


