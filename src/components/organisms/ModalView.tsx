import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/ModalView/Top";
import Middle from "../molecules/ModalView/Middle";
import Bottom from "../molecules/ModalView/Bottom";
import ProjectSkeleton from "../_skeletons/project/ProjectView";
import PortfolioSkeleton from "../_skeletons/portfolio/PortfolioView";
import { ModalProps, ModalType } from "../atoms/Modal/ModalType";
import DataProps from "../../types/Data";

function ModalView(props: ModalProps) {
  const { data, isLoading } = getData(
    props.pid,
    props.modalType,
    props.modalReload
  );

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
          {isLoading && !data && props.modalType === "project" && (
            <ProjectSkeleton></ProjectSkeleton>
          )}
          {isLoading && !data && props.modalType === "portfolio" && (
            <PortfolioSkeleton></PortfolioSkeleton>
          )}
          {!isLoading && data && (
            <>
              <Top
                type={props.modalType}
                title={data.title}
                uid={data.user.id}
                name={data.user.username}
                profileImage={data.user.image}
                category={data.category}
                field={data.huntingField}
                region={data.region}
                projectCategory={data.projectCategory}
              ></Top>
              <Middle
                type={props.modalType}
                date={data.createdDate}
                content={data.content}
                image={data.image}
                userEmail={data.user.email}
                pid={data.id}
                tags={
                  props.modalType === "project"
                    ? data.projectTag
                    : data.portfolioTag
                }
                setUpdate={props.setUpdate}
                listReload={props.reload}
                setListReload={props.setReload}
              ></Middle>
              <Bottom
                type={props.modalType}
                commentsNum={data.commentsNum}
                comments={data.comments}
                pid={data.id}
                modalReload={props.modalReload}
                setModalReload={props.setModalReload}
              ></Bottom>
            </>
          )}
        </Inner>
      </Wrapper>
    </>
  );
}

export default React.memo(ModalView);

const getData = (
  pid: string | string[],
  modalType: ModalType,
  modalReload: number
) => {
  const [data, setData] = useState<DataProps>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (modalType === "project") {
          const result = await axios.get(
            `${process.env.API_HOST}/projects/${pid}`
          );
          setData(result.data);
          setIsLoading(false);
        } else if (modalType === "portfolio") {
          const result = await axios.get(
            `${process.env.API_HOST}/portfolios/${pid}`
          );
          setData(result.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [modalReload]);
  return { data, isLoading };
};
