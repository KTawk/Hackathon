// Sets up the API client for interacting with your backend. 
// For your API reference, visit: https://docs.gadget.dev/api/onemind
import { Client } from "@gadget-client/onemind";

export const api = new Client({ environment: window.gadgetConfig.environment });
