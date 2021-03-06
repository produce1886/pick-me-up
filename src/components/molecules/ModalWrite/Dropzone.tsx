import { useState, useEffect } from "react";
import styled from "styled-components";
import Colors from "@colors";
import { Images } from "@src/types/Data";
import { ImageFile } from "@src/components/atoms/Modal/ModalType";
import Text from "../../atoms/Text/index";
import Upload from "../../atoms/Icon/Upload";
import Close from "../../atoms/Icon/Close";

type DropzoneProps = {
  page: string;
  localFiles: ImageFile[];
  remoteFiles: Images[];
  setLocalFiles: React.Dispatch<React.SetStateAction<ImageFile[]>>;
  setRemoteFiles: React.Dispatch<React.SetStateAction<Images[]>>;
  setRemoteRemoveId: React.Dispatch<React.SetStateAction<number[]>>;
  remoteRemoveId: number[];
};

export default function Dropzone({
  page,
  localFiles,
  remoteFiles,
  setLocalFiles,
  setRemoteFiles,
  setRemoteRemoveId,
  remoteRemoveId,
}: DropzoneProps) {
  const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const fileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    if (files.length > 0 && page === "project") {
      if (localFiles.length + remoteFiles.length === 1) {
        alert("이미지는 1개까지 가능합니다.");
      } else {
        for (let i = 0; i < files.length; i += 1) {
          handleFile(files[i]);
        }
      }
    } else if (localFiles.length + remoteFiles.length === 5) {
      alert("이미지는 5개까지 가능합니다.");
    } else {
      for (let i = 0; i < files.length; i += 1) {
        handleFile(files[i]);
      }
    }
  };

  const validateFile = (file: File) => {
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/x-icon",
    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  const processLocalImage = (file: File) => {
    const reader = new FileReader();
    const inputFile = file as ImageFile;
    reader.onloadend = () => {
      inputFile.data = reader.result as string;
      setLocalFiles([...localFiles, inputFile]);
    };
    reader.readAsDataURL(inputFile);
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      processLocalImage(file);
    } else {
      alert("파일 형식이 올바르지 않습니다.");
    }
  };

  const removeLocalFile = (file: ImageFile) => {
    const currentIndex = localFiles.indexOf(file);
    const newArray = [...localFiles];
    newArray.splice(currentIndex, 1);
    setLocalFiles(newArray);
  };

  const removeRemoteFile = (file: Images) => {
    const currentIndex = remoteFiles.indexOf(file);
    const currentId = file.id;
    const newFileArray = [...remoteFiles];
    newFileArray.splice(currentIndex, 1);
    const newIdArray = [...remoteRemoveId];
    newIdArray.push(currentId);
    setRemoteRemoveId(newIdArray);
    setRemoteFiles(newFileArray);
  };

  const renderPreviewImages = () => {
    return (
      <PreviewContainer>
        {localFiles.map((localFile, i) => (
          <PreviewImage key={i}>
            <XButton onClick={() => removeLocalFile(localFile)}>
              <Close
                style={{ width: "1rem", height: "1rem" }}
                fill={Colors.BLACK}
              ></Close>
            </XButton>
            <Img
              src={localFile.data}
              style={{ width: "5rem", height: "5rem", marginRight: "1rem" }}
            />
          </PreviewImage>
        ))}
        {remoteFiles.map((remoteFile, i) => (
          <PreviewImage key={i}>
            <XButton onClick={() => removeRemoteFile(remoteFile)}>
              <Close
                style={{ width: "1rem", height: "1rem" }}
                fill={Colors.BLACK}
              ></Close>
            </XButton>
            <Img
              src={remoteFile.image}
              style={{ width: "5rem", height: "5rem", marginRight: "1rem" }}
            />
          </PreviewImage>
        ))}
      </PreviewContainer>
    );
  };
  return (
    <Container>
      <DropContainer
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <Upload
          style={{
            width: "2rem",
            height: "2rem",
            marginBottom: "0.5rem",
          }}
        ></Upload>
        <Text level={3} color={Colors.DEEP_GREY}>
          파일을 드래그해 놓아주세요.
        </Text>
      </DropContainer>
      {(localFiles.length > 0 || remoteFiles.length > 0) &&
        renderPreviewImages()}
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 1.5rem 0 0 0;
`;

const DropContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem dashed ${Colors.PURPLE};
  width: 100%;
  height: 10rem;
  box-sizing: border-box;
`;

const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 6rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`;

const XButton = styled.button`
  position: absolute;
  width: 1rem;
  height: 1rem;
  border: none;
  background: transparent;
  top: -0.3rem;
  right: 0.65rem;
  box-sizing: border-box;
  padding: unset;
`;

const PreviewImage = styled.div`
  position: relative;
  width: fit-content;
  margin-top: 0.8rem;
  height: fit-content;
  align-items: center;
  display: flex;
`;

const Img = styled.img``;
