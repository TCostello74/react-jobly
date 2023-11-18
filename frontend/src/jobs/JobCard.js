import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../auth/UserContext';
import JoblyApi from '../api/api';
import './JobCard.css'; 

function JobCard({ id, title, salary, equity, companyName }) {
  console.log("Job ID:", id);
  const { currentUser } = useContext(UserContext);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    // Check if this job is in the user's applications
    setApplied(currentUser.applications.includes(id));
  }, [id, currentUser.applications]);

  const handleApply = async () => {
    if (!applied) {
      await JoblyApi.applyToJob(currentUser.username, id);
      setApplied(true);
    }
  };

  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p><b>Salary:</b> {salary}</p>
      <p><b>Equity:</b> {equity}</p>
      {companyName && <p><b>Company:</b> {companyName}</p>}
      <button onClick={handleApply} disabled={applied}>
        {applied ? "Applied" : "Apply"}
      </button>
    </div>
  );
}

export default JobCard;

