import axios from 'axios';

import apiPaths from 'shared/settings/apiPaths';

export const fetchPlanetsDetails = async ({ planetName }) => {
  const {
    data: { results },
  } = await axios.get(apiPaths.getPlanetsDetails(), {
    params: {
      search: planetName,
    },
  });

  return results;
};
