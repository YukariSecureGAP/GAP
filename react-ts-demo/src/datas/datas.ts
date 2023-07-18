export namespace datas {
    export interface Idata {
      student_name?: string; //姓名
      student_age?: any; //年龄
      student_class?: string; //班级
     
    }
    export interface Iscore{
      Chinese_score: number ; //语文成绩
      Math_score: number ; //数学成绩
      English_score: number; //英语成绩
      Total_score?: number; //总成绩
      Total_average?: number; //总平均成绩
      Chinese_average?: number; //语文平均成绩
      Math_average?: number; //数学平均成绩
      English_average?: number; //英语平均成绩
    }
    export interface Ibool{
      isOpen?: boolean; //是否展开
      isSelect?: boolean; //是否选中
    }
}