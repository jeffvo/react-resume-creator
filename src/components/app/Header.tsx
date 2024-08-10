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
  background-color: #000000;
  border-bottom: 1px solid #ffffff;
  height: 60px;
  display: flex;
`;

const StyledButton = styled.button`
  background-color: #000000;
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
