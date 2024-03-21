// Card.tsx
import React from 'react';
import { Job } from '../jobService';
import '../index.css'

interface CardProps {
  job: Job;
}

const Card: React.FC<CardProps> = ({ job }) => {
  return (
      <div className='card p-6 m-2 w-6/12 min-w-600 bg-primary flex rounded-lg'>
        <div className='flex items-center justify-center'>
        <img className='p-1 w-40 h-38 min-w-40' src={job.logo} alt={job.position} />
        </div>
        <div className='p-2 m-2'>
        <h2 className='text-xl'>{job.position}</h2>
        <h3 className='text-lg'>{job.company}</h3>
        <h3>{job.role}</h3>
        <p>Languages: {job.languages.join(', ')}</p>
        <p>Tools: {job.tools.join(', ')}</p>
        </div>
      </div>
  );
};

export default Card;
