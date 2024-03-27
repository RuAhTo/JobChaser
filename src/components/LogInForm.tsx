import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../fireBase";


type FormData = {
    email: string;
    password: string;
};

function LogInForm() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const formSubmit = (data: FormData) => {
        console.log("Form Submitted: ", data);
        const { email, password } = data;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log("User signed in: ", user);
                navigate("/dashboard");
            })
            .catch((error) => {
                console.error("Error occurred,", error);
            });
    };

    return (
        <>
        <section className='card m-24 p-12 rounded-lg bg-primary flex align-center flex-col fade-in'>
            <h2 className='flex justify-center mb-6 mt-2 text-5xl' >Log In</h2> 
            <form className='m-2 flex justify-center flex-col text-center' onSubmit={handleSubmit(formSubmit)}>
                <div className='flex justify-between items-center'>
                    <label htmlFor="email">Email:</label>
                    <input
                        className='p-2 m-2 rounded-md'
                        id="email"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email?.message && <>{errors.email.message}</>}
                </div>

                <div className="mb-4 flex justify-between items-center">
                    <label htmlFor="password">Password:</label>
                    <input
                    className='p-2 m-2 rounded-md'
                        id="password"
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters"
                            }
                        })}
                    />
                    {errors.password?.message && <>{errors.password.message}</>}
                </div>
                <button className='w-22 bg-secondary m-2 p-4 rounded-xl text-black' type="submit">Log in</button>
            </form>
            <Link className="flex justify-center italic " to="/signup">Don't have an account?</Link>
        </section>
        </>
    );
}

export default LogInForm;
