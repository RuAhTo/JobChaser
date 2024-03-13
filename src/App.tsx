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
      <h1>Job Chaser</h1>
      <Search jobs={jobs} onSearch={handleSearch} />
      <JobList jobs={filteredJobs} />
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
      <form onSubmit={handleSearch}>
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
        <h1>{job.position}</h1>
        <h2>{job.company}</h2>
        <h3>{job.role}</h3>
      </div>
    </>
  );
}

export default App;
