import getLogger from 'shared/utils/getLogger';
import prettify from 'shared/utils/prettify';

import { fetchPlanetsDetails } from './planetsRepository';
import { pickQueriedPlanetsDetails } from './planetsDomainService';

const logger = getLogger(module);

export const getPlanetsDetails = async (user, { planetFields, planetName }) => {
  logger.info(
    `Called #getPlanetsDetails with User: ${prettify(user)}, Data: ${prettify({
      planetFields,
      planetName,
    })}`,
  );

  const planetsDetails = await fetchPlanetsDetails({
    planetName,
  });

  logger.info(`Received planets details: ${prettify(planetsDetails)}}`);

  const queriedPlanetsDetails = pickQueriedPlanetsDetails(planetsDetails, {
    planetFields,
  });

  logger.info(`Queried planets details: ${prettify(queriedPlanetsDetails)}}`);

  return queriedPlanetsDetails;
};
