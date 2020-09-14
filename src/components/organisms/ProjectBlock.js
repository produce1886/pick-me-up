import styled from "styled-components";
import Text from "../atoms/Text";
import Top from "../molecules/ProjectBlock/Top";
import Bottom from "../molecules/ProjectBlock/Bottom";
import Wrapper from "../atoms/Wrapper/ProjectBlock";

function ProjectBlock(props) {
  const date = props.item.createdDate.split("T")[0];

  return (
    <Wrapper>
      <Top
        title={props.item.title}
        name={props.item.user.username}
        date={date}
        uid={props.item.user.id}
        profileImage={props.item.user.image}
        category={props.item.category}
        field={props.item.huntingField}
        region={props.item.region}
        projectCategory={props.item.projectCategory}
      ></Top>
      <Body>
        <Text level={2} color="#232735">
          {props.item.content}
        </Text>
      </Body>
      <Bottom
        tags={props.item.projectTag}
        viewNum={props.item.viewNum}
        commentsNum={props.item.commentsNum}
        id={props.item.id}
      ></Bottom>
    </Wrapper>
  );
}

export default React.memo(ProjectBlock);

const Body = styled.div`
  width: 100%;
  padding: 0.7rem 1rem 0rem 1rem;
  box-sizing: border-box;
  overflow: hidden;
  height: 4.5rem;
`;
