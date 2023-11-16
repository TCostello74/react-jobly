import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';

function CompanyCard({ name, description, handle }) {
  return (
    <div className="company-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={`/companies/${handle}`}>View Details</Link>
    </div>
  );
}

export default CompanyCard;
