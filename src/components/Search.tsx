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
    <form className='search-form' onSubmit={handleSearch}>
      <label>Search Jobs</label>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="search-input"
      />
      <button className='' type="submit">Search</button>
    </form>
  );
};

export default Search;
