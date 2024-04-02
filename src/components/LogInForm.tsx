import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../fireBase";
import '../scss/style.scss'

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
        <section>
            <h2>Log In</h2> 
            <form onSubmit={handleSubmit(formSubmit)}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
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
                <button type="submit">Log in</button>
            </form>
            <Link to="/signup">Don't have an account?</Link>
        </section>
        </>
    );
}

export default LogInForm;
