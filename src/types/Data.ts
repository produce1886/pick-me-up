/* eslint-disable camelcase */
type DataProps = {
  page: "project" | "portfolio";
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
  id: string;
  commentsNum: number;
  viewNum: number;
  projectTag: Tag[];
  portfolioTag: Tag[];
  user: User;
  comments: Comment[];
};

export type User = {
  id: string;
  username: string;
  email: string;
  image: string;
};

export type Tag = {
  id: string;
  tag: string;
};

export type Comment = {
  createdDate: string;
  modifiedDate: string;
  id: string;
  content: string;
  user: User;
};

export type HotTag = {
  id: string;
  name: string;
  score: number;
  count: number;
};

export type Preview = {
  createdDate: string;
  id: string;
  title: string;
  content: string;
  viewNum: number;
  user: User;
  commentsNum: number;
};

export type PostList = {
  nrOfElements: number;
  pagelist: DataProps[];
};

export type Profile = {
  username: string;
  email: string;
  image?: string;
  introduce?: string;
  introduce_security?: boolean;
  birth?: string;
  university?: string;
  major?: string;
  area?: string;
  interests?: string;
  birth_security?: boolean;
  university_security?: boolean;
  area_security?: boolean;
  interests_security?: boolean;
};

export default DataProps;
