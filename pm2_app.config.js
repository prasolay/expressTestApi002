module.exports = {
  apps: [
    {
      name: "back_end_start",
      script: "cmd",
      args: "/c npm run ts-testAPI01",
      cwd: "./back_end",
      error_file: "./log/pm2_log/pm2_err.log",
      out_file: "./log/pm2_log/pm2_out.log",
      watch: true,
      max_restarts: 3,
    },
    {
      name: "front_end_start",
      script: "cmd",
      args: "/c npm run start",
      cwd: "./front_end",
      error_file: "./log/pm2_log/pm2_err.log",
      out_file: "./log/pm2_log/pm2_out.log",
      watch: true,
      max_restarts: 3,
    },
  ],
};
