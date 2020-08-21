import ItemWrapper from "../../molecules/Filter/FilterItem";
import Wrapper from "../../atoms/Filter/DropDownMenu";
import { useState } from "react";
export default function EditnDelete(props) {
  const data = [
    { key: 0, title: "댓글 수정", type: "more", mode: "edit" },
    { key: 1, title: "댓글 삭제", type: "more", mode: "delete" },
  ];
  const [mode, setMode] = useState("");
  const [item, setItem] = useState("");

  const setSelected = (item) => {
    if (item) {
      setMode(item.mode);
    }
    setItem(item);
  };
  return (
    <Wrapper
      zIndex="100"
      top="1.6rem"
      left="31.3rem"
      width="5.4rem"
      height="3.2rem"
    >
      {data.map((value, index) => (
        <ItemWrapper
          key={index}
          item={value}
          setSelected={setSelected}
          width="4.6rem"
          height="1rem"
        ></ItemWrapper>
      ))}
    </Wrapper>
  );
}
