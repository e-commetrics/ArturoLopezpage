import React from 'react';

function NotFoundPage() {
  return (
    <div className='items-center text-white'>
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <div className='py-4'>
      <button className='py-4 bg-white rounded-2xl hover:bg-gray-400'>
        <a href="/" className='p-8 text-black'>
        Regresar a la pagina principal
        </a>
    </button>
      </div>
    </div>
  );
}

export default NotFoundPage;