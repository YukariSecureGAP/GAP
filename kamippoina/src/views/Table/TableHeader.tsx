/**
 * @file TableHeader.tsx
 * @desc TableHeader Component
 */
import { useState } from "react";
import { Card, List } from "antd";
import { AllTypes } from "../../DataTypes/DataType";
import Style from "../../assets/Table/Table.module.less";
import { TableMain } from "./TableMain";
import { useTable, asyncTableInfo } from "./getTable";

export const TableHeader = () => {
  const { tableData, tableInfo } = useTable();
  const a = [...tableData];
  const b = [...tableInfo];
  const [id, setId] = useState("1001" as string);
  // 通过点击函数将deskAreaId传到子组件，显示对应id的内容
  const handleClick = (e: any) => {
    e.preventDefault();
    // 点击一次请求一次
    let element = e.target;
    while (element && element.parentNode) {
      element = element.parentNode;
      if (element.id) {
        setId(element.id);
        asyncTableInfo();
        break;
      }
    }
  };
  return (
    <div style={{ width: "550px" }}>
      <List
        grid={{
          gutter: 1,
          column: 6,
        }}
        style={{ position: "absolute" }}
        dataSource={a}
        renderItem={(item: AllTypes.DeskAreaList) => (
          <List.Item id={item.deskAreaId} onClick={handleClick}>
            <Card
              title={item.deskAreaCaption}
              bordered={false}
              bodyStyle={{ display: "none" }}
              className={Style["card"]}
              headStyle={{
                textAlign: "center",
                color: "#fff",
                borderRadius: "0",
              }}
            ></Card>
          </List.Item>
        )}
      />
      <div className={Style["MainInfo"]}>
        <TableMain AreaId={id} tableInfo={b} />
      </div>
    </div>
  );
};
