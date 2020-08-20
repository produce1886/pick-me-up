import styled from "styled-components";
import Filterinfo from "../FilterInfo";
import Text from "../../atoms/Text";
import Row from "../../atoms/Row";
import Col from "../../atoms/Col";
import Profile from "../Profile";

export default function Top(props) {
  return (
    <Wrapper>
      <Col>
        <FirstDiv>
          <Text level={6} weight="bold" color="#9c69e2" line={1.17}>
            {props.title}
          </Text>
        </FirstDiv>
        <FirstDiv>
          <Profile
            direction="row"
            size="0.8rem"
            level={1}
            name={props.name}
            profileImage={props.profileImage}
          ></Profile>
        </FirstDiv>
        <Row>
          <Div>
            <Filterinfo
              type="project"
              category={props.category}
              field={props.field}
              region={props.region}
              projectCategory={props.projectCategory}
            ></Filterinfo>
            <Text level={1} color="#232735">
              {props.date}
            </Text>
          </Div>
        </Row>
      </Col>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 0.07rem solid #d3d4d8;
  padding: 0.8rem 1rem 0.6rem 1rem;
  box-sizing: border-box;
  height: fit-content;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FirstDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin: 0.1rem 0 0.2rem 0;
`;
