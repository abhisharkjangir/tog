module.exports = {
  /**
   * @author Abhishar Jangir
   * @description PM2 Application Configuration
   */
  apps: [
    {
      name: 'mshankar',
      script: 'server/index.js',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      combine_logs: true,
      env: {
        PORT: 3000
      }
    }
  ]
};
