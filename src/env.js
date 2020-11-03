let baseURL;
switch (process.env.NODE_ENV) {
  case "development":
    baseURL = "";
    break;
  case "test":
    baseURL = "";
    break;
  case "production":
    baseURL = "";
    break;
  default:
    baseURL = "";
    break;
}

export default {
  baseURL,
};
