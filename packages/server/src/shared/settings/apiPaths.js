const apiPaths = {
  getPlanetsDetails: () => process.env.PLANETS_API_PATH,
  getUser: () => process.env.USER_API_PATH,
};

export default apiPaths;
