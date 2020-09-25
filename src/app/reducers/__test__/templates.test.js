import templates from "../templates";
import {
  FETCH_TEMPLATES_REQUESTED,
  FETCH_TEMPLATES_SUCCESS,
} from "../../actionType/templatesType";

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
describe("templates reducer", () => {
  it("should return the initial state", () => {
    expect(templates(undefined, {})).toEqual({
      templates: null,
      error: null,
    });
  });

  it("should handle FETCH_TEMPLATES_REQUESTED", () => {
    expect(
      templates(null, {
        type: FETCH_TEMPLATES_REQUESTED,
        templates: null,
      })
    ).toEqual({
      isLoading: true,
    });
  });

  it("should handle FETCH_TEMPLATES_SUCCESS", () => {
    expect(
      templates(
        {},
        {
          type: FETCH_TEMPLATES_SUCCESS,
          templates: fakeTemplates,
        }
      )
    ).toEqual({
      templates: fakeTemplates,
      isLoading: false,
    });
  });
});
