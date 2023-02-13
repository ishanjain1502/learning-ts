const appConfig = {
  app: {
    name: process.env.APP_NAME,
    server: process.env.SERVER,
    isDevelopment: ["development", "dev", "local"].includes(
      <string>process.env.SERVER
    ),
    port: parseInt(<string>process.env.PORT, 10) || 3000,
    apiVersion: process.env.API_VERSION || "v1",
  },
};

export default Object.freeze(appConfig);
