import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routePaths from 'shared/settings/routePaths';

const propTypes = {
  onLogoutLinkClick: PropTypes.func.isRequired,
};

const LogoutLink = ({ onLogoutLinkClick, ...rest }) => (
  <Link
    data-testid="LogoutLink"
    {...rest}
    to={routePaths.login}
    onClick={onLogoutLinkClick}
  >
    Logout
  </Link>
);

LogoutLink.propTypes = propTypes;

export default memo(LogoutLink);
