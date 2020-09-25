import {
  FETCH_TEMPLATES_REQUESTED,
  FETCH_TEMPLATES_SUCCESS,
  FETCH_TEMPLATES_FAILURE,
  DELETE_TEMPLATE_REQUESTED,
  DELETE_TEMPLATE_SUCCESS,
  DELETE_TEMPLATE_FAILURE,
} from "../actionType/templatesType";

const initialState = {
  templates: null,
  error: null,
};

function filteredTemplate(data, templateId) {
  return data.filter((template) => template.templateId !== templateId);
}

export default function templates(state = initialState, action) {
  switch (action.type) {
    case FETCH_TEMPLATES_REQUESTED:
      return {
        isLoading: true,
      };
    case FETCH_TEMPLATES_SUCCESS:
      return {
        ...state,
        templates: action.templates,
        isLoading: false,
      };
    case FETCH_TEMPLATES_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case DELETE_TEMPLATE_REQUESTED:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_TEMPLATE_SUCCESS:
      return {
        ...state,
        templates: {
          status: 0,
          message: "delete_templates_success",
          _data: filteredTemplate(state.templates?._data, action.templateId),
        },
        isDeleting: false,
      };
    case DELETE_TEMPLATE_FAILURE:
      return {
        ...state,
        error: action.error,
        isDeleting: false,
      };
    default:
      return state;
  }
}
