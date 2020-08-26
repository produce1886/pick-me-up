import ItemWrapper from "../../molecules/Filter/FilterItem";
import Wrapper from "../../atoms/Filter/DropDownMenu";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function EditnDelete(props) {
  const pid = parseInt(props.pid, 10);
  const router = useRouter();
  const data = [
    { key: 0, title: "댓글 수정", type: "more", mode: "edit" },
    { key: 1, title: "댓글 삭제", type: "more", mode: "delete" },
  ];
  const [comment, setComment] = useState();

  const deleteComment = () => {
    const fetchData = async () => {
      try {
        if (window.confirm("댓글을 삭제하시겠습니까?")) {
          const result = await axios.delete(
            `${process.env.API_HOST}/projects/${pid}/comments/${props.id}`
          );
          setComment(result.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        //need to refresh
      }
    };
    fetchData();
  };

  const getComment = () => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.API_HOST}/projects/${pid}/comments/${props.id}`
        );
        const comment = Object.assign(result.data);
        props.setCommentUpdate(comment);
        props.setContentUpdate(comment.content);
        console.log(comment);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchData();
  };

  const UpdateComment = () => {
    getComment();
    props.setEdit(true);
  };
  const setSelected = (item) => {
    if (item.key === 1) {
      deleteComment();
    } else if (item.key === 0) {
      UpdateComment();
    }
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
