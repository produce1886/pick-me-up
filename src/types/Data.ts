/* eslint-disable camelcase */

export type ProjectProps = {
  id: number;
  title: string;
  content: string;
  category: string;
  recruitmentField: string;
  region: string;
  projectSection: string;
  projectTags: Tag[];
  image: string;
  createdDate: string;
  modifiedDate: string;
  viewNum: number;
  commentsNum: number;
  user: User;
  comments: Comment;
};

export type PortfolioProps = {
  id: number;
  title: string;
  content: string;
  category: string;
  recruitmentField: string;
  portfolioTags: Tag[];
  createdDate: string;
  modifiedDate: string;
  viewNum: number;
  commentsNum: number;
  user: User;
  comments: Comment;
};

export type User = {
  id: string;
  username: string;
  email: string;
  image: string;
};

export type Tag = {
  id: string;
  tagName: string;
};

export type Comment = {
  createdDate: string;
  modifiedDate: string;
  id: number;
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

export type ProjectList = {
  totalNum: number;
  projectList: ProjectProps[];
};

export type PortfolioList = {
  totalNum: number;
  portfolioList: PortfolioProps[];
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
