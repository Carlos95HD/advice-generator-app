import { advicesApi } from "../api/advicesApi";
import { advice } from "../types/adviceTypes";

export const fetchAdvise = async (): Promise<advice> => {
  return await advicesApi
    .get("/advice")
    .then((resp) => {
      if (resp.status === 200) {
        return resp.data.slip;
      } else {
        return {
          id: 0,
          advice: "Error try later",
        };
      }
    })
    .catch(function (error) {
      if (error.response) {
        return {
          id: 0,
          advice: "Error try later",
        };
      } else if (error.request) {
        return {
          id: 0,
          advice: "Error try later",
        };
      } else {
        return {
          id: 0,
          advice: "Error try later",
        };
      }
    });
};
