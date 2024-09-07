// src/UploadVideo.js
import React from 'react';
import { useDropzone } from 'react-dropzone';

const UploadVideo = ({ onUpload }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'video/*',
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onUpload(URL.createObjectURL(acceptedFiles[0]), acceptedFiles[0].name);
      }
    },
  });

  return (
    <div {...getRootProps({ className: 'upload-dropzone' })}>
      <input {...getInputProps()} />
      <p>Thả hoặc click vào đây để tải lên video của bạn</p>
    </div>
  );
};

export default UploadVideo;
