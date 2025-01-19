import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "groupChat" model, go to https://school.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "Q0qr1FUMGFn2",
  comment:
    "Model representing group chat for class discussions, associating with a specific class and containing multiple messages.",
  fields: {
    class: {
      type: "belongsTo",
      validations: { required: true },
      parent: { model: "studentClass" },
      storageKey: "Q0qr1FUMGFn2-class",
    },
    lastMessageAt: {
      type: "dateTime",
      includeTime: true,
      storageKey: "Q0qr1FUMGFn2-lastMessageAt",
    },
    messages: {
      type: "hasMany",
      children: { model: "message", belongsToField: "groupChat" },
      storageKey: "Q0qr1FUMGFn2-messages",
    },
    name: {
      type: "string",
      validations: { required: true },
      storageKey: "Q0qr1FUMGFn2-name",
    },
  },
};
