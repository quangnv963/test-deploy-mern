export interface IProducts {
    id:number;
    name:string;
    img: string;
    desc:string;
}

export interface IUsers {
    email:string;
    name:string;
    password:string;
    id:number;
    role:number
}

export interface INews {
    id:number;
    title:string;
    content:string;
    img:string;
    date:string
}