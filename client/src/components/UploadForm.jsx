const UploadForm = () => {
  return (
    <form className="file-upload-form" action="/upload" method="POST" encType="multipart/form-data">
      <label className="file-input">
        <input type="file" name="fileInput" multiple />
        Select Files
      </label>

      <input className="submit-button" type="submit" value="Upload" />
    </form>
  );
};

export default UploadForm;
