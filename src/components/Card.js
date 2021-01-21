import React from "react";
import MoreButton from "./MoreButton";

const Card = () => {
  //header
  return (
    <div
      className="card text-dark shadow-none"
     
    >
      <div className="card-body" style={{ backgroundColor: "#ebeef0", borderRadius: "15px" }}>
      <ul className="list-group list-group-flush">
  <li className="list-group-item">Cras justo odio</li>
  <li className="list-group-item">Dapibus ac facilisis in</li>
  <li className="list-group-item">Morbi leo risus</li>
  <li className="list-group-item">Porta ac consectetur ac</li>
  <li className="list-group-item">Vestibulum at eros</li>
</ul>
      </div>
    </div>
  );
};

export default Card;
