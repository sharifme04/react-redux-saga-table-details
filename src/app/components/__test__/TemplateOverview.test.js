import React from "react";
import { shallow } from "enzyme";
import TemplateOverview from "../TemplateOverview";

const templates = {
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
};

describe("<TemplateOverview />", () => {
  test("renders initial", () => {
    const component = shallow(<TemplateOverview templates={templates} />);
    expect(component).toMatchSnapshot();
  });

  test("return the default array when there is no data to map through", () => {
    const component = shallow(<TemplateOverview />);
    expect(component).toMatchSnapshot();
  });

  test("does not break without value", () => {
    const component = shallow(<TemplateOverview />);
    expect(component.find("h2")).toHaveLength(1);
    expect(component.find("table")).toHaveLength(0);
  });

  test("does not break with an empty array", () => {
    const component = shallow(<TemplateOverview fakeTemplates={[]} />);
    expect(component.find("table")).toHaveLength(0);
  });
});
