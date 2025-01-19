import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "studentClass" model, go to https://school.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "IrcTX_THGQ3k",
  comment:
    "Represents an academic class in the application, storing details like name, description, class code, and relationships to users (both teachers and students) as well as related group chats.",
  fields: {
    code: {
      type: "string",
      validations: { required: true, unique: true },
      storageKey: "IrcTX_THGQ3k-code",
    },
    description: {
      type: "string",
      storageKey: "IrcTX_THGQ3k-description",
    },
    enrolledStudents: {
      type: "hasManyThrough",
      sibling: { model: "user", relatedField: "enrolledClasses" },
      join: {
        model: "enrollment",
        belongsToSelfField: "class",
        belongsToSiblingField: "student",
      },
      storageKey: "IrcTX_THGQ3k-enrolledStudents",
    },
    enrollments: {
      type: "hasMany",
      children: { model: "enrollment", belongsToField: "class" },
      storageKey: "IrcTX_THGQ3k-enrollments",
    },
    groupChat: {
      type: "hasOne",
      child: { model: "groupChat", belongsToField: "class" },
      storageKey: "IrcTX_THGQ3k-groupChat",
    },
    name: {
      type: "string",
      validations: { required: true },
      storageKey: "IrcTX_THGQ3k-name",
    },
    teacher: {
      type: "belongsTo",
      validations: { required: true },
      parent: { model: "user" },
      storageKey: "IrcTX_THGQ3k-teacher",
    },
  },
};
