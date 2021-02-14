import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import Text from "../atoms/Text";
import { PageType } from "../atoms/Modal/ModalType";

type FilterInfoProps = {
  page: PageType;
  category: string;
  recruitmentField: string;
  region?: string;
  projectSection?: string;
};

function FilterInfo(props: FilterInfoProps) {
  return (
    <Wrapper>
      <Text level={0} color={Colors.DEEP_GREY}>
        {props.category} | {props.recruitmentField}
      </Text>
      {props.page === "project" && (
        <Text level={0} color={Colors.DEEP_GREY}>
          &nbsp;| {props.region} | {props.projectSection}
        </Text>
      )}
    </Wrapper>
  );
}

export default React.memo(FilterInfo);

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`;
