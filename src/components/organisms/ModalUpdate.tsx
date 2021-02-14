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
import { Images } from "@src/types/Data";
import Top from "../molecules/ModalWrite/Top";
import Middle from "../molecules/ModalWrite/Middle";
import Bottom from "../molecules/ModalWrite/Bottom";
import UserState from "../../types/User";
import { ImageFile, PageType } from "../atoms/Modal/ModalType";
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
  const [remoteFiles, setRemoteFiles] = useState<Images[]>([]);
  const [remoteRemoveId, setRemoteRemoveId] = useState<number[]>([]);
  const [localFiles, setLocalFiles] = useState<ImageFile[]>([]);
  const [projectSection, setProjectSection] = useState<string>("");
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
        if (data.image !== null) {
          const projectImage = {
            id: data.id,
            image: data.image,
          };
          setRemoteFiles([projectImage]);
        }
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
        setRemoteFiles(data.images);
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
          if (remoteRemoveId.length > 0 && localFiles.length > 0) {
            const formData = new FormData();
            formData.set("image", localFiles[0] as Blob);
            axios.patch(
              `${process.env.API_HOST}/projects/${pid}/image`,
              formData
            );
          }
          if (remoteRemoveId.length > 0 && localFiles.length === 0) {
            axios.delete(`${process.env.API_HOST}/projects/${pid}/image`);
          }
          setTimeout(() => setModalReload(modalReload + 1), 400);
          setIsUpdate(false);
        } else if (page === "portfolio") {
          const portfolioTags = [...tags];
          const body = {
            title,
            content,
            authorEmail,
            category,
            recruitmentField,
            portfolioTags,
          };
          axios.put(`${process.env.API_HOST}/portfolios/${pid}`, body);
          if (remoteRemoveId.length > 0) {
            for (let i = 0; i < remoteRemoveId.length; i += 1) {
              axios.delete(
                `${process.env.API_HOST}/portfolios/image/${remoteRemoveId[i]}`
              );
            }
          }
          if (localFiles.length > 0) {
            for (let i = 0; i < localFiles.length; i += 1) {
              const formData = new FormData();
              formData.append("image", localFiles[i] as Blob);
              axios.post(
                `${process.env.API_HOST}/portfolios/${pid}/image`,
                formData
              );
            }
          }
          setTimeout(() => setModalReload(modalReload + 1), 400);
          setIsUpdate(false);
        }
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
    remoteFiles,
    localFiles,
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
        setRemoteFiles={setRemoteFiles}
        setLocalFiles={setLocalFiles}
        localFiles={localFiles}
        remoteFiles={remoteFiles}
        setRemoteRemoveId={setRemoteRemoveId}
        remoteRemoveId={remoteRemoveId}
        content={content}
      ></Middle>
      <Bottom
        tags={tags}
        setTags={setTags}
        onClick={update}
        isUpdate={true}
      ></Bottom>
    </Modal>
  );
}

export default React.memo(ModalUpdate);
