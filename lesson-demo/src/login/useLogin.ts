import { useCallback, useState, useEffect, useMemo } from "react";
import { getCodeApi } from "../api";
import { LoginAsync } from "../feature/user/userSlice";
import { Constain } from "../datatypes/Constain";
import Cookies from "js-cookie";
import { useAppDispatch } from "../app/hooks";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const [uuid, setUuid] = useState<string>("");
  const [img, setCode] = useState<string>("");

  const handleCode = useCallback(async () => {
    const res: {
      img: string;
      uuid: string;
    } = await getCodeApi();
    const { img, uuid } = res;
    setUuid(uuid);
    setCode(img);
  }, []);

  useEffect(() => {
    handleCode();
  }, []);

  const handleFinish = useCallback(
    async (values: Constain.IloginParams) => {
      const { code, password, rememberMe, username } = values;

      const data: Constain.IloginParams = {
        code,
        password,
        username,
        uuid,
        rememberMe,
      };

      try {
        await dispatch(LoginAsync(data)).unwrap();
        if (rememberMe) {
          Cookies.set("username", username, { expires: 7 });
          Cookies.set("password", password, { expires: 7 });
          Cookies.set("rememberMe", "true", { expires: 7 });
        } else {
          Cookies.remove("username");
          Cookies.remove("password");
          Cookies.remove("rememberMe");
        }
      } catch (error) {
        console.log(error);
      }
    },
    [uuid, dispatch]
  );

  const initialValues = useMemo(() => {
    const username = Cookies.get("username") || "";
    const password = Cookies.get("password") || "";
    const rememberMe = Cookies.get("rememberMe") || "";

    return { username, password, rememberMe };
  }, []);

  useEffect(() => {
    handleCode();
  }, [handleCode]);
  return {
    uuid,
    img,
    handleCode,
    handleFinish,
    initialValues,
  };
};
