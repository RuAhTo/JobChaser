import '../index.css'
import {useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    name: string,
    age: number,
    email: string,
    password: string,
}

function SignUp(){
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return(
        <>
        <main className='h-200 flex justify-center'>
            <section className='m-24 p-2 h-70 rounded-lg bg-primary flex flex-col shadow-xl'>
                <h1 className='flex justify-center mb-6 mt-2 text-5xl' >Register an account</h1> 
                <form className='p-12 flex flex-col items-center w-full' onSubmit={handleSubmit(onSubmit)}>
                    <div className='p-8'>
                        <div className='flex justify-between items-center'>
                            <label className='mr-8 italic'>Name:</label>
                            <input className='w-48 h-8 p-2 m-2 rounded-md' placeholder='Enter your name' {...register('name', {required: true})} type="text" />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='mr-8 italic'>Age:</label>
                            <input className='w-48 h-7 p-2 m-2 rounded-md' placeholder='Enter your age' {...register('age', {required: true})} type='number' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='mr-8 italic'>Email:</label>
                            <input className='w-48 h-8 p-2 m-2 rounded-md' type='email' placeholder='Enter your email' {...register('email', {required: true})}/>
                        </div>
                        <div className='flex justify-between items-center'>
                        <label className='mr-8 italic'>Password:</label>
                        <input className='w-48 h-8 p-2 m-2 rounded-md' placeholder='Enter a password' {...register('password', {required: true})} type="password" />
                        </div>
                    </div>
                    <div>
                        <button className='w-22 bg-secondary m-2 p-4 rounded-xl text-black ' type="submit">Submit</button>
                    </div>
                    <div className='m-2'>
                        {errors.email && errors.password && <span className='italic'>You need to fill out all fields</span>}
                    </div>
                </form>
            </section>
        </main>
        </>
    )
}

export default SignUp