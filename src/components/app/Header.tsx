import styled from '@emotion/styled';
import PdfGenerator from '../pdfGenerator/PdfGenerator';

export default function Header() {
  return (
    <HeaderStyled>
      <StyledButtonGroup>
        <StyledButton type="button">Home</StyledButton>
        <StyledButton type="button">Resume</StyledButton>
        <StyledButton type="button">Source Code</StyledButton>
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

const StyledButton = styled.button`
  background-color: #292c34;
  color: #808080;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: background-color 0.3s;
  &:hover {
    color: #ffffff;
  }
`;

const StyledButtonGroup = styled.div`
  display: flex;
  margin-right: auto;
`;
