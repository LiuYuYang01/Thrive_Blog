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
  [key: string]: {
    type: string;
    list: Link[];
  };
}
