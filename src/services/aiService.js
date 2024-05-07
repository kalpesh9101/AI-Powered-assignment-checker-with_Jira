const axios = require('axios');
const dotenv = require('dotenv');
const {OpenAI} = require('openai');
dotenv.config();
console.log(process.env.OPENAI_API_KEY)
const openai = new OpenAI({
	apiKey: "anything",
	//baseURL: "http://13.200.82.178/chat-gpt",
  baseURL: "https://43.205.229.166:3000/v1",
});
exports.checkAssignment = async (prompt) => {
  try {
    console.log("Generating....");
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
  });
  console.log("Generated....");
  console.log(chatCompletion)
    return chatCompletion;
  } catch (error) {
    console.log(error)
    throw new Error('Error checking assignment');
  }
};