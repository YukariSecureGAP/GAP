import { useTable } from "./getTable";
import { useEffect } from "react";

export const TableList: React.FC = () => {
  const { onLoadTable, tableData, tableInfo } = useTable();
  useEffect(() => {
    console.log('works')
    const fetchData = async () => {
      if (!tableData || !tableInfo) {
        await onLoadTable();
      }
    };
    fetchData();
  }, [onLoadTable, tableData, tableInfo]);

  return (
    <div>
      <h1>TableList</h1>
    </div>
  );
};
