import styled from "styled-components";
import Colors from "@colors";
import Wrapper from "../atoms/Wrapper/PostBlock";
import Top from "../molecules/PostBlock/Top";
import Bottom from "../molecules/PostBlock/Bottom";
import Text from "../atoms/Text";

export default function PostBlock(props) {
  const date = props.item.createdDate.split("T")[0];

  return (
    <Wrapper>
      <Top
        sort={props.sort}
        rank={props.rank}
        title={props.item.title}
        date={date}
        uid={props.item.user.id}
        name={props.item.user.username}
        profileImage={props.item.user.image}
      ></Top>
      {props.sort === "most" && (
        <BodyHot>
          <Text level={2} color={Colors.BLACK}>
            {props.item.content}
          </Text>
        </BodyHot>
      )}
      {props.sort === "new" && (
        <BodyNew>
          <Text level={2} color={Colors.BLACK}>
            {props.item.content}
          </Text>
        </BodyNew>
      )}
      <Bottom
        viewNum={props.item.viewNum}
        commentsNum={props.item.commentsNum}
        id={props.item.id}
      ></Bottom>
    </Wrapper>
  );
}

const BodyNew = styled.div`
  width: 100%;
  padding: 0.7rem 1rem 0 1rem;
  box-sizing: border-box;
  overflow: hidden;
  height: 7rem;
`;

const BodyHot = styled.div`
  width: 100%;
  padding: 0.7rem 1rem 0 1rem;
  box-sizing: border-box;
  overflow: hidden;
  height: 4.5rem;
`;
