import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchJobs, Job } from './jobService';
import HomePage from './routes/HomePage';
import Dashboard from './routes/Dashboard';
import JobPage from './routes/JobPage';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Search from './components/Search';
import Card from './components/Card'
import './index.css'


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

  return (
    <BrowserRouter>
    <header className='flex justify-around flex-row bg-slate-200'>
      <img src="./assets/react.svg" alt="" />
      <ul className='flex flex-row'>
        <li className='m-4'>Jobs</li>
        <li className='m-4'>Sing Up</li>
        <li className='m-4'>Log In</li>
        <button className='m-4'>Sign Out</button>
      </ul>
    </header>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/jobpage' element={<JobPage/>}/>
        <Route path='/singin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
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
