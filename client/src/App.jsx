import "./styles/App.css";
import UploadForm from "./components/UploadForm";

const App = () => {
  return (
    <div>
      <h1 className="title">Becky G - File Share</h1>

      <section>
        <h3 className="subtitle">Upload</h3>
        <UploadForm />
      </section>

      <section>
        <h3 className="subtitle">Browse</h3>
      </section>
    </div>
  );
};

export default App;
