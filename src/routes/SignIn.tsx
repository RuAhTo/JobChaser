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
        <main className='h-200 flex justify-center'>
            <section className='m-24 p-2 h-70 rounded-lg bg-slate-300 flex align-center flex-col'>
                <h1 className='flex justify-center mb-6 text-5xl' >Log In</h1> 
                <form className='p-12 flex justify-center flex-col text-center' onSubmit={handleSubmit(onSubmit)}>
                    <div className='p-8'>
                        <label htmlFor="">Email:</label>
                        <input className='p-2 m-2 ' type='email' placeholder='Enter your email' {...register('email', {required: true})}/>
                        <label className='italic'>Password:</label>
                        <input className='p-2 m-2' placeholder='Enter a password' {...register('password', {required: true})} type="password" />
                    </div>
                    <div>
                        <button className='w-22 bg-gray-500 m-2 p-4 rounded-xl text-white ' type="submit">Submit</button>
                    </div>
                    <div className='m-4'>
                        {errors.email && errors.password && <span>You need to fill out all fields</span>}
                    </div>
                </form>
            </section>
        </main>
        </>
    )
}

export default SignIn