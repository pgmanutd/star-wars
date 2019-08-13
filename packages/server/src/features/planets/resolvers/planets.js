import { getFieldsProjection } from 'awesome-graphql-utils';

import { getPlanetsDetails } from '../planetsService';

const planets = async (obj, { planetName }, { user }, info) => {
  const planetFields = getFieldsProjection(info.fieldNodes[0]);

  const planetDetails = await getPlanetsDetails(user, {
    planetFields,
    planetName,
  });

  return planetDetails;
};

export default planets;
