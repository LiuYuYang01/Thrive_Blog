export interface Link {
  id?: number;
  title: string;
  description: string;
  email: string;
  image: string;
  url: string;
  type: string;
  date?: string;
}

export interface Cate {
  type: string;
  list: Link[];
  [key: string]: any;
}

export interface Type {
  [key: string]: Cate;
}

// 网站类型
interface LinkType {
  id: number,
  name: string
}