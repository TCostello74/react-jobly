import React, { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from '../api/api';
import SearchForm from '../common/SearchForm';
import './CompanyList.css';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    search();
  }, []);

  async function search(name) {
    const companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  return (
    <div>
      <SearchForm searchFor={search} />
      {companies.map(company => (
        <CompanyCard key={company.handle} {...company} />
      ))}
    </div>
  );
}

export default CompanyList;



