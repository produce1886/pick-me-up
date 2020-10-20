import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import { CATEGORY, FIELD, REGION, PROJECT_CATEGORY } from "./ItemData";

type FilterGroupProps = {
  type: string;
  width: string;
  height: string;
  line: string;
  level: number;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setField: React.Dispatch<React.SetStateAction<string>>;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  setProjectType: React.Dispatch<React.SetStateAction<string>>;
};

function FilterGroup(props: FilterGroupProps) {
  const category = "카테고리";
  const region = "지역";
  const field = "구인분야";
  const projectType = "프로젝트 종류";

  return (
    <FilterWrapper>
      <Filter
        width={props.width}
        height={props.height}
        line={props.line}
        level={props.level}
        defaultText={category}
        data={CATEGORY}
        onClick={props.setCategory}
      ></Filter>
      <Filter
        width={props.width}
        height={props.height}
        line={props.line}
        level={props.level}
        defaultText={field}
        data={FIELD}
        onClick={props.setField}
      ></Filter>
      {props.type === "project" && (
        <>
          <Filter
            width={props.width}
            height={props.height}
            line={props.line}
            level={props.level}
            defaultText={region}
            data={REGION}
            onClick={props.setRegion}
          ></Filter>
          <Filter
            width={props.width}
            height={props.height}
            line={props.line}
            level={props.level}
            defaultText={projectType}
            data={PROJECT_CATEGORY}
            onClick={props.setProjectType}
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
