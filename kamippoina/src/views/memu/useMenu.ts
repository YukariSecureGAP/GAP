/**
 * @description メニュー画面
 * @module views/memu/useMenu
 * @FoodType CateringSystem1.0/recruitment/catering/qryMenuListByDesk.do?method=login
 * @MenuType CateringSystem1.0/recruitment/catering/qryMenuClassList.do?method=login
 */

import { http } from "../../utils/request/request";
import { useCallback, useState } from "react";
// メニュー画面のAPIを叩く
export const UseMenu = () => {
  const [menu, setMenu] = useState<any>([]);
  const [menuType, setMenuType] = useState<any>([]);

  // メニュー画面のAPIを叩く
  const getMenu = useCallback(async (formData: any) => {
    try {
      const res: any = await http.post(
        "CateringSystem1.0/recruitment/catering/qryMenuListByDesk.do?method=login",
        formData
      );
      setMenu(res.responseBody.menuList);
    } catch (err) {}
  }, []);
  // メニュー画面のAPIを叩く
  const getMenuType = useCallback(async (id: any) => {
    try {
      const res: any = await http.post(
        "CateringSystem1.0/recruitment/catering/qryMenuClassList.do?method=login",
        { deskId: id }
      );
      setMenuType(res.responseBody.menuClassList);
    } catch (err) {}
  }, []);

  return { getMenu, getMenuType, menu, menuType };
};
