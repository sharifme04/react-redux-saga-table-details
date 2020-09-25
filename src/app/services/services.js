import axios from "axios";

const API_END_POINT = process.env.REACT_APP_TEMPLATES_API;

const headers = {
  "Content-Type": "application/json",
  access_token: "test#Token1234",
};

export const api = {
  fetchData() {
    return axios
      .get(`${API_END_POINT}`, headers)
      .then((response) => ({ templates: response.data }))
      .catch((error) => ({ error }));
  },

  deleteByTemplateId(action) {
    return axios
      .delete(`${API_END_POINT}/${action.templateId}`, headers)
      .then((response) => ({ templateId: action.templateId }))
      .catch((error) => ({ error }));
  },
};
