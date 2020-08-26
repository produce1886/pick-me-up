import { useState, useEffect } from "react";
import axios from "axios";
import Overlay from "../atoms/Modal/Overlay";
import Wrapper from "../atoms/Modal/Wrapper";
import Inner from "../atoms/Modal/Inner";
import Top from "../molecules/ModalView/Top";
import Middle from "../molecules/ModalView/Middle";
import Bottom from "../molecules/ModalView/Bottom";

export default function ModalView(props) {
  const { project, isLoading } = getProject(props.pid);

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
          {!isLoading && project && (
            <>
              <Top
                type={props.type}
                title={project.title}
                name={project.user.username}
                profileImage={project.user.image}
                category={project.category}
                field={project.huntingField}
                region={project.region}
                projectCategory={project.projectCategory}
              ></Top>
              <Middle
                type={props.type}
                date={project.createdDate}
                content={project.content}
                image={project.image}
                userEmail={project.user.email}
                pid={project.id}
                tags={project.projectTag}
              ></Middle>
              <Bottom
                commentsNum={project.commentsNum}
                comments={project.comments}
                pid={project.id}
              ></Bottom>
            </>
          )}
        </Inner>
      </Wrapper>
    </>
  );
}

const getProject = (pid) => {
  const [project, setProject] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(
          `${process.env.API_HOST}/projects/${pid}`
        );
        setProject(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    if (!project) {
      fetchData();
    }
  }, []);
  return { project, isLoading };
};
