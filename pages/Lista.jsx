import React from 'react'

const Lista = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    
  return (
    <div className='p-5 bg-gradient-to-br from-purple-900 to-purple-700 text-white shadow-lg rounded-lg overflow-hidden lg:w-1/4 sm:w-1/2'>
        <h2 className="text-2xl font-bold mb-4">DETALLES:</h2>
         <p className="mb-2">El precio es: <span className='font-medium'>{resultado.PRICE}</span></p>
         <p className="mb-2">El precio mas alto en el día: <span className='font-medium'>{resultado.HIGHDAY}</span></p>
         <p className="mb-2">El precio mas bajo del día: <span className='font-medium'>{resultado.LOWDAY}</span></p>
         <p className="mb-2">Cuanto vario en 24 horas: <span className='font-medium'>${resultado.CHANGEPCT24HOUR}</span></p>
    </div>
  )
}

export default Lista

