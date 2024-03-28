module.exports = {
  apps: [
    {
      name: "telegrambot",
      script: "nodemon --exitcrash --log  './logs/nodemon.log' index.js", // Укажите здесь имя вашего основного файла
      cwd: "/home/ubuntu/UKGBot/TelegramBotMongo", // Укажите путь к вашему приложению
      watch: true, // Если вы хотите, чтобы pm2 отслеживал изменения файлов и перезапускал приложение при их изменении
      ignore_watch: ["node_modules", "logs"], // Игнорируемые папки
      log_date_format: "YYYY-MM-DD HH:mm:ss.SSS", // Формат даты в логах
      out_file: "./logs/pm2_out.log", // Путь к файлу с выводом stdout
      error_file: "./logs/pm2_error.log", // Путь к файлу с выводом stderr
      merge_logs: true // Объединять логи от всех экземпляров приложения в один файл
    }
  ]
};