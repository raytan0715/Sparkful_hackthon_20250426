// listModels.js

const { GoogleGenerativeAI } = require('@google/generative-ai');

// 使用你的 Gemini API 金鑰
const geminiKey = 'AIzaSyBRUhPK-bA5tL3sogpgiQO3mVtPcpKWGRg';

async function listModels() {
  try {
    const genAI = new GoogleGenerativeAI(geminiKey);
    const response = await genAI.listModels();
    const models = response.models;

    console.log('✅ 可用的 Gemini 模型列表：\n');
    models.forEach((model, index) => {
      console.log(`${index + 1}. ${model.name}`);
    });

    const supportsGenerate = models.filter(m => m.supportedGenerationMethods.includes('generateContent'));
    console.log('\n✅ 支援 generateContent 的模型：\n');
    supportsGenerate.forEach((model, index) => {
      console.log(`${index + 1}. ${model.name}`);
    });
  } catch (err) {
    console.error('❌ 無法列出模型：', err.message);
  }
}

listModels();
