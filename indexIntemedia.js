const TelegramApi = require('node-telegram-bot-api');
const token = '6827132012:AAGMXbGK89_4Xe2-qaB_ARPM_qJ-FIZdIX8';
const bot = new TelegramApi(token, {polling:true});
const Json2CsvParser = require("json2csv").Parser;
const fs = require("fs");
const path = require("path");

