import parseJSON from './parseJSON';

export const LOCAL_STORAGE_KEYS = {
  token: 'star-wars:token',
  user: 'star-wars:user',
};

export const removeKeyFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const addKeyToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getKeyFromLocalStorage = (key) => {
  return parseJSON(localStorage.getItem(key));
};
