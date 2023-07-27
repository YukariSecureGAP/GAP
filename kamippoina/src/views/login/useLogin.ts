import { useCallback, useMemo } from "react";
import { http } from "../../utils/request/request";
import { useNavigate } from "react-router-dom";
import { AllTypes } from "../../DataTypes/DataType";
import { ModalBox } from "../../components/Modal/ModalBox";
import { useAuthContext } from "../../utils";

interface IAuthFn {
  login: () => void;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext() as IAuthFn;
  const onFinish = useCallback(
    async (value: AllTypes.saveDataType) => {
      try {
        //获取用户输入的用户名和密码
        const { memberId, password, autoLogin } = value;
        const params = new URLSearchParams();
        params.append("memberId", memberId);
        params.append("password", password);
        const res:any = await http.post(
          "CateringSystem1.0/recruitment/catering/login.do?method=login",
          params,
          { timeout: 5000 } // Add timeout of 5 seconds
        );

        if (res.responseBody.memberId !== "") {
          // if remember me is selected
          if (autoLogin) {
            localStorage.setItem("memberId", memberId);
            localStorage.setItem("password", password);
            localStorage.setItem("autoLogin", "1");
            navigate("/table");
          } else {
            localStorage.setItem("autoLogin", "0");
            localStorage.removeItem("memberId");
            localStorage.removeItem("password");
          }
          login();
          navigate("/table");
        } else {
          ModalBox.warning({
            content: "username or password is wrong!",
          });
        }
        
      } catch (error) {
        console.error(error);
      }
    },
    [login, navigate]
  );
  const initialValues = useMemo(() => {
    const memberId = localStorage.getItem("memberId");
    const password = localStorage.getItem("password");
    const autoLogin = localStorage.getItem("autoLogin");
    if (autoLogin === "0" || autoLogin == null) {
      return {
        memberId: "",
        password: "",
        autoLogin: false,
      };
    } else {
      return {
        memberId,
        password,
        autoLogin: true,
      };
    }
  }, []);
  return {
    onFinish,
    initialValues,
  };
};
