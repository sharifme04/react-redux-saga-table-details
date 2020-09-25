import React from "react";
import PropTypes from "prop-types";

const TemplateDetails = ({ match, templates, history }) => {
  const details = templates?._data?.filter(
    // eslint-disable-next-line eqeqeq
    (template) => template.templateId == match.params.templateId
  )[0];

  return (
    <div className="container">
      <h2>Template Details</h2>
      <hr />
      <div className="card text-center">
        <div className="card-header">Template</div>
        <div className="card-body">
          <h5 className="card-title">ID: {details?.templateId}</h5>
          <h6 className="card-title">Name: {details?.name}</h6>
          <h6 className="card-title">Partner ID: {details?.partnerId}</h6>
          <p className="card-text">
            <b>optional Documents (Top Level Domain) : </b>
            {details?.optionalDocuments?.assetType?.conditions?.topLevelDomain}
          </p>
          <p className="card-text">
            <b>optional Documents (Email Address) : </b>
            {details?.optionalDocuments?.assetType?.values?.emailAddress
              ? "Available"
              : "Not available"}
          </p>
          <p className="card-text">
            <b>Required Documents (Top Level Domain) : </b>
            {details?.requiredDocuments?.assetType?.conditions?.topLevelDomain}
          </p>
          <p className="card-text">
            <b>Required Documents (Email Address) : </b>
            {details?.requiredDocuments?.assetType?.values?.emailAddress
              ? "Required"
              : "Not Required"}
          </p>
          <p>
            <b>Type:</b> {details?.type}
          </p>
          <p>
            <b>Valid From:</b> {details?.validFrom}
          </p>
          <p>
            <b>Valid To:</b> {details?.validTo}
          </p>
          <button
            className="btn btn-secondary"
            onClick={() => history.push("/")}
          >
            Go Back
          </button>
        </div>
        <div className="card-footer text-muted">
          Version: {details?.version}
        </div>
      </div>
    </div>
  );
};

TemplateDetails.propTypes = {
  templates: PropTypes.shape({
    status: PropTypes.number,
    message: PropTypes.string,
    _data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        itemplateId: PropTypes.string,
        partnerId: PropTypes.string,
        type: PropTypes.string,
        version: PropTypes.number,
        validFrom: PropTypes.string,
        validTo: PropTypes.string,
        optionalDocuments: PropTypes.shape({
          assetType: PropTypes.shape({
            conditions: PropTypes.shape({
              topLevelDomain: PropTypes.string,
            }),
            values: PropTypes.shape({
              emailAddress: PropTypes.bool,
            }),
          }),
        }),
        requiredDocuments: PropTypes.shape({
          assetType: PropTypes.shape({
            conditions: PropTypes.shape({
              topLevelDomain: PropTypes.string,
            }),
            values: PropTypes.shape({
              emailAddress: PropTypes.bool,
            }),
          }),
        }),
      })
    ),
  }),
};

export default TemplateDetails;
