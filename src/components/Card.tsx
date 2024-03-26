// Card.tsx
import React from 'react';
import { Job } from '../jobService';
import '../index.css'

interface CardProps {
  job: Job;
}

const Card: React.FC<CardProps> = ({ job }) => {
  return (
      <div className='card p-4 w-62 h-80 m-4 bg-primary flex justify-center items-center rounded-lg flex-col hover:cursor-pointer shadow-drop-2-lr'>
        <div className='flex items-center justify-center'>
        <img className='m-2 w-42 h-40' src={job.logo} alt={job.position} />
        </div>
        <div className='m-1 w-72'>
          <div>
            <h2 className='text-xl font-bold'>{job.position}</h2>
          </div>
          <div>
           <h3 className='italic font-bold text-lg'>{job.company}</h3>
          </div>
        <h3>{job.role}</h3>
        <p>Languages: {job.languages.join(', ')}</p>
        <p>Tools: {job.tools.join(', ')}</p>
        </div>
      </div>
  );
};

export default Card;
