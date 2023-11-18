// src/jobs/JobList.js
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JoblyApi from '../api/api';
import SearchForm from '../common/SearchForm';
import './JobList.css'; // Style it similarly to CompanyList.css

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    search();
  }, []);

  async function search(title) {
    const jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  return (
    <div>
      <SearchForm searchFor={search} />
      {jobs.map(job => (
        <JobCard
          key={job.id}
          id={job.id} 
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          companyName={job.companyName} // If available
        />
      ))}
    </div>
  );
}

export default JobList;

