import React, { memo } from 'react';
import PropTypes from 'prop-types';
import _pathOr from 'lodash/fp/pathOr';

const propTypes = {
  userDetails: PropTypes.object.isRequired,
};

const UserDetails = ({ userDetails, ...rest }) => (
  <span data-testid="UserDetails" {...rest}>
    Hi {_pathOr(null, 'name', userDetails)},
  </span>
);

UserDetails.propTypes = propTypes;

export default memo(UserDetails);
