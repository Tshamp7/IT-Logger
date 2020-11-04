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
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">Techs</h4>
          </li>
          {loading ? <Preloader /> : techList}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
