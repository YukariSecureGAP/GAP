interface DataInfo {
    name: string;
    age?:number; //可选属性
    [propName: string]: unknown; //任意属性
}
enum Securety{
    identify,
    phone,
    email
}
