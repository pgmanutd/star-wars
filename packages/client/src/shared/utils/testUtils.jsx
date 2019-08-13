import React from 'react';
import { Router } from 'react-router-dom';

/* eslint-disable import/no-extraneous-dependencies */
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
/* eslint-enable import/no-extraneous-dependencies */

export const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => ({
  ...render(<Router history={history}>{ui}</Router>),
  history,
});
