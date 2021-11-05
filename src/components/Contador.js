import { Fragment, useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0)
    const aumentar = () => {
        setContador(contador + 1)
    }
    return (
        <Fragment>
            <h3>Mi primer componente {contador}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    );
}

export default Contador