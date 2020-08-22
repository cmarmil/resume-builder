import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFOutput from './pdfOutput.js';

const viewer = () => (
  <PDFViewer>
    <PDFOutput />
  </PDFViewer>
);
