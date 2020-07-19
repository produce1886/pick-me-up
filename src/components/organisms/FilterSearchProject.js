import styled from "styled-components";
import FilterProject from "../molecules/FilterProject"
import Search from "../molecules/Input/Search"

export default function FilterSearchProject(){
    return(
        <Wrapper>
            <FilterProject></FilterProject>
            <Search></Search>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 48rem;
    height: 3.2rem;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    bottom: 0;
    display: flex;
    flex-direction: row;
`;
