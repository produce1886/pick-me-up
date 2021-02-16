/* eslint-disable camelcase */

type PostProps = {
  id: number;
  title: string;
  content: string;
  category: string;
  recruitmentField: string;
  createdDate: string;
  modifiedDate: string;
  viewNum: number;
  commentsNum: number;
  user: User;
  comments: Comment[];
};

export type ProjectProps = PostProps & {
  region: string;
  projectSection: string;
  projectTags: Tag[];
  image: string;
};

export type PortfolioProps = PostProps & {
  portfolioTags: Tag[];
  images: Images[];
};

export type Images = {
  id: number;
  image: string;
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
  email?: string;
  image?: string;
  localImage?: Blob;
  introduce?: string;
  birth?: string;
  university?: string;
  major?: string;
  region?: string;
  interests?: string;
  birthPublic?: boolean;
  universityPublic?: boolean;
  regionPublic?: boolean;
  interestsPublic?: boolean;
};
