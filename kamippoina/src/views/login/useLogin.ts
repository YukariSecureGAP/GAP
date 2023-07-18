import { useCallback, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AllTypes } from "../../DataTypes/DataType";
import { ModalBox } from "../../components/Modal/ModalBox";
export const useLogin = () => {
  const navigate = useNavigate();

  const onFinish = useCallback(
    async (value: AllTypes.saveDataType) => {
      try {
        console.log("works in line 12");
        const { memberId, password, autoLogin } = value;
        console.log(autoLogin)
        const params = new URLSearchParams();
        params.append("memberId", memberId);
        params.append("password", password);
        const res = await axios.post(
          "CateringSystem1.0/recruitment/catering/login.do?method=login",
          params,
          { timeout: 5000 } // Add timeout of 5 seconds
        );
        if (autoLogin) {
          console.log("works in line 25");
          localStorage.setItem("memberId", memberId);
          localStorage.setItem("password", password);
          localStorage.setItem("autoLogin", "1");
        } else {
          localStorage.setItem("autoLogin", "0");
          localStorage.removeItem("memberId");
          localStorage.removeItem("password");
        }
        if (res.data.responseBody.memberId !== "") {
          // if remember me is selected
          navigate("/table");
        } else {
          ModalBox.warning({
            content: "username or password is wrong!",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    [navigate]
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
  const clickFnTest = () => {
    navigate("/table/:id");
  };
  return {
    onFinish,
    initialValues,
    clickFnTest,
  };
};
