import { UserService } from "../../infrastructure/repositories/User.repository";
import { User } from "../models/User";

export const signInUser = async (infoUser: User, router: any) => {
  const response = await UserService.getUser(infoUser.dni);
  const { name, email }: any = response;
  if (name) {
    sessionStorage.setItem(
      "userRimac",
      JSON.stringify({
        ...infoUser,
        name,
        email,
      })
    );
  } else {
    sessionStorage.setItem(
      "userRimac",
      JSON.stringify({
        ...infoUser,
        name: "Juan",
        email: "joel.sanchez@gmail.com",
      })
    );
  }
  router.push("/arma-plan");
};
