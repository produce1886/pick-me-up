import React from "react";
import styled from "styled-components";
import { PageType } from "@src/components/atoms/Modal/ModalType";
import Filter from "./Filter";
import {
  CATEGORY,
  RECRUITMENT_FIELD,
  REGION,
  PROJECT_SECTION,
} from "./ItemData";

export type FilterGroupProps = {
  width?: string;
  height?: string;
  line?: string;
  level?: number;
  category?: string;
  recruitmentField?: string;
  region?: string;
  projectSection?: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setRecruitmentField: React.Dispatch<React.SetStateAction<string>>;
  setRegion?: React.Dispatch<React.SetStateAction<string>>;
  setProjectSection?: React.Dispatch<React.SetStateAction<string>>;
  page: PageType;
};

function FilterGroup(props: FilterGroupProps) {
  const category = "카테고리";
  const region = "지역";
  const recruitmentField = "구인분야";
  const projectSection = "프로젝트 종류";

  return (
    <FilterWrapper>
      <Filter
        width={props.width}
        height={props.height}
        line={props.line}
        level={props.level}
        updateTitle={props.category}
        defaultText={category}
        data={CATEGORY}
        onClick={props.setCategory}
      ></Filter>
      <Filter
        width={props.width}
        height={props.height}
        line={props.line}
        level={props.level}
        updateTitle={props.recruitmentField}
        defaultText={recruitmentField}
        data={RECRUITMENT_FIELD}
        onClick={props.setRecruitmentField}
      ></Filter>
      {props.page === "project" && (
        <>
          <Filter
            width={props.width}
            height={props.height}
            line={props.line}
            level={props.level}
            updateTitle={props.region}
            defaultText={region}
            data={REGION}
            onClick={props.setRegion}
          ></Filter>
          <Filter
            width={props.width}
            height={props.height}
            line={props.line}
            level={props.level}
            updateTitle={props.projectSection}
            defaultText={projectSection}
            data={PROJECT_SECTION}
            onClick={props.setProjectSection}
          ></Filter>
        </>
      )}
    </FilterWrapper>
  );
}

export default React.memo(FilterGroup);

const FilterWrapper = styled.div`
  width: fit-content;
  height: 1.6rem;
  justify-content: left;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
