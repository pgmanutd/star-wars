import axios from 'axios';

import apiPaths from 'shared/settings/apiPaths';

export const fetchUserDetails = async ({ username }) => {
  const {
    data: { results },
  } = await axios.get(apiPaths.getUser(), {
    params: {
      search: username,
    },
  });

  return results;
};
