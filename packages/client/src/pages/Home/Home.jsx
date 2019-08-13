import React, { memo } from 'react';

import Title from 'shared/components/Title';

import SearchPlanets from 'features/SearchPlanets';
import UserDetails from 'features/UserDetails';
import LogoutLink from 'features/LogoutLink';

const Home = () => (
  <section data-testid="Home">
    <div className="row">
      <div className="col-8">
        <Title size="small">Home</Title>
      </div>
      <div className="col-4">
        <UserDetails /> <LogoutLink />
      </div>
    </div>
    <SearchPlanets />
  </section>
);

export default memo(Home);
