// Sets up the API client for interacting with your backend. 
// For your API reference, visit: https://docs.gadget.dev/api/school
import { Client } from "@gadget-client/school";

export const api = new Client({ environment: window.gadgetConfig.environment });
