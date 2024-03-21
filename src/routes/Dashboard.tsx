import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet  } from 'react-router-dom';
import { fetchJobs, Job } from '../jobService';


//Components
import Search from '../components/Search';
import Card from '../components/Card'

//CSS
import '../index.css'

function JobList({ jobs }: { jobs: Job[] }) {
    return (
      <>
        {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </>
    );
  }

function Dashboard(){
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
  
    return(
        <>
            <main className='m-2 flex justify-center flex-col '>
                <div className='p-2 flex justify-center items-center'>
                    <h1 className='m-2 text-2xl'>Available Jobs</h1>
                </div>
                <div>
                    <Search jobs={jobs} onSearch={handleSearch} />
                </div>
                <div className="flex justify-center items-center flex-col">
                    <JobList jobs={filteredJobs} />
                </div>
            </main>
        </>
    )
}

export default Dashboard