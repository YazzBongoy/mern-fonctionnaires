import { useState } from "react";
import axios from "axios";

const UploadDocument = ({ fonctionnaireId }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("document", file);

    const token = localStorage.getItem("token");

    try {
      await axios.post(`http://localhost:5000/api/fonctionnaires/${fonctionnaireId}/upload`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Document uploadé avec succès !");
    } catch (error) {
      alert("Erreur lors de l'upload");
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Uploader</button>
    </div>
  );
};

export default UploadDocument;
