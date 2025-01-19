import { InvalidRecordError, ActionOptions } from "gadget-server";

export const params = {
  classCode: { type: "string" },
  userId: { type: "string" }
};

/** @type { ActionRun } */
export const run = async ({ params, logger, api, connections }) => {
  if (!params.classCode) {
    throw new InvalidRecordError("Missing required parameter", [
      { apiIdentifier: "classCode", message: "Class code is required" }
    ]);
  }

  if (!params.userId) {
    throw new InvalidRecordError("Missing required parameter", [
      { apiIdentifier: "userId", message: "User ID is required" }
    ]);
  }

  const studentClass = await api.studentClass.maybeFindFirst({
    filter: { code: { equals: params.classCode } }
  });

  if (!studentClass) {
    throw new InvalidRecordError("Invalid class code", [
      { apiIdentifier: "classCode", message: "No class found with this code" }
    ]);
  }

  await api.studentClass.update(studentClass.id, { students: { _link: params.userId } });
};

export const options = {
  returnType: true
};
