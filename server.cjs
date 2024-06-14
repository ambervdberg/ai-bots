const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv/config');
require('dotenv').config();
const ViteExpress = require('vite-express');

const app = express();
const port = process.env.PORT || 3001;

const openApiKey = process.env.VITE_OPENAI_API_KEY;

app.use(cors());
app.use(express.json());

const openAI = new OpenAI({
  apiKey: openApiKey
});

app.post('/api/chat', async (req, res) => {
  const { messages, stream } = req.body;

  try {
    const completion = await openAI.chat.completions.create({
      messages: [...messages],
      model: 'gpt-4',
      stream: stream
    });

    const reader = completion.toReadableStream().getReader();

    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });

    await readStream(reader, res);
    res.end();

  } catch (error) {
    console.error('Error in /api/chat:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/poemsubject', async (req, res) => {
  try {
    const completion = await openAI.chat.completions.create({
      messages: [{
        role: 'system',
        content: `You are a master poet prompt engineer. 
          You will create a prompt for a short poem. 
          The subject must always be about software engineering.
          The response must be a single line without formatting.
          Example prompts: 
          "Competent female software developer."
          "Software engineer who is coding a new feature"
          "Software engineer who is writing a tests and is struggling"
          "Software developer who is debugging a complex issue"
          "Software engineer who is learning a new programming language"
          "Code that will just not compile"
          "Software engineer who is working on a project with a tight deadline"
          "Bugs are everywhere in the code"
          "Learning a new programming language is hard"
          "The feeling when your code compiles on the first try"
          "When you don't know what the code does but it works"
          "AI that takes over the world"`
      }, {
        role: 'user',
        content: 'Give me a prompt for a short poem'
      }],
      model: 'gpt-4o',
      stream: false
    });
    res.send(completion.choices[0].message.content);
  } catch (error) {
    console.error('Error in /api/poemsubject:', error);
    res.status(500).send('Internal Server Error');
  }
});

async function readStream(reader, res) {
  const decoder = new TextDecoder();

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const text = decoder.decode(value, { stream: true });

      const json = JSON.parse(text);

      const delta = json.choices[0]?.delta?.content;

      if (delta) {
        res.write(delta);
      }
    }
  } catch (error) {
    console.error('Error reading the stream:', error);
  } finally {
    reader.releaseLock();
    res.end();
  }
}

const server = app.listen(port, '0.0.0.0', () => console.log('Server is listening...'));

ViteExpress.bind(app, server);
