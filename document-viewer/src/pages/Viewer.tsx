import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// 1. CONFIGURE THE WORKER (Essential for rendering)
pdfjs.GlobalWorkerOptions.workerSrc = `//://unpkg.com{pdfjs.version}/build/pdf.worker.min.mjs`;

// Add these to your CSS for basic layout
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

function Viewer({ fileUrl }: { fileUrl?: string }) {
  if (!fileUrl) return <p>No document selected.</p>;

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  // Called when the PDF finishes loading
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-viewer">
      {/* 2. THE DOCUMENT COMPONENT */}
      <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

      {/* 3. BASIC CONTROLS */}
      <div className="controls">
        <button 
          disabled={pageNumber <= 1} 
          onClick={() => setPageNumber(prev => prev - 1)}
        >
          Previous
        </button>
        <p>Page {pageNumber} of {numPages}</p>
        <button 
          disabled={pageNumber >= numPages} 
          onClick={() => setPageNumber(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Viewer