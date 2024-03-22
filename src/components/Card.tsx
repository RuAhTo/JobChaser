// Card.tsx
import React from 'react';
import { Job } from '../jobService';
import styles from '../modules/card.module.css'

interface CardProps {
  job: Job;
}

const Card: React.FC<CardProps> = ({ job }) => {
  return (
    <div className={styles.card}>
      <img src={job.logo} alt={job.position} />
      <h2>{job.position}</h2>
      <h3>{job.company}</h3>
      <h3>{job.role}</h3>
      <p>Languages: {job.languages.join(', ')}</p>
      <p>Tools: {job.tools.join(', ')}</p>
    </div>
  );
};

export default Card;
