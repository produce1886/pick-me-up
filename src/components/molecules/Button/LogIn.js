import { useCallback } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user";

export default function SignInButton() {
  const dispatch = useDispatch();
  const loginHandler = useCallback((response) => {
    let userData = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      profilePic: response.profileObj.imageUrl,
    };
    dispatch(loginUser(userData));
  }, []);

  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      buttonText="Log In"
      onSuccess={loginHandler}
      onFailure={(response) => console.log(response)}
      cookiePolicy={"single_host_origin"}
    />
  );
}
