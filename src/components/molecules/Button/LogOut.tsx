import React, { useCallback } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";
import { logoutUser } from "../../../_actions/user";

export default function LogOutButton() {
  const router = useRouter();
  const dispatch = useDispatch();
  const logoutHandler = useCallback(() => {
    dispatch(logoutUser());
    setTimeout(() => router.push(router.pathname), 100);
  }, []);

  return (
    <Wrapper>
      <GoogleLogout
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Log Out"
        onLogoutSuccess={logoutHandler}
      ></GoogleLogout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 1rem;
`;
