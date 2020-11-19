import { useCallback } from "react";
import axios from "axios";
import { ModalType } from "@src/components/atoms/Modal/ModalType";
import checkIsNotEmpty from "../utils/CheckIsNotEmpty";

const updateModal = (
  title: string,
  content: string,
  category: string,
  field: string,
  region: string,
  projectType: string,
  modalType: ModalType,
  tags: string[],
  pid: string,
  images: string[],
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>,
  modalReload: number,
  setModalReload: React.Dispatch<React.SetStateAction<number>>
) => {
  useCallback(() => {
    const flag = checkIsNotEmpty(
      title,
      content,
      category,
      field,
      region,
      projectType,
      modalType
    );
    const updateData = async () => {
      try {
        if (modalType === "project") {
          const image = images.length > 0 ? images[0] : "";
          const body = {
            title,
            content,
            category,
            huntingField: field,
            region,
            projectCategory: projectType,
            tags,
            image,
          };
          axios.put(`${process.env.API_HOST}/projects/${pid}`, body);
          setTimeout(() => setModalReload(modalReload + 1), 400);
          setIsUpdate(false);
        } else if (modalType === "portfolio") {
          const image = images.length > 0 ? images[0] : "";
          const body = {
            title,
            content,
            category,
            huntingField: field,
            tags,
            image,
          };
          axios.put(`${process.env.API_HOST}/portfolios/${pid}`, body);
          setTimeout(() => setModalReload(modalReload + 1), 400);
          setIsUpdate(false);
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
    };
    if (flag) {
      updateData();
    }
  }, [title, content, category, field, region, projectType, tags, images]);
};

const UpdatModalHooks = { updateModal };

export default UpdatModalHooks;
