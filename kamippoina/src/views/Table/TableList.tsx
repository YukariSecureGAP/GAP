// import { useTable } from "./getTable";
import { useAuthContext } from "../../utils";
import Style from "../../assets/Table/Table.module.less";
import { TableHeader } from "./TableHeader";
import { TitleBar } from "../../components";

interface IAuthFn {
  auth: boolean;
  logout: () => void;
}

const TableList: React.FC = () => {
  const { logout } = useAuthContext() as IAuthFn;

  return (
    <>
      <div className={Style["root"]}>
        <TitleBar titleText="餐台" />
        <TableHeader />
        <button
          onClick={() => logout()}
          style={{
            position: "absolute",
            bottom: "0",
            right: "-1",
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};
export default TableList;
