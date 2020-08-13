import styled, { css } from "styled-components";
import Text from "../../atoms/Text";
import Profile from "../Profile";
import ViewCount from "../ViewCount";
import CommentCount from "../CommentCount";

function Detail(props) {
  return (
    <DetailWrapper y={props.y}>
      <Row>
        <Text level={3} weight="bold" color="#232735">
          Title
        </Text>
      </Row>
      <Row>
        <Profile name="name" size="0.8rem" level={1}></Profile>
        <Div>
          <ViewCount count={10}></ViewCount>
          &nbsp;
          <CommentCount count={10}></CommentCount>
        </Div>
      </Row>
    </DetailWrapper>
  );
}

export default Detail;

const DetailWrapper = styled.div`
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: -3rem;
  background-color: #fff;
  -webkit-transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  padding: 0.4rem 0.6rem;
  display:flex;
  flex-direction:column;
  box-sizing: border-box;
}
  ${(props) => css`
    -webkit-transform: translateY(${props.y});
    transform: translateY(${props.y});
  `}
`;

const Row = styled.div`
  width: 100%;
  height: 1.16rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
