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
    <form className='p-2 m-2 flex justify-center items-center' onSubmit={handleSearch}>
      <input
        className='border-2 border-primary rounded-lg w-52 m-2 p-1'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="search-input"
      />
      <button className='m-2 w-24 p-2 bg-secondary rounded-xl' type="submit">Search</button>
    </form>
  );
};

export default Search;
