import React from 'react';
import Organization from './Organization';
import useNetworkResource from '../hooks/useNetworkResource';

const OrganizationContainer = () => {
  const [organizations, fetched] = useNetworkResource('http://localhost:3000/organizations');

  if (!fetched) {
    return null;
  }

  return (
    <div>
      <h1>Organizations</h1>
      {organizations.map(org => (
        <Organization key={org.id} org={org} />
      ))}
    </div>
  );
};

export default OrganizationContainer;
