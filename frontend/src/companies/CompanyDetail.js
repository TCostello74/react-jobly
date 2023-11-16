import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api/api';
import './CompanyDetail.css';

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompanyDetail() {
      const companyDetail = await JoblyApi.getCompany(handle); // Modify as per your API
      setCompany(companyDetail);
    }
    getCompanyDetail();
  }, [handle]);

  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      {/* Display more details about the company here */}
      {/* Optionally list jobs available at this company */}
    </div>
  );
}

export default CompanyDetail;
