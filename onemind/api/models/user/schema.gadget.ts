import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://onemind.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "xnEyvU3gBGZh",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "usPnf8QBLTMY",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "Vc23WCBGANq_",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "EFknifh9XE_H",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "Xq4vP1uBBA8Y",
    },
    firstName: { type: "string", storageKey: "7VldTfIueZol" },
    googleImageUrl: { type: "url", storageKey: "gnYW3-EE3OC9" },
    googleProfileId: { type: "string", storageKey: "drgrimEW7HLn" },
    lastName: { type: "string", storageKey: "ijtYP6qvVpb6" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "oAOY6Z2cPPFZ",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "KfZr0y3Asirh",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "pkx3aXBsSnB2",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "3NkFRz_5ZSbr",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "L7laP56dH92S",
    },
  },
};
