const baseAPIPath = process.env.BASE_API_PATH;

const apiPaths = {
  getPlanetsDetails: () => `${baseAPIPath}/planets`,
  getUser: () => `${baseAPIPath}/people`,
};

export default apiPaths;
