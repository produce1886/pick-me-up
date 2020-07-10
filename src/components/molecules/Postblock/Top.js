import styled from "styled-components";
import Text from "../../atoms/Text";
import Row from "../../atoms/Row";
import Col from "../../atoms/Col";

export default function Top(props) {
  return (
    <Wrapper>
      <Col>
        <Row>
          <Text level={5} weight="bold" color="#9c69e2" line={1.17}>
            Title Title Title Title Title Title
          </Text>
        </Row>
        <Row>
          <Div>
            <Text level={1} color="#232735">
              Name
            </Text>
            <Text level={1} color="#232735">
              YYYY.MM.DD
            </Text>
          </Div>
        </Row>
      </Col>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 4.8rem;
  border-bottom: 0.07rem solid #d3d4d8;
  padding: 0.8rem 1rem 0.8rem 1rem;
  box-sizing: border-box;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.3rem;
`;
