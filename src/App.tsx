import { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet  } from 'react-router-dom';
import AuthContext from './components/context/AuthContext'

//Routes
import HomePage from './routes/HomePage';
import Dashboard from './routes/Dashboard';
import SignUp from './routes/SignUp';
// import LogIn from './routes/LogIn';

//CSS
import './index.css'


function ProtectedRoute() {

  // const authContext = useContext(AuthContext);

  const isAuthenticated = true

  return isAuthenticated ? <Outlet/> : <Navigate to='/login' replace></Navigate>
}


function App() {
  const [links] = useState([
    { label: 'Home', url: '/'},
    { label: 'Sign Up', url: '/signup' },
    // { label: 'Log In', url: '/login' },
  ]);

  return (
    <BrowserRouter>
    <header className='flex justify-between items-center flex-row bg-primary'>
      <div className='flex justify-start ml-8'>
        <a className='m-2 p-0 w-14 flex drop-shadow-lg' href='/'><img className='m-0 p-0' src="./assets/faceit.svg" alt="" /></a>
      </div>
      <div>
      <ul className='flex text-xl ml-12 mr-12 items-center enter-left'>
        {links.map((link, index) => (
          <li key={index} className='m-4 drop-shadow-xl'>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      <li className='m-4'>
        <div className=''>
          <button className='border-black border-2 rounded-lg p-3'>Sign Out</button>
        </div>
      </li>
    </ul>
    </div>
    </header>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/login' element={<LogIn/>}/> */}
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
