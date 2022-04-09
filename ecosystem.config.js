module.exports = {
  apps: [
    {
      name: "nest-server",
      script: "./dist/main",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      env_test: {
        NODE_ENV: "test",
      },
    },
  ],
};
