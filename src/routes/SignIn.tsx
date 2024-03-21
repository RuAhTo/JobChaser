import '../index.css'
import {useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    email: string,
    password: string,
}

function SignIn(){
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return(
        <>
            <h1>Log In</h1> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue='Enter your e-mail here...' {...register('email', {required: true})}/>

                <input {...register('password', {required: true})} type="password" />

                {errors.email && errors.password && <span>You need to fill out all fields</span>}
            </form>
        </>
    )
}

export default SignIn