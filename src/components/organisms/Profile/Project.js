import React from "react";
import styled from "styled-components";
import List from "../../templates/ProjectList";

function Project() {
  return (
    <Wrapper>
      <List
        category=""
        recruitmentField=""
        region=""
        projectSection=""
        query=""
        sort="최신순"
      ></List>
    </Wrapper>
  );
}

export default React.memo(Project);

const Wrapper = styled.div`
  margin-top: 3rem;
`;
