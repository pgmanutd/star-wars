import queries from './queries';
import mutations from './mutations';
import resolvers from './resolvers';

import * as repositories from './authenticationRepository';
import * as domainServices from './authenticationDomainService';

export default {
  queries,
  mutations,
  resolvers,
  repositories,
  domainServices,
};
