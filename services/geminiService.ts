import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const refineTextWithGemini = async (currentText: string, type: 'summary' | 'bullet'): Promise<string> => {
  if (!apiKey) {
    console.warn("No API Key provided");
    return "API Key Missing: Please configure process.env.API_KEY to use AI features.";
  }

  const systemInstruction = `You are an expert Tech Recruiter and Resume Writer for elite software engineers. 
  Your goal is to rewrite resume content to be modern, impactful, and result-oriented.
  Style: Minimalist, direct, avoiding clichés like 'looking to learn'. Focus on 'building scalable solutions'.
  Language: Spanish (as per the input).
  Keep it concise.`;

  let prompt = "";
  if (type === 'summary') {
    prompt = `Rewrite the following professional summary to be 3 powerful lines highlighting versatility (polyglot) and full lifecycle management: "${currentText}"`;
  } else {
    prompt = `Rewrite the following experience bullet point to follow the 'Action + Context + Result' formula. Make it sound technical and impressive but realistic: "${currentText}"`;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text?.trim() || currentText;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return currentText; // Return original on error
  }
};
