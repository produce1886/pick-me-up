import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import Row from "../../atoms/Wrapper/Row";
import Text from "../../atoms/Text";
import IconProps from "../../atoms/Icon/icon";

type InfoUnitProps = {
  id: number;
  icon: ({ style, fill }: IconProps) => JSX.Element;
  width: string;
  height: string;
  content?: string;
  university?: string;
  major?: string;
};

function InfoUnit(props: InfoUnitProps) {
  return (
    <Wrapper>
      <props.icon
        style={{
          width: props.width,
          height: props.height,
        }}
        fill={Colors.GREY}
      ></props.icon>
      {props.id === 2 ? (
        <Row>
          <Text level={3} color={Colors.BLACK} weight="bold">
            {props.university}
          </Text>
          {props.major && (
            <>
              <Text level={3} color={Colors.BLACK}>
                에서&nbsp;
              </Text>
              <Text level={3} color={Colors.BLACK} weight="bold">
                {props.major}
              </Text>
              <Text level={3} color={Colors.BLACK}>
                &nbsp;전공
              </Text>
            </>
          )}
        </Row>
      ) : (
        <Text level={3} color={Colors.BLACK}>
          {props.content}
        </Text>
      )}
    </Wrapper>
  );
}

export default InfoUnit;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1.2rem;
`;
