import '../index.css'

function HomePage(){
    return(
        <main className='p-6 flex justify-center fade-in'>
            <section className='mt-6 p-2 h-70 rounded-lg flex items-center flex-col'>
                <h1 className='flex justify-center mb-2 text-6xl text text-center' >Your next adventure awaits!</h1>
                <p className='text-center text-lg m-2'>Search among thousands of jobs and find your next workplace today.</p>
                <img className='m-2 w-5/6' src="./assets/undraw_referral_re_0aji.svg" alt="" />
                <div className='flex justify-center items-center m-8 w-124'>
                    <a className='bg-primary text-center w-64 p-5 rounded-xl text-xl shadow-lg' href="/signup"><button>Sign up today!</button></a>
                </div>
            </section>
        </main>
    )
}

export default HomePage