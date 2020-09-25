import React from "react";
import { shallow } from "enzyme";
import TemplateDetails from "../TemplateDetails";

const template = {
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

describe("<TemplateDetails />", () => {
  test("renders", () => {
    const component = shallow(<TemplateDetails details={template} />);
    expect(component).toMatchSnapshot();
  });

  test("return the default array when there is no data to map through", () => {
    const component = shallow(<TemplateDetails />);
    expect(component).toMatchSnapshot();
  });
  test("does not break without value", () => {
    const component = shallow(<TemplateDetails />);
    expect(component.find("h2")).toHaveLength(1);
    expect(component.find("h5")).toHaveLength(1);
    expect(component.find("h6")).toHaveLength(2);
    expect(component.find("p")).toHaveLength(7);
    expect(component.find("button")).toHaveLength(1);
  });

  test("does not break with an empty object", () => {
    const component = shallow(<TemplateDetails details={{}} />);
    expect(component.find("h2")).toHaveLength(1);
    expect(component.find("h5")).toHaveLength(1);
    expect(component.find("h6")).toHaveLength(2);
    expect(component.find("p")).toHaveLength(7);
    expect(component.find("button")).toHaveLength(1);
  });
});
