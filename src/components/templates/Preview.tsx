import styled from "styled-components";
import Link from "next/link";
import Colors from "@colors";
import PreviewHooks from "@src/lib/hooks/Preview";
import PreviewBlock from "../organisms/PreviewBlock";
import Text from "../atoms/Text";
import Icon from "../atoms/Icon/Chevron/Right";
import Skeleton from "../_skeletons/main/PreviewBlock";

export default function Preview({ sort }: { sort: "new" | "most" }) {
  const { isLoading, isError, data } = PreviewHooks.usePreviewGetApi([sort]);

  return (
    <Wrapper>
      <InnerWrapper>
        <LinkWrapper>
          <Link href="project">
            <A>
              <Text level={8} color={Colors.BLACK} weight="bold">
                {sort === "new" && "신규 프로젝트"}
                {sort === "most" && "가장 많이 본 프로젝트"}
              </Text>
            </A>
          </Link>
          <Icon
            style={{ width: "0.4rem", height: "0.8rem" }}
            fill={Colors.BLACK}
          ></Icon>
        </LinkWrapper>
        <BlockWrapper>
          {isLoading && (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          )}
          {!isLoading &&
            !isError &&
            data &&
            data.map((item, index) => (
              <PreviewBlock
                key={item.id}
                rank={sort === "most" && index + 1}
                sort={sort}
                date={item.createdDate}
                pid={item.id}
                title={item.title}
                content={item.content}
                commentsNum={item.commentsNum}
                viewNum={item.viewNum}
                uid={item.user.id}
                name={item.user.username}
                profileImage={item.user.image}
              ></PreviewBlock>
            ))}
        </BlockWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1.6rem 0 1.6rem 0;
  box-sizing: border-box;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 4rem 0 4rem;
  max-width: 92%;
  width: 48rem;
`;

const LinkWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 1.2rem;
`;

const A = styled.a`
  margin-right: 0.8rem;
`;

const BlockWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;
