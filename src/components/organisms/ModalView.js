import { useState, useEffect } from "react";
import axios from "axios";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/ModalView/Top";
import Middle from "../molecules/ModalView/Middle";
import Bottom from "../molecules/ModalView/Bottom";
import UpdateTop from "../molecules/Modal/ModalTop";
import UpdateMiddle from "../molecules/Modal/ModalMiddle";
import UpdateBottom from "../molecules/Modal/ModalBottom";
export default function ModalView(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateContent, setUpdateContent] = useState("");
  const [updateCategory, setUpdateCategory] = useState("");
  const [updateField, setUpdateField] = useState("");
  const [updateRegion, setUpdateRegion] = useState("");
  const [updateProjectType, setUpdateProjectType] = useState("");
  const [updateImages, setUpdateImages] = useState([]);
  const [updateProjectTags, setUpdateProjectTags] = useState([]);
  const [updatePortfolioTags, setUpdatePortfolioTags] = useState([]);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState([]);
  console.log(isUpdate);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (props.type === "project") {
          const result = await axios.get(
            `${process.env.API_HOST}/projects/${props.pid}`
          );
          setData(result.data);
          setUpdateTitle(result.data.title);
          setUpdateContent(result.data.content);
          setUpdateCategory(result.data.category);
          setUpdateField(result.data.field);
          setUpdateRegion(result.data.region);
          setUpdateProjectType(result.data.projectCategory);
          setUpdateImages(result.data.image);
          setUpdateProjectTags(result.data.projectTag);
          setUpdatePortfolioTags(result.data.portfolioTag);
          setIsLoading(false);
        } else if (props.type === "portfolio") {
          const result = await axios.get(
            `${process.env.API_HOST}/portfolios/${props.pid}`
          );
          setData(result.data);
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

  const update = () => {
    let flag = checkIsNotEmpty();
    if (!flag && data) {
      return;
    } else {
      try {
        if (props.type === "project") {
          let image = updateImages.length > 0 ? updateImages[0].data : "";
          let body = {
            title: updateTitle,
            content: updateContent,
            email: data.user.email,
            category: updateCategory,
            huntingField: updateField,
            region: updateRegion,
            projectCategory: updateProjectType,
            tags: updateProjectTags,
            image: image,
          };
          axios.put(`${process.env.API_HOST}/projects/${props.pid}`, body);
          setIsUpdate(false);
          props.onClose();
        } else if (props.type === "portfolio") {
          let image = updateImages.length > 0 ? updateImages[0].data : "";
          let body = {
            title: updateTitle,
            content: updateContent,
            email: data.user.email,
            category: updateCategory,
            huntingField: updateField,
            tags: updatePortfolioTags,
            image: image,
          };
          axios.put(`${process.env.API_HOST}/portfolios/${props.pid}`, body);
          setIsUpdate(false);
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
    if (isEmpty(updateTitle)) {
      alert("제목을 입력하세요");
      return flag;
    }
    if (isEmpty(updateContent)) {
      alert("내용을 입력하세요");
      return flag;
    }
    if (isEmpty(updateCategory)) {
      alert("카테고리를 선택해주세요");
      return flag;
    }
    if (isEmpty(updateField)) {
      alert("구인분야를 선택해주세요");
      return flag;
    }
    if (isEmpty(updateRegion) && props.type === "project") {
      alert("지역을 선택해주세요");
      return flag;
    }
    if (isEmpty(updateProjectType) && props.type === "project") {
      alert("프로젝트 종류를 선택해주세요");
      return flag;
    }
    return true;
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };
  return (
    <>
      <Overlay visible={props.visible} onClick={onMaskClick} />
      <Wrapper tabIndex="-1" visible={props.visible} onClick={onMaskClick}>
        <Inner>
          {isLoading && <p>Loading...</p>}
          {!isLoading && data && !isUpdate && (
            <>
              <Top
                type={props.type}
                title={data.title}
                name={data.user.username}
                profileImage={data.user.image}
                category={data.category}
                field={data.huntingField}
                region={data.region}
                projectCategory={data.projectCategory}
              ></Top>
              <Middle
                type={props.type}
                date={data.createdDate}
                content={data.content}
                image={data.image}
                userEmail={data.user.email}
                pid={data.id}
                tags={
                  props.type === "project" ? data.projectTag : data.portfolioTag
                }
                setIsUpdate={setIsUpdate}
              ></Middle>
              <Bottom
                commentsNum={data.commentsNum}
                comments={data.comments}
                pid={data.id}
              ></Bottom>
            </>
          )}
          {!isLoading && isUpdate && data && (
            <>
              <UpdateTop
                type={props.type}
                setCategory={setUpdateCategory}
                setField={setUpdateField}
                setRegion={setUpdateRegion}
                setProjectType={setUpdateProjectType}
                setTitle={setUpdateTitle}
                profileImage={data.user.image}
                updateTitle={updateTitle}
                updateCategory={updateCategory}
                updateField={updateField}
                updateProjectType={updateProjectType}
                updateRegion={updateRegion}
                isUpdate={isUpdate}
              ></UpdateTop>
              <UpdateMiddle
                type={props.type}
                setContent={setUpdateContent}
                setImages={setUpdateImages}
                updateContent={updateContent}
                updateImages={updateImages}
                isUpdate={isUpdate}
              ></UpdateMiddle>
              <UpdateBottom
                type={props.type}
                onClick={update}
                updateTags={
                  props.type === "project"
                    ? { ...updateProjectTags }
                    : { ...updatePortfolioTags }
                }
                setUpdateTags={
                  props.type === "project"
                    ? setUpdateProjectTags
                    : setUpdatePortfolioTags
                }
                setTags={setTags}
                tags={tags}
                isUpdate={isUpdate}
              ></UpdateBottom>
            </>
          )}
        </Inner>
      </Wrapper>
    </>
  );
}
