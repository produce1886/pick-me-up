import { useCallback } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";

export default function SignInButton() {
  const dispatch = useDispatch();
  const loginHandler = useCallback((response) => {
    const name = response.profileObj.name;
    const email = response.profileObj.email;
    const image = response.profileObj.imageUrl;

    dispatch({
      type: "IN",
      isSignedIn: true,
      name: name,
      email: email,
      profile_pic: image,
    });
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
