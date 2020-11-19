import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import UpdateModalHooks from "@src/lib/api/Modal";
import Top from "../molecules/ModalWrite/Top";
import Middle from "../molecules/ModalWrite/Middle";
import Bottom from "../molecules/ModalWrite/Bottom";
import DataProps from "../../types/Data";
import UserState from "../../types/User";
import { ModalType } from "../atoms/Modal/ModalType";
import Modal from "../atoms/Modal/index";

type ModalUpdateProps = {
  modalType: ModalType;
  pid: string | string[];
  onClose: () => void;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  modalReload: number;
  setModalReload: Dispatch<SetStateAction<number>>;
};

function ModalUpdate({
  pid,
  modalType,
  onClose,
  setIsUpdate,
  modalReload,
  setModalReload,
}: ModalUpdateProps) {
  const userState = useSelector((state: { user: UserState }) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");
  const [projectType, setProjectType] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const { isLoading } = getData(
    pid,
    modalType,
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
    const tagArray: string[] = [];
    tags.map((value: string) => tagArray.push(value));
    setTags(tagArray);
  }

  return (
    <Modal isVisible={!isLoading} onClose={onClose}>
      <Top
        modalType={modalType}
        title={title}
        setCategory={setCategory}
        setField={setField}
        setRegion={setRegion}
        setProjectType={setProjectType}
        setTitle={setTitle}
        profileImage={userState.userData.image}
      ></Top>
      <Middle
        modalType={modalType}
        setContent={setContent}
        setImages={setImages}
        images={images}
        content={content}
      ></Middle>
      <Bottom
        tags={tags}
        setTags={setTags}
        onClick={() =>
          UpdateModalHooks.updateModal(
            title,
            content,
            category,
            field,
            region,
            projectType,
            modalType,
            tags,
            pid,
            images,
            setIsUpdate,
            modalReload,
            setModalReload
          )
        }
        isUpdate={true}
      ></Bottom>
    </Modal>
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
          if (result.data.image !== "") {
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
        console.log(error);
      }
    };
    if (!data) {
      fetchData();
    }
  }, []);
  return { isLoading };
};
