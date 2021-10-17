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
      const status = error.response.status;

      if (status === StatusCodes.UNAUTHORIZED) {
        clearJWT();

        return error.response.data;
      }

      if (status === StatusCodes.CONFLICT) {
        return error.response.data;
      } else {
        return error;
      }
    }
  );

  return api;
};

export default apiExport;
