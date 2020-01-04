import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import User from './User';
import Loader from './Loader';
import useNetworkResource from '../hooks/useNetworkResource';

function UserContainer({ onLogout, currentUser, match }) {
  const { user_id: userId } = match.params;

  const [user, fetched, { error, forceRetry }] = useNetworkResource(
    `http://localhost:3000/volunteers/${userId}`,
  );

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  if (error) {
    return (
      <div>
        Sorry an error occurred. <button onClick={forceRetry}>retry</button>
      </div>
    );
  }

  if (!fetched) {
    return <Loader />;
  }

  return (
    <div>
      <User user={user} onLogout={onLogout} />
    </div>
  );
}

export default UserContainer;
