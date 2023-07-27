import { Constain } from "../datatypes/Constain";
import { useState, useEffect } from "react";
import { getVisiter, geChartData } from "../api/dashboard";

export const useDashBoard = () => {
  const [visits, setVisits] = useState<Constain.VisitsRes>({
    newIp: 0,
    newVisits: 0,
    recentIp: 0,
    recentVisits: 0,
  });

  const [chartData, setChartData] = useState<Constain.ChartData>({
    ipData: [],
    visitsData: [],
    weekDays: [],
  });
  useEffect(() => {
    getVisiter().then((res) => {
      setVisits(res);
    });
    geChartData().then((res) => {
      setChartData(res);
    });
  }, []);

  return {
    visits,
    chartData
  }
};
