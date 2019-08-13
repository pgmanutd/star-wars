import _pathOr from 'lodash/fp/pathOr';
import _maxBy from 'lodash/fp/maxBy';
import _compose from 'lodash/fp/compose';

const getNumericPopulation = population => Number(population);

export const getMaximumPlanetsPopulation = _compose(
  Number,
  _pathOr(1, 'population'),
  _maxBy(({ population }) => getNumericPopulation(population) || 0),
);

export const getPlanetsListingStyles = ({ population, maximumPopulation }) => {
  const isPopulationPresent = !!getNumericPopulation(population);

  const relativeFontSize = isPopulationPresent
    ? `${population / maximumPopulation}rem`
    : '1rem';

  const className = isPopulationPresent ? null : 'text-danger';

  return {
    relativeFontSize,
    className,
  };
};
