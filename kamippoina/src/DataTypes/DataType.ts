export namespace AllTypes {
  //登录返回的失败信息
  export type loginType = {
    errCode: string;
    errMsg: string;
    responseBody: {
      leaveDate: string;
      loginTime: string;
      logoutTime: string;
      memberDescription: string;
      memberId: string;
      memberName: string;
      password: string;
      security: string;
      securityId: string;
      sex: string;
      workDate: string;
    };
  };
  //是否保存密码和自动登录
  export type saveDataType = {
    memberId: string;
    password: string;
    autoLogin: boolean;
  };
  export type TitleBar = {
    titleText: string;
  };
  export interface ModalContent {
    title?: string;
    content: string;
    okText?: string;
  }
}
