import { useState, useEffect } from 'react';
import { fetchJobs, Job } from './jobService';
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

function Search({ jobs, onSearch }: { jobs: Job[]; onSearch: (filteredJobs: Job[]) => void }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    const filtered = filterJobs(jobs, query);
    onSearch(filtered);
  };

  const filterJobs = (jobs: Job[], query: string): Job[] => {
    return jobs.filter((job) => {
      const { company, position, location, languages, tools } = job;
      const jobData = [company, position, location, ...languages, ...tools].join(' ').toLowerCase();
      return jobData.includes(query);
    });
  };

  return (
    <>
      <form className='search-form' onSubmit={handleSearch}>
        <label>Search Jobs</label>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="search-input"
        />
        <button type="submit">Search</button>
      </form>
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

function Card({ job }: { job: Job }) {
  return (
    <>
      <div className="card">
        <img src={job.logo} alt={job.position} />
        <h2>{job.position}</h2>
        <h3>{job.company}</h3>
        <h3>{job.role}</h3>
        <p>{job.languages}</p>
        <p>{job.tools}</p>
      </div>
    </>
  );
}

export default App;
