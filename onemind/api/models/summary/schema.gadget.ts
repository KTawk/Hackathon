import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "summary" model, go to https://school.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "VJyQz9pTPS6k",
  comment:
    "Stores AI-generated summaries for group chats, capturing the summarized content from a specific period.",
  fields: {
    content: {
      type: "string",
      validations: { required: true },
      storageKey: "VJyQz9pTPS6k-content",
    },
    fromDate: {
      type: "dateTime",
      includeTime: true,
      storageKey: "VJyQz9pTPS6k-fromDate",
    },
    groupChat: {
      type: "belongsTo",
      parent: { model: "groupChat" },
      storageKey: "VJyQz9pTPS6k-groupChat",
    },
    includedMessages: {
      type: "hasMany",
      children: { model: "message", belongsToField: "summary" },
      storageKey: "VJyQz9pTPS6k-includedMessages",
    },
    toDate: {
      type: "dateTime",
      includeTime: true,
      storageKey: "VJyQz9pTPS6k-toDate",
    },
  },
};
