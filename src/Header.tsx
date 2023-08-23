import styled from "styled-components";

export function Header() {
  return (
    <StyledHeader>
        <HeaderWrapper>

        </HeaderWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
background: red;
height: 3rem;
display: flex;
justify-content: center;

`;
const HeaderWrapper = styled.div`
  max-width: 1440px;
  background: blue;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
