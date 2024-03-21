// Card.tsx
import React from 'react';
import { Job } from '../jobService';
import '../index.css'

interface CardProps {
  job: Job;
}

const Card: React.FC<CardProps> = ({ job }) => {
  return (
      <div className='p-2 m-4 h-52 bg-primary flex justify-center items-center rounded-lg'>
        <div className='flex items-center justify-center'>
        <img className='m-2 p-2' src={job.logo} alt={job.position} />
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
