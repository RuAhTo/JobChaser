import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../fireBase";

// Definiera typen för formSubmit-funktionen
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
    } = useForm<FormData>(); // Använd FormData-typen här

    // Använd FormData-typen som argumenttyp för formSubmit-funktionen
    const formSubmit = (data: FormData) => {
        console.log("Form Submitted: ", data);
        const { email, password } = data;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
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
        <section className='m-24 p-2 h-70 rounded-lg bg-primary flex align-center flex-col'>
            <h1 className='flex justify-center mb-6 mt-2 text-5xl' >Log In</h1> 
            <form className='p-12 flex justify-center flex-col text-center' onSubmit={handleSubmit(formSubmit)}>
                <div className='p-8'>
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

                <div>
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
            <Link to="/signup">Don't have an account? Sign Up</Link>
        </section>
        </>
    );
}

export default LogInForm;
