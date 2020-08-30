import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/Modal/ModalTop";
import Middle from "../molecules/Modal/ModalMiddle";
import Bottom from "../molecules/Modal/ModalBottom";

export default function ModalWrite(props) {
  const state = useSelector((state) => state.user);
  const email = state.userData.email;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");
  const [projectType, setProjectType] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);

  const post = () => {
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
          setTimeout(() => props.setReload(props.reload + 1), 200);
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
          setTimeout(() => props.setReload(props.reload + 1), 200);
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
          setTimeout(() => props.setReload(props.reload + 1), 200);
          props.onClose();
        }
        */
      } catch (error) {
        console.log(error);
        alert("에러가 발생했습니다.");
      }
    }
  };

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
  };

  const checkIsNotEmpty = () => {
    let flag = false;
    if (isEmpty(title)) {
      alert("제목을 입력하세요");
      return flag;
    }
    if (isEmpty(content)) {
      alert("내용을 입력하세요");
      return flag;
    }
    if (isEmpty(category)) {
      alert("카테고리를 선택해주세요");
      return flag;
    }
    if (isEmpty(field)) {
      alert("구인분야를 선택해주세요");
      return flag;
    }
    if (isEmpty(region) && props.type === "project") {
      alert("지역을 선택해주세요");
      return flag;
    }
    if (isEmpty(projectType) && props.type === "project") {
      alert("프로젝트 종류를 선택해주세요");
      return flag;
    }
    return true;
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose(e);
    }
  };

  return (
    <>
      <Overlay visible={props.visible} onClick={onMaskClick} />
      <Wrapper
        tabIndex="-1"
        visible={props.visible}
        height="62rem"
        onClick={onMaskClick}
      >
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
