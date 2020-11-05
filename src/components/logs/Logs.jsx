import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();

    //eslint-disable-next-line
  }, []);

  const logItemList =
    logs === null || logs.length === 0 ? (
      <p className="center">No logs to show...</p>
    ) : (
      logs.map((log) => <LogItem key={log.id} log={log} />)
    );

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {loading || logs === null ? <Preloader /> : logItemList}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
