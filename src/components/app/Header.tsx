import styled from '@emotion/styled';
import PdfGenerator from '../pdfGenerator/pdfGenerator';

export default function Header() {
  return (
    <HeaderStyled>
      <StyledButtonGroup>
        <StyledLink href="#Home">Home</StyledLink>
        <StyledLink href="#Content">Resume</StyledLink>
        <StyledLink
          href="https://github.com/jeffvo/react-resume-creator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </StyledLink>
      </StyledButtonGroup>
      <PdfGenerator />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  background-color: #292c34;
  border-bottom: 1px solid #0f0f0f;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index: 100;
  display: flex;
`;

const StyledLink = styled.a`
  background-color: #292c34;
  color: #abb2bf;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 20px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #ffffff;
  }
`;

const StyledButtonGroup = styled.div`
  display: flex;
  margin-right: auto;
`;
