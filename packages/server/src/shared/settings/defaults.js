import _memoize from 'lodash/fp/memoize';
import dotenv from 'dotenv';

dotenv.config();

_memoize.Cache = WeakMap;

/* eslint-disable-next-line no-underscore-dangle */
global.__DEV__ = process.env.NODE_ENV !== 'production';
