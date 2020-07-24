import Wrapper from "../../atoms/FilterItem";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function FilterItem(props) {
	const [mouseon, setColor] = useState(false);
	return (
		<Link href={props.link}>
			<A>
				<Wrapper
                    onMouseOver={() => setColor(true)}
                    onMouseOut={()=>setColor(false)}
                    backgroundColor={mouseon ? "#f5edff": "#ffffff"}>
					<Text line="1rem" level={3} color="#232735" align="left">
						{props.text}
					</Text>
				</Wrapper>
			</A>
		</Link>
	);
}

const A = styled.a``;
