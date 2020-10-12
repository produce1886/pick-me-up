export type State = {
  isSignedIn: boolean;
  userData: {
    username?: string;
    email?: string;
    image?: string;
  };
};
