import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Componente1 from './Componente1';
import Lista from './Lista';
import Imagenp from './Imagenp';
import Ejercicio2 from './Ejercicio2/Ejercicio2';
import Ejercicio3 from './Ejercicio3/Ejercicio3';
import './index.css';
import Ejercicio4 from './Ejercicio4/Ejercicio4';
import Ejercicio4b from './Ejercicio4/Ejercicio4b';


const root = ReactDOM.createRoot(document.getElementById('root'));
const arregloDatos = [
  //arreglo que almacena objetos json para las tarjetas
  {
    img:'https://http2.mlstatic.com/D_NQ_NP_779427-MLM49035819339_022022-O.webp',
    titulo: 'Titulo 1',
    texto: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  },

  {
    img:'https://picsum.photos/180/120?random=1',
    titulo: 'Titulo 2',
    texto: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  },

  {
    img:'https://picsum.photos/180/120?random=1',
    titulo: 'Titulo 3',
    texto: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }
];

const arregloAlert = [
  //arreglo que almacena objetos json para las tarjetas
  {
    alert:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
    tipoA:'alert alert-dark'
  },

  {
    alert:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
    tipoA:'alert alert-primary'
  },

  {
    alert:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
    tipoA:'alert alert-danger'
  },

  {
    alert:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
    tipoA:'alert alert-warning'
  }
];
root.render(
  <React.StrictMode>
     {/* <App />  */}
    {/* <Componente1/>
    <Componente1/>
    <Componente1/>
    <Componente1/>
    <Lista/>
    <Imagenp/> */}
    {/* <Ejercicio2 nombre="Daniel" año="2024"/>
    <Ejercicio2 año="2024"/> */}
    {/* <Ejercicio3/> */}
    {/* <Ejercicio4 
     imagen="https://http2.mlstatic.com/D_NQ_NP_779427-MLM49035819339_022022-O.webp"
     Titulo="Titulo 1" 
     texto="Some quick example text to build on the card title and make up the bulk of the card's content."/>
    <Ejercicio4b alert="Lorem ipsum dolor sit amet, consectetur adipiscing elit." tipoA="alert alert-primary"/>
    <Ejercicio4b alert="Lorem ipsum dolor sit amet, consectetur adipiscing elit." tipoA="alert alert-dark"/>
    <Ejercicio4b alert="Lorem ipsum dolor sit amet, consectetur adipiscing elit." tipoA="alert alert-danger"/>
    <Ejercicio4b alert="Lorem ipsum dolor sit amet, consectetur adipiscing elit." tipoA="alert alert-warning"/> */}
    {/* ejercicio5 */}
    {/* {
      arregloDatos.map((dato) => {
        return(
          <Ejercicio4 
          imagen={dato.img} 
          Titulo={dato.titulo}
          texto={dato.texto}/>
        ); 
      })
    } */}

    {/* ejercicio6 */}
    {
      arregloAlert.map((item) => {
        return(
          <Ejercicio4b 
          alert={item.alert} 
          tipoA={item.tipoA}/>
        ); 
      })
    }
    {/* <Ejercicio4 imagen="https://http2.mlstatic.com/D_NQ_NP_779427-MLM49035819339_022022-O.webp" 
    Titulo="Titulo 1" 
    texto="Some quick example text to build on the card title and make up the bulk of the card's content."/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
