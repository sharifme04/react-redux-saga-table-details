import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import OverviewRow from "../OverviewRow";

const mockStore = configureMockStore();
const store = mockStore({});

const templates = {
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
};

describe("<OverviewRow />", () => {
  test("renders initial", () => {
    const component = shallow(
      <Provider store={store}>
        <OverviewRow templates={templates} />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test("return the default array when there is no data to map through", () => {
    const component = shallow(
      <Provider store={store}>
        <OverviewRow />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test("does not break without value", () => {
    const component = shallow(
      <Provider store={store}>
        <OverviewRow />
      </Provider>
    );
    expect(component.find("Link")).toHaveLength(0);
    expect(component.find("button")).toHaveLength(0);
  });

  test("does not break with an empty array", () => {
    const component = shallow(
      <Provider store={store}>
        <OverviewRow fakeTemplates={[]} />
      </Provider>
    );
    expect(component.find("Link")).toHaveLength(0);
    expect(component.find("button")).toHaveLength(0);
  });
});
