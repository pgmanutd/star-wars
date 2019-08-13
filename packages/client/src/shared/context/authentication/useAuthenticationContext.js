import { useState, useMemo, useCallback, useContext } from 'react';
import { getApolloContext } from '@apollo/react-hooks';

import {
  LOCAL_STORAGE_KEYS,
  addKeyToLocalStorage,
  getKeyFromLocalStorage,
  removeKeyFromLocalStorage,
} from 'shared/utils/localStorageUtils';

const useAuthenticationContext = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!getKeyFromLocalStorage(LOCAL_STORAGE_KEYS.token),
  );

  const [userDetails, setUserDetails] = useState(() =>
    getKeyFromLocalStorage(LOCAL_STORAGE_KEYS.user),
  );

  const addAuthenticationDetails = useCallback(({ login: { token, user } }) => {
    if (token) {
      // NOTE: Storing JWTs in localStorage is not a safe approach to implement
      // authentication on the frontend. Because this is a Demo App,
      // we want to keep things simple and therefore are using it here.
      // You can read more about this topic here (https://www.rdegges.com/2018/please-stop-using-local-storage/).
      addKeyToLocalStorage(LOCAL_STORAGE_KEYS.token, token);
      addKeyToLocalStorage(LOCAL_STORAGE_KEYS.user, user);

      setUserDetails(user);
      return setIsAuthenticated(true);
    }

    setUserDetails();
    return setIsAuthenticated(false);
  }, []);

  const { client } = useContext(getApolloContext());

  const removeAuthenticationDetails = useCallback(() => {
    removeKeyFromLocalStorage(LOCAL_STORAGE_KEYS.token);
    removeKeyFromLocalStorage(LOCAL_STORAGE_KEYS.user);

    client.resetStore();

    setUserDetails();
    return setIsAuthenticated(false);
  }, [client]);

  const authenticationContextValue = useMemo(
    () => ({
      isAuthenticated,
      userDetails,
      addAuthenticationDetails,
      removeAuthenticationDetails,
    }),
    [
      isAuthenticated,
      userDetails,
      addAuthenticationDetails,
      removeAuthenticationDetails,
    ],
  );

  return authenticationContextValue;
};

export default useAuthenticationContext;
