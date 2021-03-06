type UserState = {
  isSignedIn: boolean;
  userData: {
    id: number;
    username: string;
    email: string;
    image: string;
  };
};

export default UserState;
