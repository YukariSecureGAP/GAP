// api.ts

import axios from "axios";
import { Constants } from "./constants";
const API_BASE_URL = "http://121.37.17.108:5000/api";
const REG_LOGIN_URL = "http://121.37.17.108:9090/";

// 封装通用的GET请求方法
const get = async <T>(url: string, params?: any): Promise<T> => {
  try {
    const response = await axios.get<T>(url, { params });
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
};

// 获取所有图片的路径信息
export const getAllImages = async (): Promise<Constants.ImageInfo[]> => {
  const images = await get<Constants.ImageInfo[]>(`${API_BASE_URL}/images`);
  return images;
};

// 获取所有漫画的路径信息
export const getAllComics = async (): Promise<Constants.ComicInfo[]> => {
  const comics = await get<Constants.ComicInfo[]>(`${API_BASE_URL}/comics`);
  console.log(comics);

  return comics;
};

// 注册
export const Register = async (
  username: string,
  password: string,
  authorization: string,
  userAccount: string
): Promise<any> => {
  try {
    const response = await axios.post(
      REG_LOGIN_URL + "register",
      {
        username,
        password,
        authorization,
        userAccount,
      },
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    return response;
  } catch (error) {
    console.error("Error in Register:", error);
    throw error;
  }
};

export const Login = async (
  username: string,
  password: string,
  userAccount: string
): Promise<any> => {
  try {
    // if (username === "" || password === "" || userAccount === "") {
    //   return null;
    // }
    const response = await axios.post(
      // REG_LOGIN_URL + "login",
      "http://localhost:9090/login",
      {
        username,
        password,
        userAccount,
      },
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    return response;
  } catch (error) {
    console.error("Error in Register:", error);
    throw error;
  }
};
