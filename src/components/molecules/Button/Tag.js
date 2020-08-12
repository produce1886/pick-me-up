import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Button/Tag";
import Link from "next/link";
import styled from "styled-components";

export default function Button(props) {
	return (
		<Link href={props.link}>
			<A>
				<Wrapper backgroundColor={props.ismodal === "modal" ? "#f0f1f3" : "#c8acee"}>
					<Text level={0} color={props.ismodal === "modal" ? "#232735" : "#fff"}>
						{props.text}
					</Text>
				</Wrapper>
			</A>
		</Link>
	);
}

const A = styled.a``;
