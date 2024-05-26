import { baseModule } from "./config";

const APIS = {
  login: (body) => {
    return baseModule.post("/auth/login", body);
  },
  register: (body) => {
    return baseModule.post("/auth/register", body);
  },
};

export default APIS;
