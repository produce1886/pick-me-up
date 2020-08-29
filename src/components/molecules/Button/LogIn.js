import { useCallback } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user";
import { useRouter } from "next/router";

export default function SignInButton() {
  const router = useRouter();
  const dispatch = useDispatch();
  const loginHandler = useCallback((response) => {
    let userData = {
      username: response.profileObj.name,
      email: response.profileObj.email,
      image: response.profileObj.imageUrl,
    };
    dispatch(loginUser(userData));
    setTimeout(() => router.push(router.pathname), 100);
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
