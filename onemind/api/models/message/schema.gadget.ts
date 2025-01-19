import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "message" model, go to https://school.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "Ms4LO2gSPvRG",
  comment:
    "Stores individual chat messages within a group chat session, associating each message with a sender (user) and a group chat. Handles different types of content including text, files, and images.",
  fields: {
    attachments: {
      type: "file",
      allowPublicAccess: false,
      storageKey: "Ms4LO2gSPvRG-attachments",
    },
    content: {
      type: "string",
      validations: { required: true },
      storageKey: "Ms4LO2gSPvRG-content",
    },
    groupChat: {
      type: "belongsTo",
      validations: { required: true },
      parent: { model: "groupChat" },
      storageKey: "Ms4LO2gSPvRG-groupChat",
    },
    sender: {
      type: "belongsTo",
      validations: { required: true },
      parent: { model: "user" },
      storageKey: "Ms4LO2gSPvRG-sender",
    },
    summary: {
      type: "belongsTo",
      parent: { model: "summary" },
      storageKey: "Ms4LO2gSPvRG-summary",
    },
  },
};
