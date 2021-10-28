import { http } from "../http/http";

const url = process.env.REACT_APP_URL;

export const UserService = {
  getUser: async (number : string) => {
    try {
      return await http
        .get(`${url}/users/${number}`)
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener getUser");
    }
  },
};
