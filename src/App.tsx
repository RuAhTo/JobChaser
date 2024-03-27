import { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, Link  } from 'react-router-dom';
import { AuthContext } from './components/context/AuthContext'
import { signOut } from 'firebase/auth';
import { auth } from "./fireBase";

//Routes
import HomePage from './routes/HomePage';
import Dashboard from './routes/Dashboard';
import SignUp from './routes/SignUp';
import LogIn from './routes/LogIn';

//CSS
import './index.css'


function ProtectedRoute() {

  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext && authContext.user !== null;
  console.log('isAuthenticated', isAuthenticated)

  return isAuthenticated ? <Outlet/> : <Navigate to='/login' replace></Navigate>
}


function App() {
  const [links] = useState([
    { label: 'Home', url: '/'},
    { label: 'Sign Up', url: '/signup' },
    { label: 'Log In', url: '/login' },
  ]);
  
  const handleSignOut = (): void => {
    signOut(auth)
    .then(() => {
      console.log('User signed out successfully')
    })
    .catch((error) => {
      console.error('Error signing out:', error)
    })
  }

  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext && authContext.user !== null;

  return (
    <BrowserRouter>
    <header className='flex justify-between items-center flex-row h-20 elevate'>
      <div className='flex justify-start ml-8'>
        <a className='m-2 p-0 w-14 flex' href='/'><img className='m-0 p-0' src="./assets/faceit.svg" alt="" /></a>
      </div>
      <div>
      <ul className='flex text-xl ml-12 mr-12 items-center enter-left'>
            {isAuthenticated ? (
              <>
                <li className='m-4 drop-shadow-xl text-black'>
                  <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className='m-4 drop-shadow-xl text-black'>
                  <button onClick={handleSignOut} className='border-black border-2 rounded-lg p-3 text-black'>Sign Out</button>
                </li>
              </>
            ) : (
              links.map((link, index) => (
                <li key={index} className='m-4 drop-shadow-xl text-black'>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))
            )}
          </ul>
    </div>
    </header>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
        <footer className='flex justify-center items-end bg-secondary h-16'>
          <section>
            <button><img className='w-8 m-2' src="/assets/fb_icon.svg" alt="" /></button>
            <button><img className='w-8 m-2' src="/assets/git_icon.svg" alt="" /></button>
            <button><img className='w-8 m-2' src="/assets/linked_icon.svg" alt="" /></button>
            <button></button>
            <button></button>
          </section>
        </footer>
    </BrowserRouter>
  );
}


export default App;
