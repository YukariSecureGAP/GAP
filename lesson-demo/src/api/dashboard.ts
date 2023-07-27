import { http } from "../utils";
import { Constain } from "../datatypes/Constain";

export const getVisiter: () => Promise<Constain.VisitsRes> = () => {
  return http({
    method: "get",
    url: "api/visits",
  });
};

export const geChartData: () => Promise<Constain.ChartData> = () => {
    return http({
      method: "get",
      url: "api/visits/chartData",
    });
  };
  
  