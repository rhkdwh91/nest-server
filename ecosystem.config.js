/** @format */

module.exports = {
  apps: [
    {
      name: "blog",
      script: "./node_modules/.bin/ts-node ./src/server.ts",
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
