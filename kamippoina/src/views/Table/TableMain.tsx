/**
 * @file TableMain.tsx
 * @desc TableMain Component
 * 通过接受deskAreaId来获取对应的数据
 * deskAreaId判断渲染的是哪个餐台
 */

import { List } from "antd";
import { AllTypes } from "../../DataTypes/DataType";
import Style from "../../assets/Table/Table.module.less";
import { useNavigate } from "react-router-dom";

export const TableMain = ({
  AreaId,
  tableInfo,
}: {
  AreaId: string;
  tableInfo: AllTypes.Order[];
}) => {
  const tableData = tableInfo.filter((item) => item.deskAreaId === AreaId);
  
  const navigate = useNavigate();
  //点击餐台跳转到菜单页面，将foodId、deskAreaId和deskId传递过去
  const handleClick = (index: any) => {
    const { deskAreaId, deskId} = tableData[index];
    
    navigate("/menu", {
      state: {
        deskAreaId,
        deskId,
      },
    });
  };

  return (
    <div>
      <List
        grid={{
          gutter: 16,
          column: 3,
        }}
        dataSource={tableData}
        renderItem={(item: AllTypes.Order, index) => (
          <List.Item id={item.deskAreaId} onClick={() => handleClick(index)}>
            {item.deskAreaId === AreaId && item.deskStatus === "2" ? (
              <div className={Style["resStyle"]}>
                <p>
                  {item.totalAmount === "" ? (
                    <span style={{ color: "red" }}>0元</span>
                  ) : (
                    <span style={{ color: "red" }}>{item.totalAmount}元</span>
                  )}
                </p>
                <p style={{ textAlign: "center", fontWeight: "b" }}>
                  {item.deskCaption}
                </p>
                <p>{item.payTime}</p>
              </div>
            ) : (
              <div className={Style["tableStyle"]}>
                <p></p>
                <p style={{textAlign:"center"}}>未开台</p>
                <p></p>
              </div>
            )}
          </List.Item>
        )}
      />
    </div>
  );
};
