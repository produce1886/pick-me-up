import React from "react";
import ProjectHooks from "@src/lib/hooks/Project";
import PortfolioHooks from "@src/lib/hooks/Portfolio";
import Modal from "../atoms/Modal/index";
import Top from "../molecules/ModalView/Top";
import Middle from "../molecules/ModalView/Middle";
import Bottom from "../molecules/ModalView/Bottom";
import ProjectSkeleton from "../_skeletons/project/ProjectView";
import PortfolioSkeleton from "../_skeletons/portfolio/PortfolioView";
import { ModalProps } from "../atoms/Modal/ModalType";

function ModalView(props: ModalProps) {
  let getData;
  if (props.page === "project") {
    getData = ProjectHooks.useProjectGetApi;
  } else if (props.page === "portfolio") {
    getData = PortfolioHooks.usePortfolioGetApi;
  }
  const { isLoading, isError, data } = getData([props.pid, props.modalReload]);

  if (isLoading) {
    return (
      <>
        {props.page === "project" && (
          <ProjectSkeleton
            isVisible={props.isVisible}
            onClose={props.onClose}
          ></ProjectSkeleton>
        )}
        {props.page === "portfolio" && (
          <PortfolioSkeleton
            isVisible={props.isVisible}
            onClose={props.onClose}
          ></PortfolioSkeleton>
        )}
      </>
    );
  }

  if (isError) alert("에러가 발생했습니다");

  return (
    <Modal isVisible={props.isVisible} onClose={props.onClose}>
      {data && (
        <>
          <Top
            page={props.page}
            title={data.title}
            uid={data.user.id}
            profileImage={data.user.image}
            category={data.category}
            recruitmentField={data.recruitmentField}
            region={data.region}
            projectSection={data.projectSection}
          ></Top>
          <Middle
            page={props.page}
            date={data.createdDate.split("T")[0]}
            content={data.content}
            image={data.image}
            userEmail={data.user.email}
            pid={data.id}
            tags={
              props.page === "project" ? data.projectTags : data.portfolioTags
            }
            setUpdate={props.setIsUpdate}
            listReload={props.reload}
            setListReload={props.setReload}
          ></Middle>
          <Bottom
            page={props.page}
            commentsNum={data.commentsNum}
            comments={data.comments}
            pid={data.id}
            modalReload={props.modalReload}
            setModalReload={props.setModalReload}
          ></Bottom>
        </>
      )}
    </Modal>
  );
}

export default React.memo(ModalView);
