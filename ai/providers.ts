import { xai } from "@ai-sdk/xai";
import { customProvider } from "ai";

const languageModels = {
  "grok-4": xai("grok-4-latest"),
  "grok-2-1212": xai("grok-2-1212"),
  "grok-3": xai("grok-3-latest"),
  "grok-3-fast": xai("grok-3-fast-latest"),
  "grok-3-mini": xai("grok-3-mini-latest"),
  "grok-3-mini-fast": xai("grok-3-mini-fast-latest"),
};

export const model = customProvider({
  languageModels,
});

export type modelID = keyof typeof languageModels;

export const MODELS = Object.keys(languageModels);

export const defaultModel: modelID = "grok-4";
