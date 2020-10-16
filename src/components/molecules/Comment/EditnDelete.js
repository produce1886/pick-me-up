import React, { useCallback } from "react";
import axios from "axios";
import { COMMENT } from "../Filter/ItemData";
import ItemWrapper from "../Filter/Item";
import Wrapper from "../../atoms/Filter/DropDownMenu";

function EditnDelete(props) {
  const pid = parseInt(props.pid, 10);

  const deleteComment = () => {
    try {
      if (props.modalType === "project") {
        if (window.confirm("댓글을 삭제하시겠습니까?")) {
          axios.delete(
            `${process.env.API_HOST}/projects/${pid}/comments/${props.id}`
          );
          setTimeout(() => props.setModalReload(props.modalReload + 1), 300);
          props.setIsButtonClicked(false);
        }
      } else if (props.modalType === "portfolio") {
        if (window.confirm("댓글을 삭제하시겠습니까?")) {
          axios.delete(
            `${process.env.API_HOST}/portfolios/${pid}/comments/${props.id}`
          );
          setTimeout(() => props.setModalReload(props.modalReload + 1), 300);
          props.setIsButtonClicked(false);
        }
      }
    } catch (error) {
      console.log(error);
      alert("Error!");
    }
  };

  const getComment = () => {
    const fetchData = async () => {
      try {
        if (props.modalType === "project") {
          const result = await axios.get(
            `${process.env.API_HOST}/projects/${pid}/comments/${props.id}`
          );
          const comment = Object.assign(result.data);
          props.setCidUpdate(comment.id);
          props.setContentUpdate(comment.content);
        } else if (props.modalType === "portfolio") {
          const result = await axios.get(
            `${process.env.API_HOST}/portfolios/${pid}/comments/${props.id}`
          );
          const comment = Object.assign(result.data);
          props.setCidUpdate(comment.id);
          props.setContentUpdate(comment.content);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  const updateComment = () => {
    getComment();
    props.setIsEdit(true);
    props.setIsButtonClicked(false);
  };

  const setSelectedItemTitle = useCallback((itemTitle) => {
    if (itemTitle === "댓글 삭제") {
      deleteComment();
    } else if (itemTitle === "댓글 수정") {
      updateComment();
    }
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
          item={item}
          setSelectedItemTitle={setSelectedItemTitle}
          width="4.6rem"
          height="1rem"
        ></ItemWrapper>
      ))}
    </Wrapper>
  );
}

export default React.memo(EditnDelete);
