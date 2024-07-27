// app/api/predict/route.js

import { getModel } from '../../../lib/model';  // Adjust path as needed

export async function POST(request) {
  const { text } = await request.json();  // Parse JSON body from the request

  if (!text) {
    return new Response(JSON.stringify({ error: 'Text body parameter is required' }), { status: 400 });
  }

  try {
    const model = await getModel();  // Call your function to get the model
    const prediction = model.getTokenPrediction(text);
    return new Response(JSON.stringify({ prediction }), { status: 200 });
  } catch (error) {
    console.error('Error generating prediction:', error);
    return new Response(JSON.stringify({ error: 'Error generating prediction' }), { status: 500 });
  }
}
