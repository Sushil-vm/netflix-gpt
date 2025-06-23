import { GoogleGenAI } from "@google/genai";
import { OPENAI_KEY } from "./constants";

const ai = new GoogleGenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default ai;
