// Import obrigatório mesmo que não haja uso da variável "React", o JFX funciona com essa importação
import React from 'react';

export default function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <h1>{props.children}</h1>
        </header>
    );
}        

//export default Header;