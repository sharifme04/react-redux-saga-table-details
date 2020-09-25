import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import App from "./App";

const mockStore = configureMockStore();
const store = mockStore({});

const fakeTemplates = {
  isLoading: false,
  templates: {
    message: "get_templates_success",
    status: 0,
    _data: [
      {
        conditions: null,
        name: "basic_user",
        optionalDocuments: {
          assetType: {
            conditions: { topLevelDomain: ".edu" },
            values: { emailAddress: true },
          },
        },
        partnerId: "59c25c00-78cd-11ea-ac9b-bf680aaa6d4b",
        requiredDocuments: {
          assetType: {
            conditions: { topLevelDomain: ".edu" },
            values: { emailAddress: true },
          },
        },
        templateId: "487c5b70-9516-11ea-bbfa-ed3b490e43f0",
        type: "basic",
        validFrom: "04-05-2020",
        validTo: "21-05-2020",
        version: 2,
      },
    ],
  },
};

test("should render initial layout", () => {
  const component = shallow(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
  expect(component.exists()).toBe(true);
});

test("snapshot renders", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot data renders", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <App {...fakeTemplates} />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
