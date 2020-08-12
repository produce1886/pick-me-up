import styled from "styled-components";
import ViewCount from "../ViewCount";
import CommentCount from "../CommentCount";
import MoreButton from "../Button/More";

export default function Bottom(props) {
  return (
    <Wrapper>
      <Div>
        <ViewCount count={props.viewNum}></ViewCount>
        &nbsp;
        <CommentCount count={props.commentNum}></CommentCount>
      </Div>
      <MoreButton link={`project/${props.id}`}></MoreButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0.4rem 1rem 0.5rem 1rem;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const A = styled.a``;
