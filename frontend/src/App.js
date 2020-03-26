import React, { useState } from 'react';
// import Header from './Header';
import Logon from './pages/Logon';

import './global.css';

import Routes from './routes';

// JSX: Javascript com XML, é o HTML integrado dentro do Javascript
function App() {

    // Um componente no React é uma função que retorna HTML
    return (
        <Routes/>
    );
}

/*

// Retorna Array com duas posições {valor, função de atuaização do valor}
const [counter, setCounter] = useState(0);
function increment() {
    // counter++;
    setCounter(counter + 1);
    console.log(counter);
}

<div>
    <Header title="Semana OmniStack" />
    <Header> Semana OmniStack </Header>
    <Header> Contador: {counter} </Header>
    <button onClick={increment}>Incrementar</button>
</div> 
*/

export default App;