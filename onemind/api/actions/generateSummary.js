import { assert, ActionOptions } from "gadget-server";

export const params = {
  groupChatId: { type: "string" },
  fromDate: { type: "string" },
  toDate: { type: "string" }

  // Verify the group chat exists and user has access
  const chat = await api.groupChat.findOne(params.groupChatId);

  // Set up date range - use params or last 24 hours
  const toDate = params.toDate ? new Date(params.toDate) : new Date();
  const fromDate = params.fromDate ? new Date(params.fromDate) : new Date(toDate.getTime() - 24 * 60 * 60 * 1000);

  // Get all messages in date range
  const messages = await api.message.findMany({
    filter: {
      groupChatId: { equals: chat.id },
      createdAt: {
        greaterThanOrEqual: fromDate.toISOString(),
        lessThanOrEqual: toDate.toISOString()
      }
    },
    sort: { createdAt: "Ascending" },
    select: {
      content: true,
      sender: { firstName: true, lastName: true },
      createdAt: true
    }
  });

  // Format messages for OpenAI
  const messageText = messages.map(msg => 
    `${msg.sender?.firstName || 'Unknown'}: ${msg.content}`
  ).join('\n');

  // Generate summary using OpenAI
  const prompt = `Please summarize this class discussion:\n${messageText}\n\nSummary:`;
  const completion = await connections.openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 500,
    temperature: 0.7
  });

  const summaryContent = completion.choices[0]?.message?.content || "No summary generated";

  // Create summary record
  const summary = await api.summary.create({
    content: summaryContent,
    groupChat: { _link: chat.id },
    fromDate: fromDate.toISOString(),
    toDate: toDate.toISOString()
  });

  return summary;
};
 
export const options = {
  returnType: true,
  timeoutMS: 300000, // 5 minutes
  triggers: {
    scheduler: [{ cron: "0 0 * * *" }]
  }
};

/** @type { ActionRun } */
export const run = async ({ params, logger, api, connections }) => {
};
