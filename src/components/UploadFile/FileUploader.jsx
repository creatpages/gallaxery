import React from 'react';

const FileUploader = ({
  getRootProps,
  getInputProps,
  open,
  fileInfo,
  clearFile,
}) => {
  if (fileInfo.code !== 'return') {
    return (
      <div className="prew-files">
        <div className="uploader-container" {...getRootProps()}>
          <div className="uploader-inner">
            <input className="uploader-input" {...getInputProps()} />
            <p>Drag 'n' drop files here or click "Upload" to choose</p>
            <button
              type="button"
              onClick={open}
              className="btn uploader-inner-btn btn"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (fileInfo.type.slice(0, 5) === 'image') {
    return (
      <div className="prew-files">
        <div className="file-img">
          <img src={fileInfo.source} alt="" />
          <button
            className="file-action-del"
            onClick={() => {
              clearFile();
            }}
          ></button>
        </div>
      </div>
    );
  } else if (fileInfo.type.slice(0, 5) === 'video') {
    return (
      <div className="prew-files">
        <div className="file-img">
          <video src={fileInfo.source} controls>
            Your browser does not support the video tag.
          </video>
          <button
            className="file-action-del"
            onClick={() => {
              clearFile();
            }}
          ></button>
        </div>
      </div>
    );
  }
};

export default FileUploader;