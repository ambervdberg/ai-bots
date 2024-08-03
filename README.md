# OpenAI API Bots

Personal project to explore the OpenAI API.

Live demo: https://ambervdberg.github.io/ai-bots/

## Bots

### Poet Bot

The Poet Bot generates software-related poems using the OpenAI API.

#### API

| Azure Function                                                                                           |        |                       |
| -------------------------------------------------------------------------------------------------------- | ------ | --------------------- |
| [subject](https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/open-ai/subject.ts) | OpenAI | Create a poem subject |
| [poem](https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/open-ai/poem.ts)       | OpenAI | Create a poem         |

### Notion.so Bot

The Notion Bot answers questions using content from your Notion workspaces. It uses the OpenAI API to generate the answer and the Notion API to fetch the relevant content.

See here for more information: [notion-bot API](https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/notion-api/notion.md)

> Note: This functionality is not available to you in the live demo. You can implement your own integration by following the instructions [here](https://github.com/ambervdberg/azure-function-bots/tree/main).

#### API

| Azure Function                                                                                                 |                        |                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [open-ai/notion](https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/open-ai/notion.ts) | OpenAI <br> Notion API | Answers the user question with OpenAI API using context from your Notion workspaces. <br>This function will call the [notion-api/search function](https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/notion-api/search.ts) which will retrieve the relevant context. |
| [auth-google](https://github.com/ambervdberg/azure-function-bots/blob/main/src/functions/auth-google.ts)       | Google API             | Checks user authorization to access the Notion API. <br>_(Spoiler alert: No you are not authorized)_                                                                                                                                                                                         |
