import { useState, useEffect } from 'react';
import { fetchJobs, Job } from '../jobService';


//Components
import Search from '../components/Search';
import Card from '../components/Card'

//CSS
import '../index.sass'

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
            <main>
                  <div>
                      <h1>Available Jobs</h1>
                  </div>
                  <div>
                      <Search jobs={jobs} onSearch={handleSearch} />
                  </div>
                  <div>
                      <JobList jobs={filteredJobs} />
                  </div>
            </main>
        </>
    )
}

export default Dashboard