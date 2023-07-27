import { useDashBoard } from "./useDash";
import * as echarts from 'echarts';
import { useRef,useEffect } from "react";
const DashBoard = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const {visits,chartData} = useDashBoard();
    


    return(
        <div>

           
        </div>
    )
}