import React, { useState, useCallback, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/ModalWrite/Top";
import Middle from "../molecules/ModalWrite/Middle";
import Bottom from "../molecules/ModalWrite/Bottom";
import { State } from "../../types/User";
import { ModalType } from "../atoms/Modal/ModalType";

type ModalWriteProps = {
  modalType: ModalType;
  visible: boolean;
  onClose: () => void;
  setReload: Dispatch<SetStateAction<number>>;
  reload: number;
};
function ModalWrite({
  modalType,
  visible,
  onClose,
  setReload,
  reload,
}: ModalWriteProps) {
  const state = useSelector((state: { user: State }) => state.user);
  const { email } = state.userData;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");
  const [projectType, setProjectType] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const post = useCallback(() => {
    const flag = checkIsNotEmpty();
    if (flag) {
      try {
        if (modalType === "project") {
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
        } else if (modalType === "portfolio") {
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
        else if (props.type === "portfolio") {
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

  const checkIsNotEmpty = () => {
    const flag = false;
    if (!title) {
      alert("제목을 입력하세요");
      return flag;
    }
    if (!content) {
      alert("내용을 입력하세요");
      return flag;
    }
    if (!category) {
      alert("카테고리를 선택해주세요");
      return flag;
    }
    if (!field) {
      alert("구인분야를 선택해주세요");
      return flag;
    }
    if (!region && modalType === "project") {
      alert("지역을 선택해주세요");
      return flag;
    }
    if (!projectType && modalType === "project") {
      alert("프로젝트 종류를 선택해주세요");
      return flag;
    }
    return true;
  };

  const onMaskClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, []);

  return (
    <>
      <Overlay visible={visible} onClick={onMaskClick} />
      <Wrapper visible={visible} onClick={onMaskClick}>
        <Inner>
          <Top
            modalType={modalType}
            setCategory={setCategory}
            setField={setField}
            setRegion={setRegion}
            setProjectType={setProjectType}
            setTitle={setTitle}
            title={title}
            profileImage={state.userData.image}
          ></Top>
          <Middle
            modalType={modalType}
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
        </Inner>
      </Wrapper>
    </>
  );
}

export default React.memo(ModalWrite);
