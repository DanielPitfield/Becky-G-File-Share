import { useState } from "react";

const UploadForm = () => {
  const [selectedFileNames, setSelectedFileNames] = useState("");

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
          <input type="file" name="fileInput" multiple onChange={(event) => setSelectedFileNames(event.target.value)} />
          Select Files
        </label>
        <span className="selected-file-names">{selectedFileNames}</span>

        <input className="submit-button" type="submit" value="Upload" />
      </form>
    </>
  );
};

export default UploadForm;
