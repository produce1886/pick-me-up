import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import Top from "../organisms/Profile/Top";
import Tab from "../organisms/Profile/Tab";
import Info from "../organisms/Profile/Info";
import Portfolio from "../organisms/Profile/Portfolio";
import Project from "../organisms/Profile/Project";
import EditModal from "../organisms/Profile/EditModal";

function ProfileBody() {
  const router = useRouter();
  const { userid } = router.query;
  const { isLoading, data } = useGetPersonalInfoAPI(userid);
  const [selected, setSelected] = useState(0);
  const [isEditVisible, setIsEditVisible] = useState(false);

  return (
    <Wrapper>
      {data && ( // needs skeleton
        <Top
          setIsEditVisible={setIsEditVisible}
          profileImage={data.image}
          name={data.username}
          introduceSecurity={data.introduce_security}
          introduce={data.introduce}
        ></Top>
      )}
      <Tab selected={selected} setSelected={setSelected}></Tab>
      <BodyWrapper>
        {selected === 0 && <Info {...data}></Info>}
        {selected === 1 && <Project></Project>}
        {selected === 2 && <Portfolio></Portfolio>}
      </BodyWrapper>
      {isEditVisible && (
        <EditModal
          isVisible={isEditVisible}
          onClose={() => setIsEditVisible(false)}
        ></EditModal>
      )}
    </Wrapper>
  );
}

export default ProfileBody;

const useGetPersonalInfoAPI = (userid) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(
          `${process.env.API_HOST}/users/${userid}`
        );
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  return { isLoading, data };
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BodyWrapper = styled.div`
  width: 48rem;
  box-sizing: border-box;
  min-height: 20rem;
  margin: 0 4rem 0 4rem;
  align-items: center;
  max-width: 92%;
`;
