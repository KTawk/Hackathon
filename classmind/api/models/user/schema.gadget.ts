import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://classmind.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "9NhmIBV2JyYw",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "kpEcLzMQTkNo",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "Mh0iDtiB_oPr",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "Zduh03eDcarn",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "OaYpDjhPMX-U",
    },
    firstName: { type: "string", storageKey: "smnu1Q45lgDy" },
    googleImageUrl: { type: "url", storageKey: "Xd_V0yGTvOnG" },
    googleProfileId: { type: "string", storageKey: "W92BIvOjAcCZ" },
    lastName: { type: "string", storageKey: "OTeamfhWDMoj" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "esKI6-vy7-9X",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "d1IHunH7GAt8",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "MwXx4pQivENM",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "Sym_2NFsikzZ",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "WKDbzIwmF-XD",
    },
  },
};
