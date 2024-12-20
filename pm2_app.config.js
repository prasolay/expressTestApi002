module.exports = {
  apps: [
    {
      name: "api-start",
      script: "cmd",
      args: "/c npm run api-start",
      cwd: "./front_end",
      error_file: "./log/pm2_log/pm2_err.log",
      out_file: "./log/pm2_log/pm2_out.log",
      watch: true,
      max_restarts: 3,
    },
    {
      name: "web_browser",
      script: "cmd",
      args: "/c npm run webBorwser-start",
      error_file: "./log/pm2_log/pm2_err.log",
      out_file: "./log/pm2_log/pm2_out.log",
      watch: true,
      max_restarts: 3,
    },
  ],
};
