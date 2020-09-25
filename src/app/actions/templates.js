import {
  FETCH_TEMPLATES_REQUESTED,
  FETCH_TEMPLATES_SUCCESS,
  FETCH_TEMPLATES_FAILURE,
  DELETE_TEMPLATE_REQUESTED,
  DELETE_TEMPLATE_SUCCESS,
  DELETE_TEMPLATE_FAILURE,
} from "../actionType/templatesType";

export const templatesRequested = () => ({
  type: FETCH_TEMPLATES_REQUESTED,
});

export const templatesSuccess = (templates) => ({
  type: FETCH_TEMPLATES_SUCCESS,
  templates,
});

export const templatesFail = (error) => ({
  type: FETCH_TEMPLATES_FAILURE,
  error,
});

export const templateDeleteRequested = (templateId) => ({
  type: DELETE_TEMPLATE_REQUESTED,
  templateId,
});

export const templateDeleteSuccess = (templateId) => ({
  type: DELETE_TEMPLATE_SUCCESS,
  templateId,
});

export const templateDeleteFail = (error) => ({
  type: DELETE_TEMPLATE_FAILURE,
  error,
});
