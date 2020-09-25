import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_TEMPLATES_REQUESTED,
  DELETE_TEMPLATE_REQUESTED,
} from "../actionType/templatesType";
import {
  templatesSuccess,
  templatesFail,
  templateDeleteSuccess,
  templateDeleteFail,
} from "../actions/templates";
import { api } from "../services/services";

function* fetchTemplates() {
  const { templates, error } = yield call(api.fetchData);
  if (templates) yield put(templatesSuccess(templates));
  else yield put(templatesFail(error));
}

function* deleteTemplate(action) {
  const { templateId, error } = yield call(api.deleteByTemplateId, action);
  if (templateId) yield put(templateDeleteSuccess(templateId));
  else yield put(templateDeleteFail(error));
}

export function* watchFetchData() {
  yield takeEvery(FETCH_TEMPLATES_REQUESTED, fetchTemplates);
}

export function* watchDeleteData() {
  yield takeEvery(DELETE_TEMPLATE_REQUESTED, deleteTemplate);
}
