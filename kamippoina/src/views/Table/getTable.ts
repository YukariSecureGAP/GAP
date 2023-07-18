import axios from "axios";
import { useCallback, useState } from "react";

export const useTable = () => {
  // url:CateringSystem1.0/recruitment/catering/qryDeskArea.do?method=login，method:get
  /**
   * deskAreaCaption: "一楼"
   * deskAreaId: "1001"
   * sn: "1"
   */
  const [tableData, setTableData] = useState([]);
  //url:CateringSystem1.0/recruitment/catering/qryDeskTopList.do?method=login ，method:post,param:deskAreaId:   数字类型
  /**
   * deskTopList:[{
   * callingNumber: ""
   *createTime: "2015-04-16 22:18:23"
   *description: ""
   *deskAreaCaption: "一楼"
   *deskAreaId: "1001"
   *deskCaption: "一楼一号台"
   *deskId: "1001001"
   *deskStatus: "2"
   *memberId: "1234"
   *memberName: "小王"
   *menuCount: "13"
   *menuItemSpecialRequestDescription: ""
   *payTime: ""
   *peopleNumber: 0
   *prepaidPay: 0
   *seatNumber: 0
   *servedCount: "8"
   *totalAmount: "254.000000"}
   *]
   */
  const [tableInfo, setTableInfo] = useState({});
  const onLoadTable = useCallback(async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/shop",
      );
      setTableData(res.data.responseBody);
      console.log(tableData);
      // next request
      const res2 = await axios.post(
        // "CateringSystem1.0/recruitment/catering/qryDeskTopList.do?method=login",
        "http://localhost:3000/deskArea",
        { deskAreaId: res.data.responseBody[1].id }
      );
      setTableInfo(res2.data.responseBody);
      console.log(tableInfo);
    } catch (error) {
      console.log(error);
    }
  }, [tableData, tableInfo]);
  return {
    onLoadTable,
    tableData,
    tableInfo,
  };
};
