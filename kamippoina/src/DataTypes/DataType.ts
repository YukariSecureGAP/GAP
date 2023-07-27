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
  export type DeskAreaList = {
    deskAreaCaption: string;
    deskAreaId: string;
    sn: string;
  };
  export type Order = {
    deskAreaCaption: string;
    deskAreaId: string;
    deskCaption: string;
    totalAmount: string;
    payTime: string;
    deskId: string;
    deskStatus: string;
  };
  export interface Menu {
    menuClassId: number;
    deskId: number;
    pageIndex?: number;
    pageSize?: number;
  }
  export type deskId = {
    deskId: string | number;
  };
  export type deskAreaId = {
    deskAreaId: number;
  };
  export interface FloorItem {
    deskAreaCaption: string;
    deskAreaId: string;
    sn: string;
  }
  export interface DeskItem {
    callingNumber: string;
    createTime: string;
    description: string;
    deskAreaCaption: string;
    deskAreaId: string;
    deskCaption: string;
    deskId: string;
    deskStatus: string;
    memberId: string;
    memberName: string;
    menuItemSpecialRequestDescription: string;
    payTime: string;
    peopleNumber: number;
    prepaidPay: number;
    seatNumber: number;
    totalAmount: string;
  }
  export interface FoodType{
    menuName: string;
    menuClassCaption: string;
    menuId: string;
    menuPrice:number
    menuClassId: string;
    selected: boolean;
    count: string;
  }
}
