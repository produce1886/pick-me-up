import { useCallback } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../_actions/user";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function SignOutButton() {
  const router = useRouter();
  const dispatch = useDispatch();
  const logoutHandler = useCallback((response) => {
    dispatch(logoutUser());
    router.push(router.pathname);
  }, []);

  return (
    <Div>
      <GoogleLogout
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Log Out"
        onLogoutSuccess={logoutHandler}
      ></GoogleLogout>
    </Div>
  );
}

const Div = styled.div`
  margin-left: 1rem;
`;
