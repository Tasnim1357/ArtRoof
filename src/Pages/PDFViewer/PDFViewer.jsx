import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();
  import pdf from '../../../public/toc_lec_02.pdf'
const PDFViewer = () => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Function to handle successful loading of the PDF document
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

    // const pdf="https://drive.google.com/file/d/13U488sP_tnYy6Cp7enrnU6jgPUjdjduV"
    return (
        <Document
       file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
    
      >
        <Page pageNumber={pageNumber}   renderTextLayer={false} renderAnnotationLayer={false} width={400} />
      </Document>
    );
};

export default PDFViewer;