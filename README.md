This is a bot for the Telegram messenger, used in HYIP projects. 
The bot is written in JavaScript and uses a MongoDB database. 
unpack it to any folder, navigate there and 
npm install

To connect database, you need to create an account on MongoDB Atlas, obtain an API key there, 
and enter it in the index.js file at line 461: const uri = "mongodb+srv://XXXXXXX:XXXXXXXXX@cluster0.guew5xg.mongodb.net/?retryWrites=true&w=majority";
In line 2, you need to enter your Telegram token (const token = '';).
In line 8, you need to enter your Telegram ID to access the administrative menu.

The bot is polling-based. It can collect all the data about users registered in the system and generate a CSV file. 
The bot gathers registration statistics by year, month, and day. It can send messages via an administrative menu (text, video, audio, video note, audio note) to all registered users.

The bot provides each new participant with a unique link, which the participant can share to build their structure under their Telegram account.
