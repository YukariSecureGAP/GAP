/**
 * @file 常量
 * @description 导出命名空间
 */
export declare namespace Constants {
  /**
   * @description 图片数据接口
   * @interface ImageInfo
   */
  export interface ImageInfo {
    imageName: string;
    imagePath: string;
  }
  /**
   * @description 漫画数据接口
   * @interface ComicInfo
   */
  export interface ComicInfo {
    comicName: string;
    comicPath: string;
  }

  // router.ts
  export interface RouteInfo {
    path: string;
    element: any;
    children?: RouteInfo[];
  }

  
}

export const LOAD_IMAGE_INFO = 'LOAD_IMAGE_INFO';

export const API_BASE_URL = "http://121.37.17.108:5000";

