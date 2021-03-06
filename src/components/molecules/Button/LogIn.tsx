import React, { useCallback } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { loginUser } from "@src/_actions/user";
import LogInService from "@src/lib/api/LogIn";

export default function LogInButton() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogin = useCallback((response) => {
    const loginData = {
      username: response.profileObj.name,
      email: response.profileObj.email,
      image: response.profileObj.imageUrl,
    };
    LogInService.login(loginData).then((userData) =>
      dispatch(loginUser(userData))
    );
    setTimeout(() => {
      router.push(router.pathname);
    }, 100);
  }, []);

  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      buttonText="Log In"
      onSuccess={handleLogin}
      onFailure={() => alert("로그인에 실패했습니다")}
      cookiePolicy={"single_host_origin"}
    />
  );
}
