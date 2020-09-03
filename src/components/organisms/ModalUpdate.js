import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/Modal/ModalTop";
import Middle from "../molecules/Modal/ModalMiddle";
import Bottom from "../molecules/Modal/ModalBottom";

function ModalUpdate(props) {
  const state = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");
  const [projectType, setProjectType] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const { isLoading } = getData(
    props.pid,
    props.type,
    setTitle,
    setContent,
    setCategory,
    setField,
    setRegion,
    setProjectType,
    setImages,
    setTags
  );

  if (tags.length > 0 && typeof tags[0] === "object") {
    let tagArray = [];
    tags.map((value) => tagArray.push(value.tag));
    setTags(tagArray);
  }

  const update = useCallback(() => {
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
            category: category,
            huntingField: field,
            region: region,
            projectCategory: projectType,
            tags: tags,
            image: image,
          };
          axios.put(`${process.env.API_HOST}/projects/${props.pid}`, body);
          setTimeout(() => props.setModalReload(props.modalReload + 1), 400);
          props.setUpdate(false);
        } else if (props.type === "portfolio") {
          let image = images.length > 0 ? images[0].data : "";
          let body = {
            title: title,
            content: content,
            category: category,
            huntingField: field,
            tags: tags,
            image: image,
          };
          axios.put(`${process.env.API_HOST}/portfolios/${props.pid}`, body);
          setTimeout(() => props.setModalReload(props.modalReload + 1), 400);
          props.setUpdate(false);
        }
        /* 나중에 아래 코드로 변경 예정(백엔드 api 수정 완료 시)
        else if (props.type === "portfolio") {
          let imageDataArray = [];
          images.map((value) => imageDataArray.push(value.data));
          let body = {
            title: title,
            content: content,
            category: category,
            huntingField: field,
            tags: tags,
            image: imageDataArray,
          };
          axios.put(`${process.env.API_HOST}/portfolios/${props.pid}`, body);
          setTimeout(() => props.setModalReload(props.modalReload + 1), 400);
          props.setUpdate(false);
        }
        */
      } catch (error) {
        console.log(error);
        alert("에러가 발생했습니다.");
      }
    }
  }, [title, content, category, field, region, projectType, tags, images]);

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

  const onMaskClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      props.onClose(e);
    }
  }, []);

  return (
    <>
      <Overlay visible={!isLoading} onClick={onMaskClick} />
      <Wrapper
        tabIndex="-1"
        visible={!isLoading}
        height="62rem"
        onClick={onMaskClick}
      >
        <Inner>
          <Top
            type={props.type}
            title={title}
            category={category}
            field={field}
            region={region}
            projectType={projectType}
            setCategory={setCategory}
            setField={setField}
            setRegion={setRegion}
            setProjectType={setProjectType}
            setTitle={setTitle}
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
            tags={tags}
            setTags={setTags}
            onClick={update}
            updating={true}
          ></Bottom>
        </Inner>
      </Wrapper>
    </>
  );
}

export default React.memo(ModalUpdate);

const getData = (
  pid,
  type,
  setTitle,
  setContent,
  setCategory,
  setField,
  setRegion,
  setProjectType,
  setImages,
  setTags
) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (type === "project") {
          const result = await axios.get(
            `${process.env.API_HOST}/projects/${pid}`
          );
          setData(result.data);
          setTitle(result.data.title);
          setContent(result.data.content);
          setCategory(result.data.category);
          setField(result.data.huntingField);
          setRegion(result.data.region);
          setProjectType(result.data.projectCategory);
          if (result.data.image != "") {
            setImages([{ data: result.data.image }]);
          }
          setTags(result.data.projectTag);
          setIsLoading(false);
        } else if (type === "portfolio") {
          const result = await axios.get(
            `${process.env.API_HOST}/portfolios/${pid}`
          );
          setData(result.data);
          setTitle(result.data.title);
          setContent(result.data.content);
          setCategory(result.data.category);
          setField(result.data.huntingField);
          if (result.data.image != "") {
            setImages([{ data: result.data.image }]);
          }
          setTags(result.data.portfolioTag);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (!data) {
      fetchData();
    }
  }, []);
  return { isLoading };
};
