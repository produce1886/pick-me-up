import styled from "styled-components";
import Projectblock from "../organisms/Projectblock"

export default function Projectlist(){
    return (
        <Wrapper>
            <Div>
                <Projectblock></Projectblock>
                &nbsp;
                &nbsp;
                <Projectblock></Projectblock>
            </Div>
            <Div>
                <Projectblock></Projectblock>
                &nbsp;
                &nbsp;
                <Projectblock></Projectblock>
            </Div>
            <Div>
                <Projectblock></Projectblock>
                &nbsp;
                &nbsp;
                <Projectblock></Projectblock>
            </Div>
            <Div>
                <Projectblock></Projectblock>
                &nbsp;
                &nbsp;
                <Projectblock></Projectblock>
            </Div>
            <Div>
                <Projectblock></Projectblock>
                &nbsp;
                &nbsp;
                <Projectblock></Projectblock>
            </Div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 48rem;
    height: 67.68rem;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    bottom: 0;
    display: flex;
    flex-direction: column;
    margin: 0 0 5.12rem 0;
`;

const Div = styled.div`
    padding: 0.46rem 0.4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;