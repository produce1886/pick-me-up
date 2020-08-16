import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Text from "../../atoms/Text";
import Upload from "../../atoms/Icon/Upload";
import Close from "../../atoms/Icon/Close";
export default function Dropzone() {
  const [selectedFiles, setSelectFile] = useState([]); //전체 file들
  const [imagePreviewUrl, setImagePreviewUrl] = useState([]);

  const removeFile = (data) => {
    const newArray = selectedFiles.filter((file) => file.data !== data);
    setSelectFile([newArray]);
  }; // x 누를 시 선택된 파일 제거

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };
  const validateFile = (file) => {
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
  }; //file 형식 검증
  const imagePreview = (files) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl((prevArray) => [...prevArray, reader.result]);
      //add to an array so we can display the name of file
      files["invalid"] = false; // add a new property called invalid
      files["data"] = reader.result;
    };
    reader.readAsDataURL(files);
  };

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        imagePreview(files[i]);
        setSelectFile((prevArray) => [...prevArray, files[i]]);
        console.log(selectedFiles, imagePreviewUrl);
      } else {
        alert("파일 형식이 올바르지 않습니다.");
      }
    }
  };
  return (
    <Container>
      <DropContainer
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <FileDilsplayContainer>
          <UploadBox>
            <Upload
              style={{
                width: "2rem",
                height: "2rem",
                position: "absolute",
              }}
            ></Upload>
            <DropMessage>
              <Text level={3} color="#8b90a0">
                파일을 드래그해 놓아주세요.
              </Text>
            </DropMessage>
          </UploadBox>
        </FileDilsplayContainer>
      </DropContainer>
      <FileStatusBar>
        {selectedFiles.map((file, i) => (
          <PreviewImage key={i}>
            <XButton onClick={removeFile}>
              <Close
                style={{ width: "1rem", height: "1rem" }}
                fill="#232735"
              ></Close>
            </XButton>

            {file ? (
              <img
                src={file.data}
                style={{ width: "5rem", height: "5rem", marginRight: "1rem" }}
              />
            ) : null}
          </PreviewImage>
        ))}
      </FileStatusBar>
    </Container>
  );
}
const DropMessage = styled.div`
  margin: 4rem 0 0 0;
  text-align: center;
`;
const XButton = styled.button`
  position: absolute;
  width: fit-content;
  height: fit-content;
  border: none;
  background: transparent;
  top: -0.3rem;
  right: 0.2rem;
`;
const UploadBox = styled.div`
  width: fit-content;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  border: none;
  background: transparent;
`;
const Container = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 1.5rem 0 0 0;
`;
const FileDilsplayContainer = styled.div`
  width: 100%;
  height: 10rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;
const PreviewImage = styled.div`
  position: relative;
  width: fit-content;
  margin-top: 0.8rem;
  height: fit-content;
  align-items: center;
  display: flex;
`;
const FileStatusBar = styled.div`
  position: relative;
  width: 100%;
  height: 6rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`;

const DropContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem dashed #c8acee;
  width: 100%;
  height: 10rem;
`;
