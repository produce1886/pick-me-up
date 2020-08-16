import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Text from "../../atoms/Text";
import File from "../../atoms/Icon/FileLogo";
import Upload from "../../atoms/Icon/Upload";
export default function Dropzone() {
  const [selectedFiles, setSelectFile] = useState([]); //전체 file들
  const [errorMessage, setError] = useState(""); //에러메시지
  const [duplicateFiles, setDuplicateFiles] = useState([]); //중복파일 방지 state
  useEffect(() => {
    let filteredArray = selectedFiles.reduce((file, current) => {
      const x = file.find((item) => item.name === current.name);
      if (!x) {
        return file.concat([current]);
      } else {
        return file;
      }
    }, []);
    setDuplicateFiles([...filteredArray]);
  }, [selectedFiles]); //중복 파일 제거 검증

  const removeFile = (name) => {
    const validFileIndex = duplicateFiles.findIndex((e) => e.name === name);
    // find the index of the item
    duplicateFiles.splice(validFileIndex, 1);
    // remove the item from array
    setDuplicateFiles([...duplicateFiles]);
    // update validFiles array
    const selectedFileIndex = selectedFiles.findIndex((e) => e.name === name);
    selectedFiles.splice(selectedFileIndex, 1);
    // update selectedFiles array also
    setSelectFile([...selectedFiles]);
  }; // x 누를 시 선택된 파일 제거

  const fileSize = (size) => {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }; //file 크기 계산

  const fileType = (fileName) => {
    return (
      fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
      fileName
    );
  }; //file type 계산

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
  const addFile = (e) => {
    const clickedfiles = Array.from(e.target.files);
    if (clickedfiles.length) {
      handleFiles(clickedfiles);
    }
  };
  const upload = () => {
    document.getElementById("multi").click();
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

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectFile((prevArray) => [...prevArray, files[i]]);
        // add to an array so we can display the name of file
        files[i]["invalid"] = false; // add a new property called invalid
        console.log(selectedFiles);
      } else {
        files[i]["invalid"] = true; // add a new property called invalid
        setSelectFile((prevArray) => [...prevArray, files[i]]); // add to the same array so we can display the name of the file
        setError("파일 형식이 올바르지 않습니다."); // set error message
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
          <UploadBox onClick={upload}>
            <input
              type="file"
              id="multi"
              onChange={addFile}
              multiple
              style={{ display: "none" }}
            />
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
      {duplicateFiles.map((data, i) => (
        <FileStatusBar
          key={i}
          onClick={
            !data.invalid
              ? () => openImageModal(data)
              : () => removeFile(data.name)
          }
        >
          <File
            style={{
              width: "2rem",
              height: "2rem",
              position: "absolute",
              marginRight: "0.5rem",
            }}
          ></File>
          <FileType>
            <Text level={1} line="1.08rem" weight={700}>
              {fileType(data.name)}
            </Text>
          </FileType>
          <Filename>
            <Text level={1} color="#c8acee">
              {data.name}
            </Text>
          </Filename>
          <FileSize>
            <Text level={1} weight={700} color="#c8acee">
              ({fileSize(data.size)})
            </Text>
          </FileSize>
          {data.invalid && (
            <FileErrorMessage>
              <Text level={1} weight={700} color="red">
                {errorMessage}
              </Text>
            </FileErrorMessage>
          )}
          <FileRemove onClick={() => removeFile(data.name)}>
            <Text line="1.08rem" level={2}>
              X
            </Text>
          </FileRemove>
        </FileStatusBar>
      ))}
    </Container>
  );
}
const DropMessage = styled.div`
  margin: 4rem 0 0 0;
  text-align: center;
`;
const UploadBox = styled.button`
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
  margin: 3.5rem 0 0 0;
`;
const FileDilsplayContainer = styled.div`
  width: 100%;
  height: 10rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;
const FileStatusBar = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0.8rem;
  height: 2.5rem;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  flex-direction: row;
  display: flex;
`;
const Filename = styled.div`
  display: inline-block;
  margin-left: 2rem;
`;
const FileErrorMessage = styled.div`
  display: inline-block;
  margin-right: 0.2rem;
  flex-direction: row;
  width: fit-content;
  align-items: center;
`;
const FileRemove = styled.div`
  position: absolute;
  top: 0.4rem;
  right: 1rem;
  cursor: pointer;
  color: red;
  margin-right: 2rem;
  width: fit-content;
`;
const FileType = styled.div`
  display: inline-block !important;
  position: absolute;
  margin-top: 0.5rem;
  padding: 0 0.16rem;
  border-radius: 0.1rem;
  box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.1);
  color: #fff;
  background: #c8acee;
  text-transform: uppercase;
`;
const FileSize = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  flex-direction: row;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
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

const FileWrapper = styled.div`
  width: fit-content;
  height: 1rem;
  flex-direction: row;
  margin: 0 0 1rem 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
`;
const FileButton = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  border: none;
  background: transparent;
  flex-direction: row;
`;

const Textarea = styled.textarea`
  background-color: transparent;
  border: none;
  padding: unset;
  box-sizing: border-box;
  width: 100%;
  height: 15rem;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.72rem;
  margin: 0 0 0.3rem 0;
  resize: none;
  input::placeholder {
    color: #d3d4d8;
  }
  input::-webkit-input-placeholder {
    color: #d3d4d8;
  }
  input:-ms-input-placeholder {
    color: #d3d4d8;
  }
`;
