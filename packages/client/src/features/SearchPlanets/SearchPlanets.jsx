import React, { memo, useState, useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import _pathOr from 'lodash/fp/pathOr';
import _debounce from 'lodash/fp/debounce';

import { GET_PLANETS } from './graphql/queries';

import { PLANET_NAME_SEARCH_DEBOUNCE_TIMEOUT } from './searchPlanetsConstants';
import {
  getMaximumPlanetsPopulation,
  getPlanetsListingStyles,
} from './searchPlanetsUtils';

const SearchPlanets = (props) => {
  const [planetName, setPlaneName] = useState('');
  const [getPlanets, { loading, error, data }] = useLazyQuery(GET_PLANETS);

  const debouncedGetPlanets = useCallback(
    _debounce(PLANET_NAME_SEARCH_DEBOUNCE_TIMEOUT, getPlanets),
    [],
  );

  const handlePlanetNameChange = useCallback(
    (event) => {
      const newPlanetName = event.target.value;

      setPlaneName(newPlanetName);

      const trimmedNewPlanetName = newPlanetName.trim();

      if (trimmedNewPlanetName) {
        debouncedGetPlanets({
          variables: {
            planetName: trimmedNewPlanetName,
          },
        });
      }
    },
    [debouncedGetPlanets],
  );

  const hidePlanets = loading || error;
  const planets = _pathOr([], 'planets', data);
  const maximumPopulation = getMaximumPlanetsPopulation(planets);

  return (
    <section data-testid="SearchPlanets" className="mt-5" {...props}>
      <section className="input-group mb-5">
        <input
          type="text"
          className="form-control col-12"
          placeholder="Planet Name"
          aria-label="Planet Name"
          value={planetName}
          onChange={handlePlanetNameChange}
        />
      </section>
      <section>
        {loading && (
          <div className="d-flex">
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {error && <p className="text-danger">${error.message}</p>}
        {!hidePlanets && planets.length === 0 && (
          <p className="text-info">No data available</p>
        )}
        {!hidePlanets && planets.length > 0 && (
          <ul>
            {planets.map(({ name, population }) => {
              const { relativeFontSize, className } = getPlanetsListingStyles({
                population,
                maximumPopulation,
              });

              return (
                <li
                  key={name}
                  style={{ fontSize: relativeFontSize }}
                  className={className}
                >
                  {name} has {population} population
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </section>
  );
};

export default memo(SearchPlanets);
