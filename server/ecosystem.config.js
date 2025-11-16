module.exports = {
  apps: [
    {
      name: "juncify",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
