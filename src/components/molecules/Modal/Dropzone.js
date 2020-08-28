import { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Upload from "../../atoms/Icon/Upload";
import Close from "../../atoms/Icon/Close";

export default function Dropzone(props) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [preview, setPreview] = useState([]);

  useEffect(() => {
    setSelectedFiles(props.images);
    setPreview(props.images);
  }, [props.images]);

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
    if (files.length > 0 && props.type === "project") {
      if (selectedFiles.length === 1) {
        alert("이미지는 1개까지 가능합니다.");
      } else {
        for (let i = 0; i < files.length; i++) {
          handleFile(files[i]);
        }
      }
    } else {
      if (selectedFiles.length === 5) {
        alert("이미지는 5개까지 가능합니다.");
      } else {
        for (let i = 0; i < files.length; i++) {
          handleFile(files[i]);
        }
      }
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
  };

  const processImage = (file) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      file["invalid"] = false; // add a new property called invalid
      file["data"] = reader.result;
      setPreview([...preview, file]);
    };
    reader.readAsDataURL(file);
  };

  const handleFile = (file) => {
    if (validateFile(file)) {
      processImage(file);
      setSelectedFiles([...selectedFiles, file]);
      props.setImages([...props.images, file]);
    } else {
      alert("파일 형식이 올바르지 않습니다.");
    }
  };

  const removeFile = (file) => {
    const currentIndex = selectedFiles.indexOf(file);
    let newArray = [...selectedFiles];
    newArray.splice(currentIndex, 1);
    setSelectedFiles(newArray);
    setPreview(newArray);
    props.setImages(newArray);
  };

  const renderPreviewImages = () => {
    if (preview.length > 0) {
      return (
        <PreviewContainer>
          {preview.map((file, i) => (
            <PreviewImage key={i}>
              <XButton onClick={() => removeFile(file)}>
                <Close
                  style={{ width: "1rem", height: "1rem" }}
                  fill="#232735"
                ></Close>
              </XButton>
              <Img
                src={file.data}
                style={{ width: "5rem", height: "5rem", marginRight: "1rem" }}
              />
            </PreviewImage>
          ))}
        </PreviewContainer>
      );
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
        <Upload
          style={{
            width: "2rem",
            height: "2rem",
            marginBottom: "0.5rem",
          }}
        ></Upload>
        <Text level={3} color="#8b90a0">
          파일을 드래그해 놓아주세요.
        </Text>
      </DropContainer>
      {renderPreviewImages()}
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
  border: 0.1rem dashed #c8acee;
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
