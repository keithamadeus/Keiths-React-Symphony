import React from 'react';
import { Link } from 'react-router-dom';
// import { Projects } from '';
import './Card.css';

interface CardProps {
  event: Event;
}

const Card: React.FC<CardProps> = ({ event }) => {
  return (
    <div className="card">
      <h2>{}</h2>
      <p><strong>Date:</strong> {}</p>
      <p><strong>Location:</strong> {}</p>
      <p><strong>Description:</strong> <br/> {}</p>
      <Link to={``}>View Details</Link>
    </div>
  );
};

export default Card;