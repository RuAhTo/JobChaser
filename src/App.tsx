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
    fetchData
  }, []);
  
  return (
    <>
    <Search jobs={jobs}/>
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
}

function Card(){

}
export default App
