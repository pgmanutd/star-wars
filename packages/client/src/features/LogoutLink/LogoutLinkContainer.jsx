import React, { memo, useContext } from 'react';

import { AuthenticationContext } from 'shared/context/authentication';

import LogoutLink from './LogoutLink';

const LogoutLinkContainer = (props) => {
  const { removeAuthenticationDetails } = useContext(AuthenticationContext);

  return (
    <LogoutLink {...props} onLogoutLinkClick={removeAuthenticationDetails} />
  );
};

export default memo(LogoutLinkContainer);
