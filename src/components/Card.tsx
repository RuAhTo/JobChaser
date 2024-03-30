// Card.tsx
import React from 'react';
import { Job } from '../jobService';
import '../index.sass'

interface CardProps {
  job: Job;
}

const Card: React.FC<CardProps> = ({ job }) => {
  return (
      <div>
        <div>
        <img alt={job.position} />
        </div>
        <div>
          <div>
            <h2>{job.position}</h2>
          </div>
          <div>
           <h3>{job.company}</h3>
          </div>
        <h3>{job.role}</h3>
        <p>Languages: {job.languages.join(', ')}</p>
        <p>Tools: {job.tools.join(', ')}</p>
        </div>
      </div>
  );
};

export default Card;
