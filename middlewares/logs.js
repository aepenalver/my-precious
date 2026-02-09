const fs = require('fs');
const path = require('path');

const logsMiddleware = (req, res, next) => {
  const { method, path: routePath, url } = req;
  const logDir = path.join(__dirname, '../logs');
  const logFile = path.join(logDir, 'logs.txt');

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  const register = `${new Date().toLocaleString()} - ${method} ${routePath} - Full URL: ${url}\n\n`;

  fs.appendFile(logFile, register, (err) => {
    if (err) {
      console.error('Error log:', err);
    }
  });

  next();
};

module.exports = logsMiddleware;
