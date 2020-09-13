import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/ModalWrite/Top";
import Middle from "../molecules/ModalWrite/Middle";
import Bottom from "../molecules/ModalWrite/Bottom";
import ModalProps from "../../types/Modal";
import DataProps from "../../types/Data";
import { State } from "../../types/User";

type File = Blob & {
  invalid: boolean;
  data: string;
};

function ModalUpdate(props: ModalProps) {
  const state = useSelector((state: { user: State }) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");
  const [projectType, setProjectType] = useState("");
  const [images, setImages] = useState<string[]>([]);
  //const [images, setImages] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>([]);
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

  /*
 * 원래 jsx 코드
 * 
  if (tags.length > 0 && typeof tags[0] === "object") {
    let tagArray:string[] = [];
    tags.map((value) => tagArray.push(value.tag));
    setTags(tagArray);
  }
*/
  if (tags.length > 0 && typeof tags[0] === "object") {
    let tagArray: string[] = [];
    tags.map((value: string) => tagArray.push(value));
    setTags(tagArray);
  }
  const update = useCallback(() => {
    let flag = checkIsNotEmpty();
    if (!flag) {
      return;
    } else {
      try {
        if (props.type === "project") {
          //let image = images.length > 0 ? images[0].data : "";
          let image = images.length > 0 ? images[0] : "";
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
          //let image = images.length > 0 ? images[0].data : "";
          let image = images.length > 0 ? images[0] : "";
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
      <Overlay visible={!isLoading} onClick={onMaskClick} />
      <Wrapper visible={!isLoading} onClick={onMaskClick}>
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
  pid: string | string[],
  type: "project" | "portfolio",
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setContent: React.Dispatch<React.SetStateAction<string>>,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  setField: React.Dispatch<React.SetStateAction<string>>,
  setRegion: React.Dispatch<React.SetStateAction<string>>,
  setProjectType: React.Dispatch<React.SetStateAction<string>>,
  //  setImages: React.Dispatch<React.SetStateAction<File[]>>,
  setImages: React.Dispatch<React.SetStateAction<string[]>>,
  setTags: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const [data, setData] = useState<DataProps>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (type === "project") {
          const result = await axios.get<DataProps>(
            `${process.env.API_HOST}/projects/${pid}`
          );
          setData(result.data);
          setTitle(result.data.title);
          setContent(result.data.content);
          setCategory(result.data.category);
          setField(result.data.huntingField);
          setRegion(result.data.region);
          setProjectType(result.data.projectCategory);
          /*if (!result.data.image) {
            setImages([{ data: result.data.image }]);
          }*/
          if (!result.data.image) {
            setImages([result.data.image]);
          }
          let jsonProjectTagArray: string[] = [];
          jsonProjectTagArray = Object.entries(result.data.projectTag).map(
            ([value]) => value
          );
          setTags(jsonProjectTagArray);
          setIsLoading(false);
        } else if (type === "portfolio") {
          const result = await axios.get<DataProps>(
            `${process.env.API_HOST}/portfolios/${pid}`
          );
          setData(result.data);
          setTitle(result.data.title);
          setContent(result.data.content);
          setCategory(result.data.category);
          setField(result.data.huntingField);
          /*if (result.data.image != "") {
            setImages([{ data: image }]);
          }*/
          if (result.data.image != "") {
            setImages([result.data.image]);
          }
          let jsonPortfolioTagArray: string[] = [];
          jsonPortfolioTagArray = Object.entries(result.data.portfolioTag).map(
            ([value]) => value
          );
          setTags(jsonPortfolioTagArray);
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
