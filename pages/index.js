import { useState } from 'react';

function Home() {
    return (
        <div>
            <h2>LiSi Sistemas Digitais</h2>
            <h5>Humberto Lima Jr</h5>
            <hr />
            <a href='/sobre'>Acessar página Sobre</a>
            <br />
            <a href='/tempo'>Acessar página Tempo</a>
            <hr />
            <Contador />
        </div>
    )
}

function CapsLock(props) {
    const textoFilho = props.children;
    const textoSaida = textoFilho.toUpperCase();
    return <div>{textoSaida}</div>
}

function Contador() {

    const [contador, setContador] = useState(1);

    function addContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={addContador}>Adicionar</button>
        </div>
    )
}

export default Home