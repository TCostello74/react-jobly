import React from 'react';
import './JobCard.css'; 

function JobCard({ title, salary, equity, companyName }) {
  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p><b>Salary:</b> {salary}</p>
      <p><b>Equity:</b> {equity}</p>
      {companyName && <p><b>Company:</b> {companyName}</p>}
    </div>
  );
}

export default JobCard;
