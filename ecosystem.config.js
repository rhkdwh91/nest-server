module.exports = {
  apps: [
    {
      name: "nest-server",
      script: "./node_modules/.bin/ts-node ./dist/main",
      instances: 2,
      exec_mode: "cluster",
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
