export default function PdfGenerator() {
  const printResume = () => {
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
    const elementToPrint = document.getElementById('resume');

    if (!elementToPrint) return;
    printWindow.document.write(elementToPrint.outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };
  return (
    <div>
      <button type="button" onClick={printResume}>
        Print to pdf
      </button>
    </div>
  );
}
