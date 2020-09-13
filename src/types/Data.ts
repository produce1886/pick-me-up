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
  projectTag: {
    id: number;
    tag: string;
  };
  portfolioTag: {
    id: number;
    tag: string;
  };
  user: {
    id: number;
    username: string;
    email: string;
    image: string;
  };
  comments: {
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
};

export default DataProps;
