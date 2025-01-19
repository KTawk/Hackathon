import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "enrollment" model, go to https://school.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "2rPo5d-L-o75",
  comment:
    "This model handles the many-to-many relationship between students and classes, with fields for enrollment status and date.",
  fields: {
    class: {
      type: "belongsTo",
      validations: { required: true },
      parent: { model: "studentClass" },
      storageKey: "2rPo5d-L-o75-class",
    },
    enrolledAt: {
      type: "dateTime",
      includeTime: true,
      storageKey: "2rPo5d-L-o75-enrolledAt",
    },
    student: {
      type: "belongsTo",
      validations: { required: true },
      parent: { model: "user" },
      storageKey: "2rPo5d-L-o75-student",
    },
  },
};
