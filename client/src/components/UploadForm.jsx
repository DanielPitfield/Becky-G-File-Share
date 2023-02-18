const UploadForm = () => {
  return (
    <form className="file-upload-form" action="/upload" method="POST" encType="multipart/form-data">
      <input className="file-input" type="file" name="fileInput" multiple />
      <input className="submit-button" type="submit" value="Upload" />
    </form>
  );
};

export default UploadForm;
