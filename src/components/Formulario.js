import { Fragment, useState } from "react"

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido);
    }
    return (
        <Fragment>
            <h3>Formulario</h3>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                        className="form-control"
                        placeholder="Ingrese Nombre"
                        name="nombre"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <input
                        className="form-control"
                        placeholder="Ingrese Apellido"
                        name="apellido"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-dark" type="submit">Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </Fragment>

    )
}

export default Formulario