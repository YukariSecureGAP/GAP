export namespace Constain {
  export interface IloginParams {
    code: string;
    password: string;
    username: string;
    uuid: string;
    rememberMe: boolean;
  }

  export interface IuserState {
    token: () => void;
    user: any;
    roles: string[];
  }

  export interface IinitialState {
    token?: () => void;
    user: null;
    roles: [];
  }
  export interface VisitsRes {
    newIp: number;
    newVisits: number;
    recentIp: number;
    recentVisits: number;
  }

  export interface ChartData {
    ipData: number[];
    visitsData: number[];
    weekDays: string[];
  }
}
