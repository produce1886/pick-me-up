import { useState, useEffect } from "react";
import styled from "styled-components";
import Colors from "@colors";
import Text from "../../atoms/Text/index";
import Upload from "../../atoms/Icon/Upload";
import Close from "../../atoms/Icon/Close";
import { ImageFile } from "../../atoms/Modal/ModalType";

type DropzoneProps = {
  page: string;
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  images: string[];
};

export default function Dropzone({
  page,
  setImages,
  images,
}: DropzoneProps) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [preview, setPreview] = useState([]);

  useEffect(() => {
    setSelectedFiles(images);
    setPreview(images);
  }, [images]);

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
      if (selectedFiles.length === 1) {
        alert("이미지는 1개까지 가능합니다.");
      } else {
        for (let i = 0; i < files.length; i += 1) {
          handleFile(files[i]);
        }
      }
    } else if (selectedFiles.length === 5) {
      alert("이미지는 5개까지 가능합니다.");
    } else {
      for (let i = 0; i < files.length; i += 1) {
        handleFile(files[i]);
      }
    }
  };

  const validateFile = (file: ImageFile) => {
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

  const processImage = (file: ImageFile) => {
    const reader = new FileReader();
    const inputFile = file;
    reader.onloadend = () => {
      inputFile.invalid = false; // add a new property called invalid
      inputFile.data = reader.result as string;
      // File의 type을 ImageFile로 수정하였고, images state의 type은 string으로 모두 변경함
      setPreview([...preview, inputFile]);
    };
    reader.readAsDataURL(inputFile);
  };

  const handleFile = (file: ImageFile) => {
    if (validateFile(file)) {
      processImage(file);
      setSelectedFiles([...selectedFiles, file]);
      setImages([...images, file.data]);
    } else {
      alert("파일 형식이 올바르지 않습니다.");
    }
  };

  const removeFile = (file: ImageFile) => {
    const currentIndex = selectedFiles.indexOf(file);
    const newArray = [...selectedFiles];
    newArray.splice(currentIndex, 1);
    setSelectedFiles(newArray);
    setPreview(newArray);
    setImages(newArray);
  };

  const renderPreviewImages = () => {
    return (
      <PreviewContainer>
        {preview.map((file, i) => (
          <PreviewImage key={i}>
            <XButton onClick={() => removeFile(file)}>
              <Close
                style={{ width: "1rem", height: "1rem" }}
                fill={Colors.BLACK}
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
      {preview.length > 0 && renderPreviewImages()}
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
