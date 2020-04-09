import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [paises, setPaises] = useState([]);
  const [busqueda, setBusqueda] = useState('Argentina');

  const buscarPais = () => {
    fetch(`https://restcountries.eu/rest/v2/name/${busqueda}`)
      .then(res => res.json())
      .then(data => setPaises(data));
  }

  useEffect(() => {
    buscarPais()
  }, [busqueda]);

  const handleChange = e => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
        <input value={busqueda} onChange={handleChange} />
        <input type="submit" value="Buscar pais" />
      </form>

    <div className="main">
      
        {busqueda != '' && paises.map((pais, i) => {
          return (
            <div className="card">
              <img alt={pais.name} src={pais.flag} ></img>
              <h4>{pais.name}</h4>         
      </div>  
          )
        }
        )}
      
    </div>
    </>
  );
}


export default App;