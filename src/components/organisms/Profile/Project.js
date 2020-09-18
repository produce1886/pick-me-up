import List from "../../templates/ProjectList";
import styled from "styled-components";

function Project(props) {
  return (
    <Wrapper>
      <List
        category=""
        field=""
        region=""
        projectType=""
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
