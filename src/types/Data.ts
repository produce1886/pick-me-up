type DataProps = {
  type: "project" | "portfolio";
  title: string;
  name: string;
  profileImage: string;
  category: string;
  huntingField: string;
  region: string;
  projectCategory: string;
  createdDate: string;
  content: string;
  image: string;
  id: number;
  commentsNum: number;
  viewNum: number;
  projectTag: Tag[];
  portfolioTag: Tag[];
  user: User;
  comments: Comment[];
};

export type User = {
  id: number;
  username: string;
  email: string;
  image: string;
};

export type Tag = {
  id: number;
  tag: string;
};

export type Comment = {
  createdDate: string;
  modifiedDate: string;
  id: number;
  content: string;
  email: string;
  user: {
    id: number;
    username: string;
    email: string;
    image: string;
  };
};

export default DataProps;
