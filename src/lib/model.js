// lib/model.js

import { Language as LM } from 'next-token-prediction';
import OpenSourceBooksDataset from '../lib/training/datasets/OpenSourceBooks';

let agent;

// Function to initialize the model
const initializeModel = async () => {
  if (!agent) {
    agent = await LM({
      dataset: OpenSourceBooksDataset
    });
    console.log('Language model initialized.');
  }
  return agent;
};

console.log("ai model page working")

// Export a function to get the model
export const getModel = async () => {
  await initializeModel();
  return agent;
};
