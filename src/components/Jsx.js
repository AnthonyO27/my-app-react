import { Fragment } from "react"

const Jsx = () => {
    const temperatura = 21
    return (
        <Fragment>
            <h2>Frío o calor</h2>
            <h3>
                {
                    temperatura > 20 ? 'Calor' : 'Frío'
                }
            </h3>
        </Fragment>
    );
}

export default Jsx