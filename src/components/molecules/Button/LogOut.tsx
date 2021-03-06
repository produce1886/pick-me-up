import React, { useCallback } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";
import { logoutUser } from "../../../_actions/user";

export default function LogOutButton() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
    setTimeout(() => router.push(router.pathname), 200);
  }, []);

  return (
    <Wrapper>
      <GoogleLogout
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Log Out"
        onLogoutSuccess={handleLogout}
      ></GoogleLogout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 1rem;
`;
