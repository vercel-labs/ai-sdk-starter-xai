import { createGateway } from "@ai-sdk/gateway";
import { customProvider } from "ai";

const gateway = createGateway();

const languageModels = {
  "grok-4": gateway("xai/grok-4"),
  "grok-2-1212": gateway("xai/grok-3-mini-fast"),
  "grok-3": gateway("xai/grok-3"),
  "grok-3-fast": gateway("xai/grok-3-fast"),
  "grok-3-mini": gateway("xai/grok-3-mini"),
  "grok-3-mini-fast": gateway("xai/grok-3-mini-fast"),
};

export const model = customProvider({
  languageModels,
});

export type modelID = keyof typeof languageModels;

export const MODELS = Object.keys(languageModels);

export const defaultModel: modelID = "grok-4";
