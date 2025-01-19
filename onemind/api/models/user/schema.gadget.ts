import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://school.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "dSG-aZHTlzM_",
  fields: {
    bio: { type: "string", storageKey: "dSG-aZHTlzM_-bio" },
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "A9vG3SCIy_My",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "SJWD0QHEO7DV",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "EX2soNluW0OE",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "LCgo2L-vcnwX",
    },
    enrolledClasses: {
      type: "hasManyThrough",
      sibling: {
        model: "studentClass",
        relatedField: "enrolledStudents",
      },
      join: {
        model: "enrollment",
        belongsToSelfField: "student",
        belongsToSiblingField: "class",
      },
      storageKey: "dSG-aZHTlzM_-enrolledClasses",
    },
    enrollments: {
      type: "hasMany",
      children: { model: "enrollment", belongsToField: "student" },
      storageKey: "dSG-aZHTlzM_-enrollments",
    },
    firstName: { type: "string", storageKey: "ZqDdLtcIMPRA" },
    googleImageUrl: { type: "url", storageKey: "AVFOLYPC6SyY" },
    googleProfileId: { type: "string", storageKey: "WQwIzBtYmAbh" },
    lastName: { type: "string", storageKey: "wD233K_D8K-g" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "48OJUU2C--Yu",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "7Sb5Y_h6uISL",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "OskSzZ-iGUAp",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "R5roQSWx33io",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "aDCaoPzue2GP",
    },
    teachingClasses: {
      type: "hasMany",
      children: { model: "studentClass", belongsToField: "teacher" },
      storageKey: "dSG-aZHTlzM_-teachingClasses",
    },
  },
};
