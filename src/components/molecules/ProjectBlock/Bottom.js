import styled from "styled-components";
import ViewCount from "../Count/ViewCount";
import CommentCount from "../Count/CommentCount";
import MoreButton from "../Button/More";
import TagButton from "../Button/Tag";

function Bottom(props) {
  const renderTags = props.tags.map((item, index) => {
    return <TagButton text={item.tag} key={index}></TagButton>;
  });

  return (
    <Wrapper>
      <Col>
        <Row>{renderTags}</Row>
        <Row2>
          <Div>
            <ViewCount count={props.viewNum}></ViewCount>
            &nbsp;
            <CommentCount count={props.commentsNum}></CommentCount>
          </Div>
          <MoreButton id={props.id}></MoreButton>
        </Row2>
      </Col>
    </Wrapper>
  );
}

export default React.memo(Bottom);

const Wrapper = styled.div`
  width: 100%;
  padding: 0.4rem 1rem 0.5rem 1rem;
  box-sizing: border-box;
  align-items: center;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
`;

const Div = styled.div`
  display: flex;
  padding: 0 1rem 0 0;
  flex-direction: row;
  align-items: center;
`;

const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const A = styled.a``;
