import React, {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import checkIsNotEmpty from "@src/lib/utils/CheckIsNotEmpty";
import ProjectHooks from "@src/lib/hooks/Project";
import PortfolioHooks from "@src/lib/hooks/Portfolio";
import Top from "../molecules/ModalWrite/Top";
import Middle from "../molecules/ModalWrite/Middle";
import Bottom from "../molecules/ModalWrite/Bottom";
import UserState from "../../types/User";
import { PageType } from "../atoms/Modal/ModalType";
import Modal from "../atoms/Modal/index";

type ModalUpdateProps = {
  page: PageType;
  pid: string | string[];
  onClose: () => void;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  modalReload: number;
  setModalReload: Dispatch<SetStateAction<number>>;
};

function ModalUpdate({
  pid,
  page,
  onClose,
  setIsUpdate,
  modalReload,
  setModalReload,
}: ModalUpdateProps) {
  const userState = useSelector((state: { user: UserState }) => state.user);
  const authorEmail = userState.userData.email;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [recruitmentField, setRecruitmentField] = useState("");
  const [region, setRegion] = useState("");
  const [projectSection, setProjectSection] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  let getData;
  if (page === "project") {
    getData = ProjectHooks.useProjectGetApi;
  } else if (page === "portfolio") {
    getData = PortfolioHooks.usePortfolioGetApi;
  }
  const { isLoading, isError, data } = getData([pid, modalReload]);

  useEffect(() => {
    if (data) {
      if ("projectTags" in data) {
        setTitle(data.title);
        setContent(data.content);
        setCategory(data.category);
        setRecruitmentField(data.recruitmentField);
        setRegion(data.region);
        setProjectSection(data.projectSection);
        let jsonProjectTagArray: string[] = [];
        jsonProjectTagArray = Object.values(data.projectTags).map(
          (value) => value.tagName
        );
        setTags(jsonProjectTagArray);
      } else {
        setTitle(data.title);
        setContent(data.content);
        setCategory(data.category);
        setRecruitmentField(data.recruitmentField);
        let jsonPortfolioTagArray: string[] = [];
        jsonPortfolioTagArray = Object.values(data.portfolioTags).map(
          (value) => value.tagName
        );
        setTags(jsonPortfolioTagArray);
      }
    }
  }, [data]);

  if (tags.length > 0 && typeof tags[0] === "object") {
    const tagArray: string[] = [];
    tags.map((value: string) => tagArray.push(value));
    setTags(tagArray);
  }

  const update = useCallback(() => {
    const flag = checkIsNotEmpty(
      title,
      content,
      category,
      recruitmentField,
      region,
      projectSection,
      page
    );
    if (flag) {
      try {
        if (page === "project") {
          const projectTags = [...tags];
          const body = {
            title,
            content,
            authorEmail,
            category,
            recruitmentField,
            region,
            projectSection,
            projectTags,
          };
          axios.put(`${process.env.API_HOST}/projects/${pid}`, body);
          setTimeout(() => setModalReload(modalReload + 1), 400);
          setIsUpdate(false);
        } else if (page === "portfolio") {
          const image = images.length > 0 ? images[0] : "";
          const body = {
            title,
            content,
            category,
            recruitmentField,
            tags,
            image,
          };
          axios.put(`${process.env.API_HOST}/portfolios/${pid}`, body);
          setTimeout(() => setModalReload(modalReload + 1), 400);
          setIsUpdate(false);
        }
        /* 나중에 아래 코드로 변경 예정(백엔드 api 수정 완료 시)
        else if (props.page === "portfolio") {
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
  }, [
    title,
    content,
    category,
    recruitmentField,
    region,
    projectSection,
    tags,
    images,
  ]);
  return (
    <Modal isVisible={!isLoading} onClose={onClose}>
      <Top
        page={page}
        title={title}
        category={category}
        recruitmentField={recruitmentField}
        region={region}
        projectSection={projectSection}
        setCategory={setCategory}
        setRecruitmentField={setRecruitmentField}
        setRegion={setRegion}
        setProjectSection={setProjectSection}
        setTitle={setTitle}
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
        page={page}
        tags={tags}
        setTags={setTags}
        onClick={update}
        isUpdate={true}
      ></Bottom>
    </Modal>
  );
}

export default React.memo(ModalUpdate);
