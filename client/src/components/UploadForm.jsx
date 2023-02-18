const UploadForm = () => {
  return (
    <form action="/upload" method="POST" encType="multipart/form-data">
      <input type="file" name="fileInput" multiple />
      <input type="submit" value="Upload" />
    </form>
  );
};

export default UploadForm;
