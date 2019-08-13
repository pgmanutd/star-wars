import _pick from 'lodash/fp/pick';

export const pickQueriedPlanetsDetails = (planetsDetails, { planetFields }) =>
  planetsDetails.map(_pick(planetFields));
