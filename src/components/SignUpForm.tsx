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
            <section>
                        <h2>Register</h2>
                <form onSubmit={handleSubmit(formSubmit)}>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input
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
                    <div>
                        <label className='' htmlFor="password">Password:</label>
                        <input 
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

                    <div>
                        <label className='' htmlFor="confirmPassword">Confirm Password:</label>
                        <input
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
                    <button type="submit">Register</button>
                    <Link to='/login'>Already have an account? Sign In</Link>
                </form>
            </section>
        </>
    )
}

export default SignUpForm;