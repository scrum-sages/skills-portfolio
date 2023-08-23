import styled from "styled-components";

export function HeaderLogo() {
  return (
    <LogoWrapper>
      <h2>Scrum Sages</h2>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  height: 100%;
  color: white;
  margin-left: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
