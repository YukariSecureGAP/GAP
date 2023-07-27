import { useEffect, useState } from "react";
import { TitleBar } from "../../components";
import { UseMenu } from "./useMenu";
import { List, Badge, Checkbox } from "antd";
import { useLocation } from "react-router-dom";
import Style from "../../assets/Menu/Menu.module.less";
import { AllTypes } from "../../DataTypes/DataType";

const MenuList = () => {
  const location = useLocation();
  const { deskAreaId, deskId } = location.state;
  const neededData = {
    menuClassId:"1001",
    deskId,
    pageIndex: 1,
    pageSize: 100,
  };
  const { getMenu, getMenuType, menu, menuType } = UseMenu();
  const [selectedMenuItems, setSelectedMenuItems] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    getMenu(neededData);
    getMenuType(deskAreaId);
  }, []);

  const swtchMenu = (id: string) => {
    getMenu({ menuClassId: id, deskId, pageIndex: 1, pageSize: 100 });
  };

  const handleSelect = (itemId: string) => {
    setSelectedMenuItems((prevSelectedMenuItems) => ({
      ...prevSelectedMenuItems,
      [itemId]: !prevSelectedMenuItems[itemId],
    }));

  };

  return (
    <>
      <TitleBar titleText="菜单" />
      <div style={{ display: "flex" }}>
        <div>
          <List
            className={Style["food-list"]}
            dataSource={menuType}
            renderItem={(item: AllTypes.FoodType) => (
              <>
                <List.Item
                  style={{ display: "flex", justifyContent: "center" }}
                  onClick={() => swtchMenu(item.menuClassId)}
                >
                  <p>{item.menuClassCaption}</p>
                  <Badge count={item.count} />
                </List.Item>
              </>
            )}
          />
        </div>
        <div>
          <List
            dataSource={menu}
            renderItem={(item: AllTypes.FoodType) => (
              <List.Item>
                <p>{item.menuName}</p>
                <p>{item.menuPrice}/pre</p>
                <p>Status</p>
                <Checkbox
                  checked={selectedMenuItems[item.menuId]}
                  onClick={() => handleSelect(item.menuId)}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default MenuList;
