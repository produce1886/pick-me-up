type UserState = {
  isSignedIn: boolean;
  userData: {
    username?: string;
    email?: string;
    image?: string;
  };
};

export default UserState;
