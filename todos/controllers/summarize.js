import superbase from '../config/dbconnect.js'
import dotenv from 'dotenv'
import { GoogleGenAI } from "@google/genai";

dotenv.config()
const ai = new GoogleGenAI({ apiKey: 'AIzaSyBOC-YZu2Y0J3Gw1AK-rko60oRb0-7SNSQ' });



const summarize_details = async (req, res) => {
  const { data, error } = await superbase
    .from('todo_details')
    .select();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  const todoText = data.map((item, index) =>
    `${index + 1}. Title: ${item.title}\n   Description: ${item.description}`
  ).join('\n\n');

  const prompt = `Here are some todo tasks:\n\n${todoText}\n\nSummarize them and also give a good order to completed them.`;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }]
  });

  console.log(response.text);
  res.json({ summary: response.text });
};


export default summarize_details