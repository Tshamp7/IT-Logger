import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Preloader from "../layout/Preloader";
import TechItem from "./TechItem";
import { getTechs } from "../../actions/techActions";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();

    //eslint-disable-next-line
  }, []);

  const techList =
    techs === null || techs.length === 0 ? (
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

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
