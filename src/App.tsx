import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet  } from 'react-router-dom';
import { fetchJobs, Job } from './jobService';
import HomePage from './routes/HomePage';
import Dashboard from './routes/Dashboard';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Search from './components/Search';
import Card from './components/Card'
import './index.css'

function ProtectedRoute() {

  const isAuthenticated = false

  return isAuthenticated ? <Outlet/> : <Navigate to='/signin' replace></Navigate>
}


function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobsData = await fetchJobs();
        setJobs(jobsData);
        setFilteredJobs(jobsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (filteredJobs: Job[]) => {
    setFilteredJobs(filteredJobs);
  };

  const [links] = useState([
    { label: 'Home', url: '/'},
    { label: 'Sign Up', url: '/signup' },
    { label: 'Log In', url: '/login' },
  ]);

  return (
    <BrowserRouter>
    <header className='flex justify-around flex-row bg-slate-200'>
      <a className='m-0 p-0 flex' href='HomePage'><img className='m-0 p-0' src="./assets/react.svg" alt="" /></a>
    <ul className='flex flex-row'>
      {links.map((link, index) => (
        <li key={index} className='m-4'>
          <a href={link.url}>{link.label}</a>
        </li>
      ))}
      <li className='m-4'>
        <button>Sign Out</button>
      </li>
    </ul>
    </header>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        {/* <header className='header'>
          <h1>Job Chaser</h1>
        </header>
        <Search jobs={jobs} onSearch={handleSearch} />
        <div className="jobs-container">
          <JobList jobs={filteredJobs} />
        </div> */}
      </Routes>
    </BrowserRouter>
  );
}

function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <>
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </>
  );
}


export default App;
