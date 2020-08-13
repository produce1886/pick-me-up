import styled from "styled-components";
import Filter from "../../molecules/Filter/Filter";
import {
  PROJECTTYPE,
  FIELD,
  REGION,
  CATEGORY,
} from "../../molecules/Filter/ItemData";
export default function Filters(props) {
  const category = "카테고리";
  const region = "지역";
  const field = "구인분야";
  const projecttype = "프로젝트 종류";

  return (
    <FilterWrapper>
      <Filter
        width={props.width}
        height={props.height}
        line={props.line}
        level={props.level}
        title={category}
        activeMenu="category"
        data={CATEGORY}
      ></Filter>
      <Filter
        width={props.width}
        height={props.height}
        line={props.line}
        level={props.level}
        title={field}
        activeMenu="field"
        data={FIELD}
      ></Filter>
      {props.type === "project" && (
        <>
          <Filter
            width={props.width}
            height={props.height}
            line={props.line}
            level={props.level}
            title={region}
            activeMenu="region"
            data={REGION}
          ></Filter>
          <Filter
            width={props.width}
            height={props.height}
            line={props.line}
            level={props.level}
            title={projecttype}
            activeMenu="projecttype"
            data={PROJECTTYPE}
          ></Filter>
        </>
      )}
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  width: 23rem;
  height: 1.6rem;
  justify-content: left;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0 15rem 0 0rem;
`;
