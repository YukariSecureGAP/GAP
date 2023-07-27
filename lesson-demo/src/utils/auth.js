import Cookies from "js-cookie";

const TokenKet = "YZ-SYS-TOKEN";

export function getToken() {
  return Cookies.get(TokenKet);
}

export function setToken(token, rememberMe) {
  if (rememberMe) {
    // 选择记住我, token 保存一天
    return Cookies.set(TokenKet, token, { expires: 1 });
  } else {
    // 不选择记住我, token 马上失效
    return Cookies.set(TokenKet, token);
  }
}

export function removeToken() {
  return Cookies.remove(TokenKet);
}
