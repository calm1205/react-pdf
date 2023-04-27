import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export const App: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess: (args: { numPages: number }) => void = ({
    numPages,
  }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};
