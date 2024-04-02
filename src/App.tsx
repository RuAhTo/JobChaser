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
import './scss/style.scss'


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
    <header className='header-container'>
      <nav className='nav-bar'>
        <div className='home-logo'>
          <a href='/'><img src="./assets/faceit.svg" alt="" /></a>
        </div>
          <ul className='nav-list'>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link to='/dashboard'>Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>Sign Out</button>
                  </li>
                </>
              ) : (
                links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.url}>{link.label}</Link>
                  </li>
                ))
              )}
          </ul>
      </nav>
    </header>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
        <footer>
          <section>
          </section>
        </footer>
    </BrowserRouter>
  );
}


export default App;
