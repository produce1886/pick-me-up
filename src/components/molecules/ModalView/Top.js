import styled from "styled-components";
import Text from "../../atoms/Text";
import Top from "../../atoms/Modal/Top";
import ProfileHolder from "../../atoms/ImageHolder/Profile";
import Filterinfo from "../FilterInfo";

export default function ModalTop(props) {
  return (
    <Top>
      <TitleFilterWrapper>
        <TitleWrapper>
          <Text level={12} color="#9c69e2" weight={800}>
            {props.title}
          </Text>
        </TitleWrapper>
        <Filterinfo
          type={props.type}
          category={props.category}
          field={props.field}
          region={props.region}
          projectCategory={props.projectCategory}
        ></Filterinfo>
      </TitleFilterWrapper>
      <ProfileBox>
        <ProfileHolder size="2rem" noMargin={true}>
          <Img src={props.profileImage}></Img>
        </ProfileHolder>
        <Text level={3} weight={800}>
          {props.name}
        </Text>
      </ProfileBox>
    </Top>
  );
}

const TitleWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: left;
  padding-right: 1.5rem;
  margin: 0 0 0.5rem 0rem;
`;

const TitleFilterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;
`;

const ProfileBox = styled.div`
  width: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
