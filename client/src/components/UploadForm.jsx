import { useState } from "react";

const UploadForm = () => {
  const [selectedFileNames, setSelectedFileNames] = useState([]);

  return (
    <>
      <iframe name="dummyframe" id="dummyframe" style={{ display: "none" }} />
      <form
        className="file-upload-form"
        action="/upload"
        target="dummyframe"
        method="POST"
        encType="multipart/form-data"
      >
        <label className="file-input">
          <input
            type="file"
            name="fileInput"
            multiple
            onChange={(event) => {
              setSelectedFileNames(Array.from(event.target.files).map((file) => file.name));
            }}
          />
          Select Files
        </label>
        <span className="selected-file-names">{selectedFileNames.join(", ")}</span>

        <input className="submit-button" type="submit" value="Upload" />
      </form>
    </>
  );
};

export default UploadForm;
