import ItemWrapper from "../Filter/FilterItem";
import Wrapper from "../../atoms/Filter/DropDownMenu";
import Text from "../../atoms/Text";
import { useState } from "react";
export default function EditnDelete(props) {
  const data = [
    { key: 0, title: "댓글 수정", type: "more" },
    { key: 1, title: "댓글 삭제", type: "more" },
  ];
  const [mode, setMode] = useState("none");
  const setSelected = (item) => {
    if (item.title === "댓글 수정") {
      setMode("edit");
      console.log(mode);
    } else {
      setMode("delete");
      console.log(mode);
    }
  };
  return (
    <Wrapper zIndex="100" top="1.7rem" left="-0.1rem" width="4.6rem">
      {data.map((value, index) => (
        <ItemWrapper
          key={index}
          item={value}
          setSelected={setSelected}
          width="3rem"
          height="1.6rem"
        ></ItemWrapper>
      ))}
    </Wrapper>
  );
}
