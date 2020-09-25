import React from "react";
import PropTypes from "prop-types";
import OverviewRow from "./OverviewRow";

const TemplateOverview = ({ isLoading, templates }) => {
  return (
    <div className="container">
      <h2>Template Overview</h2>
      <hr />
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-info spin-size" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : templates?._data?.length ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Template ID</th>
              <th>Name</th>
              <th>Version</th>
              <th>Valid From</th>
              <th>Valid To</th>
              <th>Template Details</th>
              <th>Template Delete</th>
            </tr>
          </thead>
          <tbody>
            {templates?._data?.map((template) => (
              <OverviewRow key={template.templateId} template={template} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center"> ohh!!! no template available !!</div>
      )}
    </div>
  );
};

TemplateOverview.propTypes = {
  isLoading: PropTypes.bool,
  templates: PropTypes.shape({
    status: PropTypes.number,
    message: PropTypes.string,
    _data: PropTypes.array,
  }),
};

export default TemplateOverview;
