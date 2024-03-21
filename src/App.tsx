import { useState, useEffect } from 'react';
import { fetchJobs, Job } from './jobService';
import HomePage from './components/HomePage';
import Search from './components/Search';
import Card from './components/Card'
import './App.css';

//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route path='/' element={<HomePage/>}/> {/* Add the HomePage component */}
        <header className='header'>
          <h1>Job Chaser</h1>
        </header>
        <Search jobs={jobs} onSearch={handleSearch} />
        <div className="jobs-container">
          <JobList jobs={filteredJobs} />
        </div>
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
