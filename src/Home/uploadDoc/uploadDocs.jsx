import React from 'react';
import { useDropzone } from 'react-dropzone';

const PDFUploader = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'application/pdf',
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen w-full flex items-start justify-center">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Upload PDF</h1>
        <p className="mb-4">Choose PDF files</p>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed p-8 rounded-lg text-center ${
            isDragActive ? 'border-blue-500' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-blue-500">Drop the files here ...</p>
          ) : (
            <p>Drag and drop files here</p>
          )}
          <p className="text-sm text-gray-500 mt-2">Limit 200MB per file • PDF</p>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Browse files
        </button>
      </div>
    </div>
  );
};

export default PDFUploader;
