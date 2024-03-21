import '../index.css'

function HomePage(){
    return(
        <main className='h-200 flex justify-center'>
            <section className='m-24 p-2 h-70 rounded-lg flex align-center flex-col'>
                <h1 className='flex justify-center mb-6 text-5xl text text-center' >Your next adventure awaits!</h1>
                <p className='text-center text-lg m-2'>Search among thousands of jobs and find your next workplace today.</p>
                <img className='m-2' src="./assets/undraw_referral_re_0aji.svg" alt="" />
                <div className='flex justify-center items-center'>
                    <a className='bg-primary p-4 rounded-xl text-xl shadow-lg' href="/signup"><button>Sign up today!</button></a>
                </div>
            </section>
        </main>
    )
}

export default HomePage