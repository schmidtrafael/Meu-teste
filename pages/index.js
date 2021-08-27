import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Home 1</h1>
            <contador />
         </div>
    )
}

function contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
            setContador(contador + 1);
    }
    
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Contando!</button>
        </div>
    )
}

export default Home