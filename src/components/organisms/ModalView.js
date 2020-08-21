import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/ModalView/Top";
import Middle from "../molecules/ModalView/Middle";
import Bottom from "../molecules/ModalView/Bottom";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
export default function ModalView(props) {
  const state = useSelector((state) => state.user);
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose(e);
    }
  };

  return (
    <>
      <Overlay visible={props.visible} onClick={onMaskClick} />
      <Wrapper
        tabIndex="-1"
        visible={props.visible}
        height="70rem"
        onClick={onMaskClick}
      >
        <Inner>
          <Top
            type={props.type}
            name={state.userData.username}
            profileImage={state.userData.image}
          ></Top>
          <Middle type="project" isSignedin={state.isSignedIn}></Middle>
          <Bottom count="1N" isSignedin={state.isSignedIn}></Bottom>
        </Inner>
      </Wrapper>
    </>
  );
}
const getProjectBlock = () => {
  const [projects, setProjects] = useState();
};
