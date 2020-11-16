import React, { useState, useCallback, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Top from "../molecules/ModalWrite/Top";
import Middle from "../molecules/ModalWrite/Middle";
import Bottom from "../molecules/ModalWrite/Bottom";
import UserState from "../../types/User";
import { PageType } from "../atoms/Modal/ModalType";
import Modal from "../atoms/Modal/index";
import checkIsNotEmpty from "../../lib/utils/CheckIsNotEmpty";

type ModalWriteProps = {
  page: PageType;
  isVisible: boolean;
  onClose: () => void;
  setReload: Dispatch<SetStateAction<number>>;
  reload: number;
};

function ModalWrite({
  page,
  isVisible,
  onClose,
  setReload,
  reload,
}: ModalWriteProps) {
  const userState = useSelector((state: { user: UserState }) => state.user);
  const { email } = userState.userData;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");
  const [projectType, setProjectType] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const post = useCallback(() => {
    const flag = checkIsNotEmpty(
      title,
      content,
      category,
      field,
      region,
      projectType,
      page
    );
    if (flag) {
      try {
        if (page === "project") {
          const image = images.length > 0 ? images[0] : "";
          const body = {
            title,
            content,
            email,
            category,
            huntingField: field,
            region,
            projectCategory: projectType,
            tags,
            image,
          };
          axios.post(`${process.env.API_HOST}/projects`, body);
          setTimeout(() => setReload(reload + 1), 300);
          onClose();
        } else if (page === "portfolio") {
          const image = images.length > 0 ? images[0] : "";
          const body = {
            title,
            content,
            email,
            category,
            huntingField: field,
            tags,
            image,
          };
          axios.post(`${process.env.API_HOST}/portfolios`, body);
          setTimeout(() => setReload(reload + 1), 300);
          onClose();
        }
        /* 나중에 아래 코드로 변경 예정(백엔드 api 수정 완료 시)
        else if (props.page === "portfolio") {
          let imageDataArray = [];
          images.map((value) => imageDataArray.push(value.data));
          let body = {
            title: title,
            content: content,
            email: email,
            category: category,
            huntingField: field,
            tags: tags,
            image: imageDataArray,
          };
          axios.post(`${process.env.API_HOST}/portfolios`, body);
          setTimeout(() => props.setReload(props.reload + 1), 300);
          props.onClose();
        }
        */
      } catch (error) {
        console.log(error);
        alert("에러가 발생했습니다.");
      }
    }
  }, [title, content, category, field, region, projectType, tags, images]);

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Top
        page={page}
        setCategory={setCategory}
        setField={setField}
        setRegion={setRegion}
        setProjectType={setProjectType}
        setTitle={setTitle}
        title={title}
        profileImage={userState.userData.image}
      ></Top>
      <Middle
        page={page}
        setContent={setContent}
        setImages={setImages}
        images={images}
        content={content}
      ></Middle>
      <Bottom
        onClick={post}
        tags={tags}
        setTags={setTags}
        isUpdate={false}
      ></Bottom>
    </Modal>
  );
}

export default React.memo(ModalWrite);
