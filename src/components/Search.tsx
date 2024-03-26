// Search.tsx
import React, { useState } from 'react';
import { Job } from '../jobService';
import '../index.css'
interface SearchProps {
  jobs: Job[];
  onSearch: (filteredJobs: Job[]) => void;
}

const Search: React.FC<SearchProps> = ({ jobs, onSearch }) => {
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
    <form className='w-102 h-16 p-1 m-2 flex justify-center items-center border-primary border-2 rounded-3xl' onSubmit={handleSearch}>
      <input
        className=' border-primary rounded-lg w-52 m-2 p-1'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="search-input"
      />
      <button className='m-2 p-1 bg-secondary rounded-3xl flex justify-center items-center' type="submit"><img className='w-5 m-2' src="./assets/magnifying-glass.png" alt="magnifying glass" /></button>
    </form>
  );
};

export default Search;
