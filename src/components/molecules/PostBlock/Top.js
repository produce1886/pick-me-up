import Link from "next/link";
import styled from "styled-components";
import { React } from "react";
import Text from "../../atoms/Text";
import Col from "../../atoms/Col";
import Rank from "../Rank";
import Profile from "../Profile";

function Top(props) {
  return (
    <Wrapper>
      <Col>
        {props.type === "most" && <Rank number={props.rank}></Rank>}
        <Row>
          <Text level={6} weight="bold" color="#9c69e2" line={1.17}>
            {props.title}
          </Text>
        </Row>
        <Row>
          <Div>
            <Link href="/profile/[userid]" as={`/profile/${props.uid}`}>
              <A>
                <Profile
                  size="0.9rem"
                  level={1}
                  name={props.name}
                  profileImage={props.profileImage}
                ></Profile>
              </A>
            </Link>
            <Text level={1} color="#232735">
              {props.date}
            </Text>
          </Div>
        </Row>
      </Col>
    </Wrapper>
  );
}

export default React.memo(Top);

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 0.07rem solid #d3d4d8;
  padding: 0.8rem 1rem 0rem 1rem;
  box-sizing: border-box;
  height: fit-content;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.35rem 0 0.55rem 0;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 1.25rem;
  overflow: hidden;
  margin-top: 0.2rem;
`;

const A = styled.a``;
