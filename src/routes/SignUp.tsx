import SignUpForm from '../components/SignUpForm';
import '../index.css'


function SignUp(){

    return(
        <>
        <main className='h-200 flex justify-center flex-col '>
            <h1 className='m-2 flex justify-center text-3xl'>Available Jobs</h1>
            <SignUpForm/>
        </main>
        </>
    )
}

export default SignUp