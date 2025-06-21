import { Link } from "react-router-dom";
const SOPCard = ({ sop }) => (
  <div className="sop-card">
    <h3>{sop.title}</h3>
    <p>{sop.description}</p>
    <Link to={`/sops/${sop.id}/edit`} className="btn small">Edit</Link>
  </div>
);

export default SOPCard;
