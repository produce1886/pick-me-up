import React, { useState, useCallback, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Images } from "@src/types/Data";
import Top from "../molecules/ModalWrite/Top";
import Middle from "../molecules/ModalWrite/Middle";
import Bottom from "../molecules/ModalWrite/Bottom";
import UserState from "../../types/User";
import { PageType, ImageFile } from "../atoms/Modal/ModalType";
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
  const authorEmail = userState.userData.email;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [recruitmentField, setRecruitmentField] = useState("");
  const [region, setRegion] = useState("");
  const [projectSection, setProjectSection] = useState("");
  const [localFiles, setLocalFiles] = useState<ImageFile[]>([]);
  const [remoteFiles, setRemoteFiles] = useState<Images[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const post = useCallback(async () => {
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
            authorEmail,
            title,
            content,
            category,
            recruitmentField,
            region,
            projectSection,
            projectTags,
          };
          const data = await axios.post(
            `${process.env.API_HOST}/projects`,
            body
          );
          const pid = data.headers.location.split("/")[2];
          if (localFiles.length > 0) {
            const formData = new FormData();
            formData.append("image", localFiles[0] as Blob);
            axios.patch(
              `${process.env.API_HOST}/projects/${pid}/image`,
              formData
            );
          }
          setTimeout(() => setReload(reload + 1), 300);
          onClose();
        } else if (page === "portfolio") {
          const portfolioTags = [...tags];
          const images: string[] = [];
          const body = {
            title,
            content,
            authorEmail,
            category,
            recruitmentField,
            portfolioTags,
            images,
          };
          const data = await axios.post(
            `${process.env.API_HOST}/portfolios`,
            body
          );
          const pid = data.headers.location.split("/")[2];
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
          setTimeout(() => setReload(reload + 1), 300);
          onClose();
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
    localFiles,
  ]);

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Top
        page={page}
        setCategory={setCategory}
        setRecruitmentField={setRecruitmentField}
        setRegion={setRegion}
        setProjectSection={setProjectSection}
        setTitle={setTitle}
        title={title}
        profileImage={userState.userData.image}
      ></Top>
      <Middle
        page={page}
        setContent={setContent}
        setLocalFiles={setLocalFiles}
        localFiles={localFiles}
        remoteFiles={remoteFiles}
        setRemoteFiles={setRemoteFiles}
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
