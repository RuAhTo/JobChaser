import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../fireBase'

function SignUpForm(){

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const formSubmit = (data: any) => {
        console.log('Form Submitted:', data);
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
            navigate('/signin')
        })
        .catch ((error) => {
            console.error('Error creating user:', error)
        })
    }
    
    return (
        <>
            <section className='card m-24 p-12 rounded-lg bg-primary flex align-center flex-col fade-in'>
                        <h2 className='flex justify-center mb-6 mt-2 text-5xl'>Register</h2>
                <form className='m-2 flex justify-center flex-col text-center' onSubmit={handleSubmit(formSubmit)}>
                    <div className='flex justify-between items-center'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            className='p-2 m-2 rounded-md'
                            type="email"
                            id='email'
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        {errors.email?.message && <>{errors.email.message}</>}
                    </div>
                    <div className='flex justify-between items-center'>
                        <label className='' htmlFor="password">Password:</label>
                        <input 
                        className='p-2 m-2 rounded-md'
                        type="password"
                        id='password'
                        {...register('password', {
                            required: 'Password is required',
                            minLength:{
                                value: 8,
                                message: 'Password must be at least 8 characters'
                            }
                        })} />
                        {errors.password?.message && <>{errors.password.message}</>}
                    </div>

                    <div className='mb-4 flex justify-between items-center'>
                        <label className='' htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                        className='p-2 m-2 rounded-md'
                        id="confirmPassword"
                        type="password"
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) =>
                            value === watch("password") || "Passwords do not match"
                        })}
                        />
                        {errors.confirmPassword?.message && <>{errors.confirmPassword.message}</>}
                    </div>
                    <button className='w-22 bg-secondary m-2 p-4 rounded-xl text-black' type="submit">Register</button>
                    <Link className='flex justify-center italic' to='/login'>Already have an account? Sign In</Link>
                </form>
            </section>
        </>
    )
}

export default SignUpForm;