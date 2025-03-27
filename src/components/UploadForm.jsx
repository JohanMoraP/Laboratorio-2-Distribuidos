import { useState } from "react";

const UploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const fileType = selectedFile.type;
      if (!fileType.startsWith("image/")) {
        setError("Solo se permiten imágenes (JPG, PNG, GIF, etc.).");
        setFile(null);
      } else {
        setError("");
        setFile(selectedFile);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <h2>Subir imagen</h2>
          <input type="file" accept="image/*" className="form-control mb-2" onChange={handleFileChange} />
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary" disabled={!file}>Subir</button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
