import React, { memo, useContext } from 'react';

import { AuthenticationContext } from 'shared/context/authentication';

import UserDetails from './UserDetails';

const UserDetailsContainer = props => {
  const { userDetails } = useContext(AuthenticationContext);

  return <UserDetails {...props} userDetails={userDetails} />;
};

export default memo(UserDetailsContainer);
