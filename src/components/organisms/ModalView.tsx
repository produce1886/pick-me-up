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
import { ModalProps } from "../../types/Modal";
import DataProps from "../../types/Data";

function ModalView(props: ModalProps) {
  const { data, isLoading } = getData(
    props.pid,
    props.types,
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
          {isLoading && !data && props.types === "project" && (
            <ProjectSkeleton></ProjectSkeleton>
          )}
          {isLoading && !data && props.types === "portfolio" && (
            <PortfolioSkeleton></PortfolioSkeleton>
          )}
          {!isLoading && data && (
            <>
              <Top
                type={props.types}
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
                type={props.types}
                date={data.createdDate}
                content={data.content}
                image={data.image}
                userEmail={data.user.email}
                pid={data.id}
                tags={
                  props.types === "project"
                    ? data.projectTag
                    : data.portfolioTag
                }
                setUpdate={props.setUpdate}
                listReload={props.reload}
                setListReload={props.setReload}
              ></Middle>
              <Bottom
                type={props.types}
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
  type: "project" | "portfolio",
  modalReload: number
) => {
  const [data, setData] = useState<DataProps>();
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
          setIsLoading(false);
        } else if (type === "portfolio") {
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
