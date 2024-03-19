import { useState, useEffect } from 'react';
import { fetchJobs, Job } from './jobService';
import Search from './components/Search';
import Card from './components/Card'
import './App.css';

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
    <>
      <header className='header'>
        <h1>Job Chaser</h1>
      </header>
      <Search jobs={jobs} onSearch={handleSearch} />
      <div className="jobs-container">
        <JobList jobs={filteredJobs} />
      </div>
    </>
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
