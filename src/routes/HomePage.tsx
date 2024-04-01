import '../scss/index.scss'

function HomePage(){
    return(
        <main>
            <section className='hompage-wrapper'>
                <h1 className='homepage-h1'>Your next adventure awaits!</h1>
                <p>Search among thousands of jobs and find your next workplace today.</p>
                <img src='/assets/undraw_referral_re_0aji.svg' alt="" />
                <div>
                    <a href="/signup"><button>Sign up today!</button></a>
                </div>
            </section>
        </main>
    )
}

export default HomePage