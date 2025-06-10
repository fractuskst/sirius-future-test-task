import { ROUTES } from "@/routes/routes";

const getStepFromPath = (pathname: string) => {
  switch (pathname) {
    case ROUTES.upload:
      return 1;
    case ROUTES.questions:
      return 2;
    case ROUTES.result:
      return 3;
    default:
      return 0;
  }
};

export default getStepFromPath;
