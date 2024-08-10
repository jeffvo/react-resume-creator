import styled from '@emotion/styled';

export default function PdfGenerator() {
  const printResume: () => void = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const styleSheets = Array.from(document.styleSheets)
      .map((styleSheet) => {
        try {
          return Array.from(styleSheet.cssRules)
            .map((rule) => rule.cssText)
            .join('\n');
        } catch (e) {
          return '';
        }
      })
      .join('\n');

    printWindow.document.write(`<html><style>${styleSheets}</style><body>`);
    const elementToPrint: HTMLElement = document.getElementById('resume')!;

    if (!elementToPrint) return;
    printWindow.document.write(elementToPrint.outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };
  return (
    <StyledDiv>
      <StyledButton type="button" onClick={printResume}>
        Download your Resume
      </StyledButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 10px;
`;

const StyledButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition:
    transform 0.2s ease-in-out,
    background-color 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #f0f0f0;
  }
`;
