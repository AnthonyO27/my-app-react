import { Fragment } from "react"
import { useForm } from "react-hook-form"

const FormHook = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <Fragment>
            <h1>Formulario React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="form-control my-2"
                    {...register("titulo", { required: true })}
                />
                {errors.titulo?.type && <div className="alert alert-danger" role="alert">Titulo es requerido</div> }
                <button type="submit" className="btn btn-dark">Enviar</button>
            </form>
        </Fragment>
    )
}
export default FormHook