import { Plan } from "../models/Plan";

export const createPlan = (infoPlan: Plan, router: any) => {
  sessionStorage.setItem("planRimac", JSON.stringify(infoPlan));
  router.push("/gracias");
};
