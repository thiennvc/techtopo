
import { GoogleGenAI } from "@google/genai";

/**
 * Service to interact with Gemini API for technical assistance.
 * Updated to follow strict SDK guidelines:
 * - Initializes GoogleGenAI inside the function call to use the most up-to-date API key.
 * - Uses process.env.API_KEY directly as required.
 */
export const getTechAssistantResponse = async (query: string) => {
  // Always use the named parameter for apiKey and obtain it directly from process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Bạn là một chuyên gia kỹ thuật cao cấp. Hãy giải đáp thắc mắc sau đây về công nghệ hoặc hướng dẫn thực hiện bài Lab một cách ngắn gọn, súc tích và chính xác.
      Câu hỏi: ${query}`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Access the .text property directly (it is not a method)
    return response.text || "Xin lỗi, tôi không thể xử lý yêu cầu này ngay bây giờ.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Kết nối với trung tâm tri thức bị gián đoạn. Vui lòng thử lại sau.";
  }
};
