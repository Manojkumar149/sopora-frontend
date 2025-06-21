import Navbar from "../components/common/Navbar";
import SOPCard from "../components/common/SOPCard";
import { useEffect, useState } from "react";
import { fetchSOPList } from "../api/soporaApi";

const SOPList = () => {
  const [sops, setSops] = useState([]);

  useEffect(() => {
    fetchSOPList().then(setSops).catch(() => setSops([]));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="sop-list-page">
        <h2>SOP Library</h2>
        <div className="sop-list">
          {sops.map((sop) => (
            <SOPCard key={sop.id} sop={sop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SOPList;
