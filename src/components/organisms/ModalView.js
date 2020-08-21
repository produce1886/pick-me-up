import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/ModalView/Top";
import Middle from "../molecules/ModalView/Middle";
import Bottom from "../molecules/ModalView/Bottom";

export default function ModalView() {
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const type = router.pathname === "/project/[pid]" ? "project" : "portfolio";
  const pid = router.asPath.split("/")[2];
  const { project, isLoading } = getProject(pid);

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      setVisible(false);
      router.push(`/${type}`);
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
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Top type={type}></Top>
              <Middle type={type}></Middle>
              <Bottom commentsNum={10}></Bottom>
            </>
          )}
        </Inner>
      </Wrapper>
    </>
  );
}

const getProject = (pid) => {
  const [project, setProject] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(
          `${process.env.API_HOST}/projects/${pid}`
        );
        setProject(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return { project, isLoading };
};
