const UploadForm = () => {
  return (
    <form action="/" method="POST" encType="multipart/form-data">
      <input type="file" name="upload" multiple />
      <input type="submit" value="Upload" />
    </form>
  );
};

export default UploadForm;
