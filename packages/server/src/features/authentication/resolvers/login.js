import { getFieldsProjection } from 'awesome-graphql-utils';

import { loginUser } from '../authenticationService';

import { User } from '../types';

const login = async (obj, { username, password }, { user }, info) => {
  const userFields = Object.keys(User.getFields());
  const authenticatedUserDetailsFields = getFieldsProjection(
    info.fieldNodes[0],
  );

  const loginUserDetails = await loginUser(user, {
    userFields,
    authenticatedUserDetailsFields,
    username,
    password,
  });

  return loginUserDetails;
};

export default login;
