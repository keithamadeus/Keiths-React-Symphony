// import React from 'react';
import resumePDF from '../assets/documents/Keith-Williams-Resume-8-24.pdf';

export default function ResumePage() {
  return (
    <div className="container pt-4">
      <h1 className="d-flex justify-content-center">Resume</h1>
      <embed src={resumePDF} type="application/pdf" width="100%" height="800px" />
      <p>Resume Page</p>
    </div>
  );
}
