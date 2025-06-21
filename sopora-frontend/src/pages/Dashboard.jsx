import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import SOPCard from "../components/common/SOPCard";
import { useEffect, useState } from "react";
import { fetchSOPList } from "../api/soporaApi";

const Dashboard = () => {
  const [sops, setSops] = useState([]);

  useEffect(() => {
    fetchSOPList().then(setSops).catch(() => setSops([]));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-main">
          <h2>Your SOPs</h2>
          <div className="sop-list">
            {sops.map((sop) => (
              <SOPCard key={sop.id} sop={sop} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
