// libraries
import axios from "axios";
import { StatusCodes } from "http-status-codes";

// utils
import { getJWT, clearJWT } from "shared/utils/jwt";

const apiExport = () => {
  const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`
  });

  api.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${getJWT()}`;

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      try {
        if (error.response.status === StatusCodes.UNAUTHORIZED) {
          clearJWT();

          return error.response.data;
        } else if (error.response.status === StatusCodes.CONFLICT) {
          return error.response.data;
        }
      } catch (err) {
        return error;
      }
    }
  );

  return api;
};

export default apiExport;
