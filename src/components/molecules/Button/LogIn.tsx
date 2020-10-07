import React, { useCallback } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { loginUser } from "@src/_actions/user";

export default function LogInButton() {
  const router = useRouter();
  const dispatch = useDispatch();
  const loginHandler = useCallback((response) => {
    const userData = {
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
