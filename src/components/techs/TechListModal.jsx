import React, { useState, useEffect } from "react";
import Preloader from "../layout/Preloader";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTechs();

    //eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    const res = await fetch("/techs");

    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  const techList =
    techs.length === 0 ? (
      <p className="center">No techs to show...</p>
    ) : (
      techs.map((tech) => <TechItem key={tech.id} tech={tech} />)
    );

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">{loading ? <Preloader /> : techList}</ul>
      </div>
    </div>
  );
};

export default TechListModal;
