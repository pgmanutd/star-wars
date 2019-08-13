export const HTTP_SUCCESS = {
  status: 200,
  code: 'SUCCESS',
  message: 'Success',
};

export const UNAUTHENTICATED = {
  status: 401,
  code: 'UNAUTHENTICATED',
  message: 'Authentication error',
};

export const HTTP_NOT_FOUND = {
  status: 404,
  code: 'NOT_FOUND',
  message: 'Not Found',
};

export const HTTP_INTERNAL_SERVER_ERROR = {
  status: 500,
  code: 'INTERNAL_SERVER_ERROR',
  message: 'Some error occurred on server',
};

export const SERVICE_UNAVAILABLE = {
  status: 503,
  code: 'SERVICE_UNAVAILABLE',
  message: 'Server might be busy or down',
};
