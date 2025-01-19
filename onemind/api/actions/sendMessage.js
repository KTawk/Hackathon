import { assert, ActionOptions } from "gadget-server";

export const params = {
  groupChatId: { type: "string" },
  senderId: { type: "string" },
  content: { type: "string" },
  attachments: {
    type: "object",
    properties: {
      copyURL: { type: "string" }
    }
  }

  // Validate required params
  assert(params.groupChatId, "groupChatId is required");
  assert(params.senderId, "senderId is required");
  assert(params.content, "content is required");

  // Get groupChat and related class
  const groupChat = await api.groupChat.findOne(params.groupChatId, {
    select: {
      id: true,
      class: {
        id: true,
        teacher: { id: true }
      }
    }
  });

  // Get sender
  const sender = await api.user.findOne(params.senderId, {
    select: {
      id: true,
      teachingClasses: { id: true },
      enrolledClasses: { id: true }
    }
  });

  // Verify sender is teacher or student of the class
  const isTeacher = sender.teachingClasses.some(c => c.id === groupChat.class.id);
  const isStudent = sender.enrolledClasses.some(c => c.id === groupChat.class.id);

  if (!isTeacher && !isStudent) {
    throw new Error("User is not a member of this class");
  }

  // Create message
  const message = await api.message.create({
    content: params.content,
    sender: { _link: params.senderId },
    groupChat: { _link: params.groupChatId },
    ...(params.attachments && { attachments: params.attachments })
  });

  // Update groupChat lastMessageAt
  await api.groupChat.update(params.groupChatId, {
    lastMessageAt: new Date()
  });

  return message;
};

export const options = {
  returnType: true
};

/** @type { ActionRun } */
export const run = async ({ params, logger, api, connections }) => {
};
