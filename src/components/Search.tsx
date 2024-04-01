// Search.tsx
import React, { useState } from 'react';
import { Job } from '../jobService';
import '../scss/index.scss'
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
    <form onSubmit={handleSearch}>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="search-input"
      />
      <button type="submit"><img src="./assets/magnifying-glass.png" alt="magnifying glass" /></button>
    </form>
  );
};

export default Search;
