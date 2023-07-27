import { http } from "../utils";
import { Constain } from "../datatypes/Constain";

export const getCodeApi: () => Promise<{
  img: string;
  uuid: string;
}> = () => {
  return http({
    method: "get",
    url: "auth/code",
  });
};
export const loginApi = (data: Constain.IloginParams) => {
  return http({
    method: "post",
    url: "auth/login",
    data,
  });
};
