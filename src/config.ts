interface Config {
  apiUrl: string;
}

const config: Config = {
  apiUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://function-app-ai-bots.azurewebsites.net/api'
      : 'http://localhost:7071/api'
};

export default config;
