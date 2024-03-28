module.exports = {
  apps: [
    {
      name: "telegrambot",
      script: "/home/ubuntu/.nvm/versions/node/v21.7.1/bin/nodemon --exitcrash index.js", // Укажите здесь имя вашего основного файла
      cwd: "/home/ubuntu/UKGBot/TelegramBotMongo", // Укажите путь к вашему приложению
      watch: true, // Если вы хотите, чтобы pm2 отслеживал изменения файлов и перезапускал приложение при их изменении
      ignore_watch: ["node_modules", "logs"] // Игнорируемые папки      
    }
  ]
};