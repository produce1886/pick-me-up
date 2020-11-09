import React, { useCallback } from "react";
import CommentService from "@src/lib/api/Comment";
import { COMMENT } from "../Filter/ItemData";
import ItemWrapper from "../Filter/Item";
import Wrapper from "../../atoms/Filter/DropDownMenu";

function EditDelete(props) {
  const url = `${props.modalType}s/${props.pid}/comments/${props.cid}`;

  const handleClick = useCallback((itemTitle) => {
    if (itemTitle === "댓글 삭제") {
      if (window.confirm("댓글을 삭제하시겠습니까?")) {
        CommentService.deleteComment(url);
      }
    } else if (itemTitle === "댓글 수정") {
      props.setUpdatingCid(props.cid);
    }
    props.setIsButtonClicked(false);
    setTimeout(() => props.setModalReload(props.modalReload + 1), 500);
  }, []);

  return (
    <Wrapper
      zIndex="100"
      top="1.6rem"
      left="31.3rem"
      width="5.4rem"
      height="3.2rem"
    >
      {COMMENT.map((item) => (
        <ItemWrapper
          key={item.key}
          {...item}
          handleClick={handleClick}
          width="4.6rem"
          height="1rem"
        ></ItemWrapper>
      ))}
    </Wrapper>
  );
}

export default React.memo(EditDelete);
