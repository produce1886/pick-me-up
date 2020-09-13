import React, { useState, useCallback, SetStateAction, Dispatch } from "react";
import { useSelector, DefaultRootState } from "react-redux";
import axios from "axios";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/ModalWrite/Top";
import Middle from "../molecules/ModalWrite/Middle";
import Bottom from "../molecules/ModalWrite/Bottom";
import { State } from "../../types/User";
import ModalProps from "../../types/Modal";

//게시글 생성 시에는 이미지의 타입이 File이지만, post할 때 File.data: string을 보내므로
//ModalUpdate와 ModalView에서는 image를 모두 string[]로 변경
//-> 문제는 ModalUpdate 시에는 setImages()로 File객체를 다시보내야하는데...이땐 어케 할거냐
//-> dropzone의 preview는 file.data라 string이긴함
type File = Blob & {
  invalid: boolean;
  data: string;
};

function ModalWrite(props: ModalProps) {
  const state = useSelector((state: { user: State }) => state.user);
  const email = state.userData.email;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");
  const [projectType, setProjectType] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const post = useCallback(() => {
    let flag = checkIsNotEmpty();
    if (!flag) {
      return;
    } else {
      try {
        if (props.type === "project") {
          let image = images.length > 0 ? images[0].data : "";
          let body = {
            title: title,
            content: content,
            email: email,
            category: category,
            huntingField: field,
            region: region,
            projectCategory: projectType,
            tags: tags,
            image: image,
          };
          axios.post(`${process.env.API_HOST}/projects`, body);
          setTimeout(() => props.setReload(props.reload + 1), 300);
          props.onClose();
        } else if (props.type === "portfolio") {
          let image = images.length > 0 ? images[0].data : "";
          let body = {
            title: title,
            content: content,
            email: email,
            category: category,
            huntingField: field,
            tags: tags,
            image: image,
          };
          axios.post(`${process.env.API_HOST}/portfolios`, body);
          setTimeout(() => props.setReload(props.reload + 1), 300);
          props.onClose();
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

  /*
  const isEmpty = function (value) {
    if (
      value == "" ||
      value == null ||
      value == undefined ||
      (value != null && typeof value == "object" && !Object.keys(value).length)
    ) {
      return true;
    } else {
      return false;
    }
  };*/

  const checkIsNotEmpty = () => {
    let flag = false;
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
    if (!region && props.type === "project") {
      alert("지역을 선택해주세요");
      return flag;
    }
    if (!projectType && props.type === "project") {
      alert("프로젝트 종류를 선택해주세요");
      return flag;
    }
    return true;
  };

  const onMaskClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }, []);

  return (
    <>
      <Overlay visible={props.visible} onClick={onMaskClick} />
      <Wrapper visible={props.visible} onClick={onMaskClick}>
        <Inner>
          <Top
            type={props.type}
            setCategory={setCategory}
            setField={setField}
            setRegion={setRegion}
            setProjectType={setProjectType}
            setTitle={setTitle}
            title={title}
            profileImage={state.userData.image}
          ></Top>
          <Middle
            type={props.type}
            setContent={setContent}
            setImages={setImages}
            images={images}
            content={content}
          ></Middle>
          <Bottom
            type={props.type}
            onClose={props.onClose}
            onClick={post}
            tags={tags}
            setTags={setTags}
          ></Bottom>
        </Inner>
      </Wrapper>
    </>
  );
}

export default React.memo(ModalWrite);
