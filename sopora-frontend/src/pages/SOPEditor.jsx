import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useEffect, useState } from "react";
import { fetchSOP } from "../api/soporaApi";

const SOPEditor = () => {
  const { id } = useParams();
  const [sop, setSop] = useState(null);

  useEffect(() => {
    fetchSOP(id).then(setSop);
  }, [id]);

  if (!sop) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <main>
        <h2>Edit SOP</h2>
        <input value={sop.title} readOnly />
        <textarea value={sop.description} readOnly />
      </main>
    </div>
  );
};

export default SOPEditor;
