import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { templateDeleteRequested } from "../actions/templates";

const OverviewRow = ({ template }) => {
  const dispatch = useDispatch();
  const { templateId, name, version, validFrom, validTo } = template;
  return (
    <tr>
      <td>{templateId}</td>
      <td>{name}</td>
      <td>{version}</td>
      <td>{validFrom}</td>
      <td>{validTo}</td>
      <td>
        <Link to={`${templateId}`}>
          <button type="button" className="btn btn-info">
            Details
          </button>
        </Link>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(templateDeleteRequested(templateId))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

OverviewRow.propTypes = {
  template: PropTypes.shape({
    name: PropTypes.string,
    itemplateId: PropTypes.string,
    version: PropTypes.number,
    validFrom: PropTypes.string,
    validTo: PropTypes.string,
  }),
};

export default OverviewRow;
