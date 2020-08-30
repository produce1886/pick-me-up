import { useState, useEffect } from "react";
import axios from "axios";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/ModalView/Top";
import Middle from "../molecules/ModalView/Middle";
import Bottom from "../molecules/ModalView/Bottom";

export default function ModalView(props) {
  const { data, isLoading } = getData(props.pid, props.type, props.modalReload);

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
          {!isLoading && data && (
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
                setUpdate={props.setUpdate}
                listReload={props.reload}
                setListReload={props.setReload}
              ></Middle>
              <Bottom
                commentsNum={data.commentsNum}
                comments={data.comments}
                pid={data.id}
              ></Bottom>
            </>
          )}
        </Inner>
      </Wrapper>
    </>
  );
}

const getData = (pid, type, modalReload) => {
  const [data, setData] = useState();
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
    if (!data) {
      fetchData();
    }
  }, [modalReload]);
  return { data, isLoading };
};
