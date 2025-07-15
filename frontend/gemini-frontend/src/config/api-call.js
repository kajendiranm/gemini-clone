// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: "AIzaSyD7CLA1wClnL0Tqo4mLY9xMAGdP95KWbeQ" });

// async function main(prompt) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//   });
//   return response.text;
// }

// export default main;

export default async function main(messages) {
    const response = await fetch("http://127.0.0.1:8000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: messages }),
    });
    return response.json();
}