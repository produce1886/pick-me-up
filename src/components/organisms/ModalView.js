import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/ModalView/Top";
import Middle from "../molecules/ModalView/Middle";
import Bottom from "../molecules/ModalView/Bottom";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ModalView(props) {
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const type = router.pathname === "/project/[pid]" ? "project" : "portfolio";

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      setVisible(false);
    }
  };

  return (
    <>
      <Overlay visible={visible} onClick={onMaskClick} />
      <Wrapper
        tabIndex="-1"
        visible={visible}
        height="70rem"
        onClick={onMaskClick}
      >
        <Inner>
          <Top type={type}></Top>
          <Middle type={type}></Middle>
          <Bottom commentsNum={10}></Bottom>
        </Inner>
      </Wrapper>
    </>
  );
}
