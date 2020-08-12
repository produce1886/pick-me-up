import styled from "styled-components";
import Text from "../../atoms/Text";
import Middle from "../../atoms/Modal/Middle";
import Image from "../../atoms/Image/Modal";
import ImageHolder from "../../atoms/ImageHolder/Profile";
import FileIcon from "../../atoms/Icon/File";
import TextIcon from "../../atoms/Icon/Text"
export default function ModalMiddle(props) {
	return (
		<Middle>
			<FileWrapper>
				<FileIcon style={{ width: "0.4rem", height: "0.9rem", marginRight: "0.3rem" }}></FileIcon>
				<Text width="fit-content" level={2} line="1rem" color="#232735">
					파일 추가
				</Text>
				{props.type==="project" && (
					<>
					<TextIcon style={{ width: "0.5rem", height: "1rem",marginLeft: "0.5rem",  marginRight: "0.3rem" }}></TextIcon>
					<Text width="fit-content" level={2} line="1rem" color="#232735">
						텍스트 추가
					</Text>
					</>
				)}
			</FileWrapper>
			<Textarea placeholder="내용을 입력하세요" type="text"></Textarea>
			{props.UserImage ? (
				<ImageHolder size={props.size}>
					<Img src={props.profileImage}></Img>
				</ImageHolder>
			) : (
				<Image
					style={{
						width: `${props.size}`,
						height: `${props.size}`,
					}}
					fill="#f0f1f3"></Image>
			)}
		</Middle>
	);
}

const Img = styled.img`
	width: 100%;
	height: 100%;
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

const Textarea = styled.textarea`
	background-color: transparent;
	border: none;
	padding: unset;
	box-sizing: border-box;
	width: 100%;
	height: 5rem;
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
