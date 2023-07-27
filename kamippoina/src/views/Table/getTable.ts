import { http } from "../../utils/request/request";
import { useCallback, useEffect, useState } from "react";
// 将tableInfo的请求提取出来，获取的数据放在tableInfo中，每次点击楼层时，将tableInfo中的数据替换成对应楼层的数据
export const asyncTableInfo = async () => {
  const res:any = await http.post(
    "CateringSystem1.0/recruitment/catering/qryDeskTopList.do?method=login"
  );
  return res.responseBody.deskTopList;
};
//获取后台的数据并返回
export const useTable = () => {
  const [tableData, setTableData] = useState([]);
  const [tableInfo, setTableInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //处理日期和金额的小数点，并将处理后的数据放在tableInfo中
  const removeDot = (tableInfo: any) => {
    tableInfo.map((item: any) => {
      // 将totalAmount小数点后面的内容去掉
      item.totalAmount = item.totalAmount.split(".")[0];
      //保留时间的时分 12-17位
      if (item.payTime.length > 16) {
        item.payTime = item.payTime.slice(11, 16);
      }
    });
    setTableInfo(tableInfo);
    return tableInfo;
  };
  //获取楼层的数据
  const fetchTableData = useCallback(async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const response:any = await http.get(
        "CateringSystem1.0/recruitment/catering/qryDeskArea.do?method=login"
      );
      setTableData(response.responseBody.deskAreaList);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, []);
  //获取tableInfo的数据，并将小数点处理后放在tableInfo中
  useEffect(() => {
    asyncTableInfo().then((res) => {
      removeDot(res);
    });
    fetchTableData();
  }, []);

  return { tableData, isLoading, tableInfo };
};
