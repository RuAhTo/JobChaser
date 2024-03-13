import { useState, useEffect } from 'react'
import { fetchJobs, Job } from './jobService'

import './App.css'

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const jobsData = await fetchJobs()
        setJobs(jobsData);
      } catch(error){
        console.error('Error fetching data:', error)
      }
    };
    fetchData();
  }, []);
  
  return (
    <>
    <h1>Job Chaser</h1>
    <Search jobs={jobs}/>
    {jobs.map(job => (
        <Card key={job.id} job={job} />
    ))}
    </>
  )
}

function Search({ jobs }: {jobs: Job[]}){
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    const filtered = jobs.filter((job) => {
      const { company, position, location, languages, tools} = job;
      const jobData = [company, position, location, ...languages, ...tools].join(' ').toLowerCase();
      return jobData.includes(query)
    })
    setFilteredJobs(filtered)
  }
  return(
    <>
    <form onSubmit={handleSearch}>
      <label>Search Jobs</label>
      <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} 
      type="text" id="search-input"/>
      <button type="submit">Search</button>
    </form>
    </>
  )
}

function Card({job}: {job:Job}){
  return(
    <>
    <div className="card">
    <h1>{job.position}</h1>
    </div>
    </>
  )
}
export default App
