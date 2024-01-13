/*{
  message_id: 5,
  from: {
    id: 338176795,
    is_bot: false,
    first_name: 'Roman',
    last_name: 'Zhylinskyi',
    username: 'R0m44',
    language_code: 'en'
  },
  chat: {
    id: 338176795,
    first_name: 'Roman',
    last_name: 'Zhylinskyi',
    username: 'R0m44',
    type: 'private'
  },
  date: 1703943066,
  text: 'dfsf'
}
--------------------------------------------------------
{
  id: '1452458276275829430',
  from: {
    id: 338176795,
    is_bot: false,
    first_name: 'Roman',
    last_name: 'Zhylinskyi',
    username: 'R0m44',
    language_code: 'en'
  },
  message: {
    message_id: 84,
    from: {
      id: 6405206204,
      is_bot: true,
      first_name: 'TestForTest',
      username: 'adlfjbaf_bot'
    },
    chat: {
      id: 338176795,
      first_name: 'Roman',
      last_name: 'Zhylinskyi',
      username: 'R0m44',
      type: 'private'
    },
    date: 1703960681,
    text: 'Поздравляем 🎉\n' +
      '\n' +
      '   Вы оказались в лучшем месте, чтобы начать зарабатывать через интернет от 10.000$ / мес на экологичном продукте с командой профессионалов\n' +
      '\n' +
      '   ✅ Жмите последовательно на кнопки в главном меню и уже через 15 минут у Вас сложится понимание \n' +
      '   - как достичь Ваших финансовых целей вместе с нами в 2024 году.\n' +
      '\n' +
      '   to change the language press: menu button -> /language',
    entities: [ [Object] ],
    reply_markup: { inline_keyboard: [Array] }
  },
  chat_instance: '-7994465932844036888',
  data: 'Про компанию'
}
*/



const TelegramApi = require('node-telegram-bot-api');
const token = '6405206204:AAGfinSAzpIlaifftIfPbqJLyayTbfPwsjc';
const bot = new TelegramApi(token, {polling:true});

const MainButtons = {
	reply_markup: JSON.stringify({
		inline_keyboard:  [

			[{text : '✨Про компанию✨', callback_data : 'Про компанию'}],
			[{text : '💎Про команду💎', callback_data : 'Про команду'}],
			[{text : '🏆Пассивный доход в компании🏆', callback_data : 'Пассивный доход'}],
			[{text : '❤️Маркетинг план❤️', callback_data : 'Маркетинг план'}],
			[{text : '🗣Отзывы партнеров🗣', callback_data : 'Отзывы партнеров'}],
			[{text : '🚀Возможности системы автоматизации🚀', callback_data : 'Возможности системы'}],
			[{text : '🧭Наши соцсети🧭', callback_data : 'Наши соцсети'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '💡Система обучения💡', callback_data : 'Система обучения'}],
			[{text : '💼Личный  кабинет💼', callback_data : 'Личный кабинет'}]
			
			]
		
	})
};

const AdminButtons = {
	reply_markup: JSON.stringify({
		inline_keyboard:  [

			[{text : '✨Про компанию✨', callback_data : 'Про компаниюAdm'}],
			[{text : '💎Про команду💎', callback_data : 'Про командуAdm'}],
			[{text : '🏆Пассивный доход в компании🏆', callback_data : 'Пассивный доходAdm'}],
			[{text : '❤️Маркетинг план❤️', callback_data : 'Маркетинг планAdm'}],
			[{text : '🗣Отзывы партнеров🗣', callback_data : 'Отзывы партнеровAdm'}],
			[{text : '🚀Возможности системы автоматизации🚀', callback_data : 'Возможности системыAdm'}],
			[{text : '🧭Наши соцсети🧭', callback_data : 'Наши соцсетиAdm'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставникомAdm'}],
			[{text : '💡Система обучения💡', callback_data : 'Система обученияAdm'}],
			[{text : '💼Личный  кабинет💼', callback_data : 'Личный кабинетAdm'}],
			[{text : '🚓Администрирование🚔', callback_data : 'Администрирование'}]
			
			]
		
	})
};

const AdmButProceed = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '📱Статистика📱', callback_data : 'Статистика'}],
			[{text : '📋Создать рассылку📋', callback_data : 'Создать рассылку'}],
			[{text : '⬆️Главное меню⬆️', callback_data : 'Главное менюAdm'}]
		]
	})
};


const AboutCompButtons = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '💎Про команду💎', callback_data : 'Про команду'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное меню'}]
			]
	})
};

const AboutCompButtonsAdm = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '💎Про команду💎', callback_data : 'Про команду'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное менюAdm'}]
			]
	})
};

const AboutTeamButtons = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🏆Пассивный доход в компании🏆', callback_data : 'Пассивный доход'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное меню'}]
		]
	})
};

const AboutTeamButtonsAdm = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🏆Пассивный доход в компании🏆', callback_data : 'Пассивный доход'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное менюAdm'}]
		]
	})
};

const AboutPassiveProfit = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '❤️Маркетинг план❤️', callback_data : 'Маркетинг план'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное меню'}]
		]
	})
};

const AboutPassiveProfitAdm = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '❤️Маркетинг план❤️', callback_data : 'Маркетинг план'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное менюAdm'}]
		]
	})
};

const AboutMarketing = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🗣Отзывы партнеров🗣', callback_data : 'Отзывы партнеров'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное меню'}]
		]
	})
};

const AboutMarketingAdm = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🗣Отзывы партнеров🗣', callback_data : 'Отзывы партнеров'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное менюAdm'}]
		]
	})
};

const AboutRewievsPartners =  {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🚀Возможности системы автоматизации🚀', callback_data : 'Возможности системы'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное меню'}]
		]
	})
};

const AboutRewievsPartnersAdm =  {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🚀Возможности системы автоматизации🚀', callback_data : 'Возможности системы'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное менюAdm'}]
		]
	})
};

const AboutSocial = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🧭Наши соцсети🧭', callback_data : 'Наши соцсети'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное меню'}]
		]
	})
};

const AboutSocialAdm = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🧭Наши соцсети🧭', callback_data : 'Наши соцсети'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное менюAdm'}]
		]
	})
};

const AboutMentor = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное меню'}]
		]
	})
};

const AboutMentorAdm = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставником'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное менюAdm'}]
		]
	})
};

const MainMenu = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '📋Главное меню📋', callback_data : 'Главное меню'}]
		]
	})
};

const MainMenuAdm = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '📋Главное меню📋', callback_data : 'Главное менюAdm'}]
		]
	})
};

const MakePhoto = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '📋Сделать фото📋', callback_data : 'Сделать фото'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное меню'}]
		]
	})
};

const LanguageButtons = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🇬🇧English🇬🇧', callback_data : 'English'}],
			[{text : '🇪🇸Espanol🇪🇸', callback_data : 'Espanol'}],
			[{text : '🇮🇹Italiano🇮🇹', callback_data : 'Italiano'}],
			[{text : '🇭🇺Magyar🇭🇺', callback_data : 'Magyar'}],
			[{text : '🇹🇷Turkce🇹🇷', callback_data : 'Turkce'}],
			[{text : '🇺🇦Русский🇺🇦', callback_data : 'Русский'}]
		]
	})
};

const MainStatistics = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : 'Выгрузить статистику', callback_data : 'Выгрузить статистику'}],
			[{text : 'Статистика кликов', callback_data : 'Статистика кликов'}],
			[{text : '⬆️Вернуться в админку⬆️', callback_data : 'Администрирование'}]
		]
	})
};

const BackToAdmin = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '⬆️Вернуться в админку⬆️', callback_data : 'Администрирование'}]
		]
	})
};

const BackToStatistics = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '⬆️Вернуться в статистику⬆️', callback_data : 'Статистика'}]
		]
	})
};

const SendingMessages  = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : 'Начать рассылку', callback_data : 'Начать рассылку'}],
			[{text : 'Отменить', callback_data : 'Отменить'}],
			[{text : 'Назад', callback_data : 'Администрирование'}]
		]
	})
};

const ClientSendProofPhoto = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : 'Отправить', callback_data : 'КлиентПруфФото'}]			
		]
	})
};

const Confirm = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : 'Подтвердить', callback_data : 'Подтвердить'}]			
		]
	})
};

const ConfirmAdm = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : 'Подтвердить', callback_data : 'Система обученияAllowedAdm'}]			
		]
	})
};

const ToLearningSystem = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : 'Система обучения', callback_data : 'Система обученияAllowed'}]			
		]
	})
};

const LearningSystem = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🚀ТРЕНИНГ: СТАРТ НА МИЛЛИОН!🚀', callback_data : 'Тренинг старт на миллион'}],
			[{text : '🔥АКАДЕМИЯ ПРОДАЖ🔥', callback_data : 'Академия продаж'}],
			[{text : '📱Работа с соц сетями📱', callback_data : 'Работа с соцсетями'}],
			[{text : '↩️Вернуться в основной бот↩️', callback_data : 'Главное меню'}]			
		]
	})
};

const LearningSystemAdm = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🚀ТРЕНИНГ: СТАРТ НА МИЛЛИОН!🚀', callback_data : 'Тренинг старт на миллионAdm'}],
			[{text : '🔥АКАДЕМИЯ ПРОДАЖ🔥', callback_data : 'Академия продажAdm'}],
			[{text : '📱Работа с соц сетями📱', callback_data : 'Работа с соцсетямиAdm'}],
			[{text : '↩️Вернуться в основной бот↩️', callback_data : 'Главное менюAdm'}]			
		]
	})
};
const TraningStartMillion  = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🔥АКАДЕМИЯ ПРОДАЖ🔥', callback_data : 'Академия продаж'}],
			[{text : '⬆️Главное меню⬆️', callback_data : 'Система обученияAllowed'}],
			[{text : '↩️Венуться в основной бот↩️', callback_data : 'Главное меню'}]			
		]
	})
};

const TraningStartMillionAdm  = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '🔥АКАДЕМИЯ ПРОДАЖ🔥', callback_data : 'Академия продажAdm'}],
			[{text : '⬆️Главное меню⬆️', callback_data : 'Система обученияAllowedAdm'}],
			[{text : '↩️Венуться в основной бот↩️', callback_data : 'Главное менюAdm'}]			
		]
	})
};

const SalesAcademy  = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '📱Работа с соц сетями📱', callback_data : 'Работа с соцсетями'}],
			[{text : '⬆️Главное меню⬆️', callback_data : 'Система обученияAllowed'}],
			[{text : '↩️Венуться в основной бот↩️', callback_data : 'Главное меню'}]			
		]
	})
};

const SalesAcademyAdm  = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '📱Работа с соц сетями📱', callback_data : 'Работа с соцсетямиAdm'}],
			[{text : '⬆️Главное меню⬆️', callback_data : 'Система обученияAllowedAdm'}],
			[{text : '↩️Венуться в основной бот↩️', callback_data : 'Главное менюAdm'}]			
		]
	})
};

const SocialMediaWork  = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '⬆️Главное меню⬆️', callback_data : 'Система обученияAllowed'}],
			[{text : '↩️Венуться в основной бот↩️', callback_data : 'Главное меню'}]			
		]
	})
};

const SocialMediaWorkAdm  = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '⬆️Главное меню⬆️', callback_data : 'Система обученияAllowedAdm'}],
			[{text : '↩️Венуться в основной бот↩️', callback_data : 'Главное менюAdm'}]			
		]
	})
};

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://RomanR0m4:op29ndgF@cluster0.guew5xg.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    //await (client.db('UKGLearningBot').collection('Users').updateOne({id: '338176795'}, {$set: 'Users.TG_IDs'}, {upsert:true}))
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



const start = () => {
	
	bot.setMyCommands([
		{command: '/start', description: 'Приветствую Ваc!'},
		{command: '/link', description: 'Персональная Ссылка'},
		{command: '/language', description: 'Choose your language'},
		{command: '/fff', description: 'AdminPanel'},
		{command: '/user', description: 'user'}

])

		const dbUsers = client.db('UKGLearningBot').collection('Users');
		
		async function writeUser(data, mentor){
			
			try {
				
				const filter = {TG_ID: data.id};				
				let now = new Date();

				await client.connect();
				await dbUsers.updateOne(filter, {$set: {"UserName": data.username, "Name": data.first_name, "Surname": data.last_name, "Mentor": mentor, "RegDate":now} }, {upsert: false})
				
								
			
			} finally {
			
				await client.close();
			
			}
		}

		async function fetchUser(data){
			
			try {
				
				const filter = {TG_ID: data.id};								
				
				await client.connect();				

				return await dbUsers.findOne(filter, function(err, result){
					if(err) throw err;
					console.log(result);
				});;
			
			} finally {
			
				await client.close();
			
			}
		}

		async function fetchMentor(data, mentor){
			
			try {

				const filter = {Mentor: mentor};								
				
				await client.connect();				
				
				return await dbUsers.findOne(filter, function(err, result){
					
					if(err) throw err;
					console.log(result);

				});;
			
			} finally {
			
				await client.close();
			
			}
		}

		

	
	bot.on('message', async msg => {
		
	try{		
		
		let Reg = /\s/;
		let botName = 'https://t.me/adlfjbaf_bot';
		let admin = false;
		const text = msg.text;
		const chatId = msg.chat.id;	

				
		if (msg.chat.id == '338176795jhfjfs') {
			admin = true;
		}
		
		if (Reg.test(msg.text) && admin == false){
			
			let mentor = msg.text.split(" ");
			writeUser(msg.chat, mentor[1]);
			
			global.mentor = mentor[1];

			await bot.sendMessage(chatId, `Поздравляем! 🎉 

			Вы оказались в лучшем месте, чтобы начать зарабатывать через интернет от 10.000$ / мес на экологичном продукте с командой профессионалов.

			✅ Жмите последовательно на кнопки в главном меню и уже через 15 минут у вас сложится понимание - как достичь ваших финансовых целей вместе с нами в 2023-2024 годах.`, MainButtons)
		
		} else if(Reg.test(msg.text) && admin == true) {
			
			let arr = msg.text.split(" ");
			global.mentor = arr[1];

			await bot.sendMessage(chatId, `Поздравляем! 🎉 

			Вы оказались в лучшем месте, чтобы начать зарабатывать через интернет от 10.000$ / мес на экологичном продукте с командой профессионалов.

			✅ Жмите последовательно на кнопки в главном меню и уже через 15 минут у вас сложится понимание - как достичь ваших финансовых целей вместе с нами в 2023-2024 годах.`, AdminButtons)

		} else if (text == '/start' && admin == false) {
			
			await bot.sendMessage(chatId, `Поздравляем! 🎉 

			Вы оказались в лучшем месте, чтобы начать зарабатывать через интернет от 10.000$ / мес на экологичном продукте с командой профессионалов.

			✅ Жмите последовательно на кнопки в главном меню и уже через 15 минут у вас сложится понимание - как достичь ваших финансовых целей вместе с нами в 2023-2024 годах.`, MainButtons)
		
	  } else if (text == '/start' && admin == true) {
			
			await bot.sendMessage(chatId, `Поздравляем 🎉

			Вы оказались в лучшем месте, чтобы начать зарабатывать через интернет от 10.000$ / мес на экологичном продукте с командой профессионалов

			✅ Жмите последовательно на кнопки в главном меню и уже через 15 минут у Вас сложится понимание 
			- как достичь Ваших финансовых целей вместе с нами в 2024 году.

			to change the language press: menu button -> /language`, AdminButtons)
		
		}
	  
		if (text == '/link' && admin == false) {
			await bot.sendMessage(chatId, `Чтобы подробнее узнать о UKG Holding - переходи по ссылке ниже 👇 

					🔗 ${botName}?start=${chatId}`, AboutMentor )
		
		} else if (text == '/link' && admin == true) {
			await bot.sendMessage(chatId, `Чтобы подробнее узнать о UKG Holding - переходи по ссылке ниже 👇 

					🔗 ${botName}?start=${chatId}`, AboutMentorAdm )
		}

		if (text == '/language'){
			await bot.sendMessage(chatId, `Please choose your Language 🌍 :`, LanguageButtons	)
		}

		if (text == '/fff') {
			await bot.sendMessage(chatId, `Поздравляем 🎉

			Вы оказались в лучшем месте, чтобы начать зарабатывать через интернет от 10.000$ / мес на экологичном продукте с командой профессионалов

			✅ Жмите последовательно на кнопки в главном меню и уже через 15 минут у Вас сложится понимание 
			- как достичь Ваших финансовых целей вместе с нами в 2024 году.

			to change the language press: menu button -> /language`, AdminButtons)
		}

		if(text == "/user"){
			let UserData = await fetchUser(msg.chat)
			let MentorData = await fetchMentor(msg.chat, UserData.Mentor)			
			console.log("Ментор", JSON.stringify(MentorData))
			bot.sendMessage(chatId,	`Ваш наставник : ${JSON.stringify(MentorData.UserName)}`
				);	
		}
		

	} catch (error){ return error}	

})

	bot.on('callback_query', async msg => {

		try{

		chatId = msg.message.chat.id;

		if (msg.data =="Про компанию" ){
			
			await bot.sendMessage(chatId, `✨ UKG Holding – это инновационная компания, которая объединила в себе надежность инвестиций в золото и перспективы криптовалюты. Мы предлагаем вам не просто инвестировать, но стать частью нашего прогрессивного и динамично развивающегося сообщества.

				https://www.youtube.com/watch?v=lAepxXqesLA`, AboutCompButtons)
		}

		if (msg.data =="Про компаниюAdm" ){
			
			await bot.sendMessage(chatId, `✨ UKG Holding – это инновационная компания, которая объединила в себе надежность инвестиций в золото и перспективы криптовалюты. Мы предлагаем вам не просто инвестировать, но стать частью нашего прогрессивного и динамично развивающегося сообщества.

				https://www.youtube.com/watch?v=lAepxXqesLA`, AboutCompButtonsAdm)
		}

		if (msg.data == "Про команду"){
			await bot.sendMessage(chatId, `☝️ Чтобы Вам заработать в любой компании, сначала нужно узнать - какая команда за ней стоит?
				Из видео вы поймете кто мы и чем занимаемся.
				Люди с заработком сотни тысяч  долларов занялись приняли предложение компании UKG Holding.
				Вы можете стать одним из нас.
				💎 Общение с успешными людьми, удаленный заработок с путешествиями круглый год - все это станет доступно и вам.

				Кто мы такие и какой опыт за нашими плечами - в видео.
				=======

				✅ Нажмите кнопку «Связь с наставником», чтобы получить личную консультацию.

				https://www.youtube.com/watch?v=VtZFmY-hvIA`, AboutTeamButtons)
		}

		if (msg.data == "Про командуAdm"){
			await bot.sendMessage(chatId, `☝️ Чтобы Вам заработать в любой компании, сначала нужно узнать - какая команда за ней стоит?
				Из видео вы поймете кто мы и чем занимаемся.
				Люди с заработком сотни тысяч  долларов занялись приняли предложение компании UKG Holding.
				Вы можете стать одним из нас.
				💎 Общение с успешными людьми, удаленный заработок с путешествиями круглый год - все это станет доступно и вам.

				Кто мы такие и какой опыт за нашими плечами - в видео.
				=======

				✅ Нажмите кнопку «Связь с наставником», чтобы получить личную консультацию.

				https://www.youtube.com/watch?v=VtZFmY-hvIA`, AboutTeamButtonsAdm)
		}

		if (msg.data  == "Пассивный доход"){
			await bot.sendMessage(chatId,`🏆 Почему UKG Holding и сколько может зарабатывать инвестор абсолютно пассивно?

				Уникальное сочетание золота и криптовалюты
				Возможность выхода на международный рынок
				Использование современных технологий в производстве
				Прозрачность и высокий уровень безопасности инвестиций
				Обоснованный пассивный доход с легального и прозрачного бизнеса

				https://www.youtube.com/watch?v=XtkgCadNZBg`, AboutPassiveProfit)
		}

		if (msg.data  == "Пассивный доходAdm"){
			await bot.sendMessage(chatId,`🏆 Почему UKG Holding и сколько может зарабатывать инвестор абсолютно пассивно?

				Уникальное сочетание золота и криптовалюты
				Возможность выхода на международный рынок
				Использование современных технологий в производстве
				Прозрачность и высокий уровень безопасности инвестиций
				Обоснованный пассивный доход с легального и прозрачного бизнеса

				https://www.youtube.com/watch?v=XtkgCadNZBg`, AboutPassiveProfitAdm)
		}

		if(msg.data == "Маркетинг план"){
			await bot.sendMessage(chatId, `Маркетинг план компании UKG Holding


				Это видео не для всех...
				А только для людей, которые хотят начать зарабатывать от 10.000$ в ближайшее время! 🚀🚀🚀
				Вы увидите, что нужно делать, чтобы зарабатывать активно.

				А именно:
				🔥 как выйти на 3.000$ / мес
				🧨 как выйти на 10.000$ / мес
				💣 как выйти на 100.000$ / мес

				После просмотра остается понять:

				- как продвигать продукт?
				- откуда брать клиентов?
				- и в чем именно вам поможет команда?

				Для этого смотрите разделы о команде и о системе продвижения.
				=======
				✅ Нажмите кнопку «Связь с наставником», чтобы получить личную консультацию.

				https://www.youtube.com/watch?v=AmQg5dk7O5o`, AboutMarketing)
		}

		if (msg.data == "Маркетинг планAdm"){
			await bot.sendMessage(chatId, `Маркетинг план компании UKG Holding


				Это видео не для всех...
				А только для людей, которые хотят начать зарабатывать от 10.000$ в ближайшее время! 🚀🚀🚀
				Вы увидите, что нужно делать, чтобы зарабатывать активно.

				А именно:
				🔥 как выйти на 3.000$ / мес
				🧨 как выйти на 10.000$ / мес
				💣 как выйти на 100.000$ / мес

				После просмотра остается понять:

				- как продвигать продукт?
				- откуда брать клиентов?
				- и в чем именно вам поможет команда?

				Для этого смотрите разделы о команде и о системе продвижения.
				=======
				✅ Нажмите кнопку «Связь с наставником», чтобы получить личную консультацию.

				https://www.youtube.com/watch?v=AmQg5dk7O5o`, AboutMarketingAdm)
		}

		if (msg.data == "Отзывы партнеров"){
			await bot.sendMessage(chatId, `https://www.youtube.com/watch?v=wCSbkEIeQb0
				https://www.youtube.com/watch?v=9CAufUoAL_s
				https://www.youtube.com/watch?v=Gm1_-1ffGTg
				https://www.youtube.com`, AboutRewievsPartners)
		}

		if (msg.data == "Отзывы партнеровAdm"){
			await bot.sendMessage(chatId, `https://www.youtube.com/watch?v=wCSbkEIeQb0
				https://www.youtube.com/watch?v=9CAufUoAL_s
				https://www.youtube.com/watch?v=Gm1_-1ffGTg
				https://www.youtube.com`, AboutRewievsPartnersAdm)
		}

		if (msg.data == "Возможности системы"){
			await bot.sendMessage(chatId, `❤️ Как команда поможет вам в заработке денег, выполнив 95% работы за вас?
				Наша главная ценность - создание условий для заработка партнерам.
				Что нужно человеку при обычном раскладе, чтобы зарабатывать в МЛМ?

				- создать трафик
				- обработать лидов
				- провести презентацию
				- обучить всех делать то же самое

				🚀 Мы же 95% работы выполняем за вас!

				И помогает в этом система автоматизации.

				В видео узнаете о инструменте, с которым сможете построить бизнес с доходом от 10.000$ / мес.

				(работая по 2-4 часа в день

				✅ Нажмите кнопку «Связь с наставником», чтобы получить личную консультацию.

				https://youtu.be/Lh4TwUS28m0`, AboutSocial)
		}

		if (msg.data == "Возможности системыAdm"){
			await bot.sendMessage(chatId, `❤️ Как команда поможет вам в заработке денег, выполнив 95% работы за вас?
				Наша главная ценность - создание условий для заработка партнерам.
				Что нужно человеку при обычном раскладе, чтобы зарабатывать в МЛМ?

				- создать трафик
				- обработать лидов
				- провести презентацию
				- обучить всех делать то же самое

				🚀 Мы же 95% работы выполняем за вас!

				И помогает в этом система автоматизации.

				В видео узнаете о инструменте, с которым сможете построить бизнес с доходом от 10.000$ / мес.

				(работая по 2-4 часа в день

				✅ Нажмите кнопку «Связь с наставником», чтобы получить личную консультацию.

				https://youtu.be/Lh4TwUS28m0`, AboutSocialAdm)
		}

		if (msg.data == "Наши соцсети"){
			await bot.sendMessage(chatId, `.
				➡️Сайт UKGHolding.net  (https://ukgholding.net/)
				➡️YOUTUBE  (https://www.youtube.com/@ukgholding)
				➡️Telegram канал UKG Holding  (https://t.me/UKG_holding)
				➡️Telegram чат UKG Holding  (https://t.me/UKG_Chat_ru)
				➡️Instagram  (https://www.instagram.com/ukgholding/)
				➡️Twitter  (https://twitter.com/UKG_Holding)
				➡️Обменник Купить/продать CGT токен (https://t.me/mtxchgbot)`, AboutMentor)
		}

		if(msg.data == "Наши соцсетиAdm"){
			await bot.sendMessage(chatId, `.
				➡️Сайт UKGHolding.net  (https://ukgholding.net/)
				➡️YOUTUBE  (https://www.youtube.com/@ukgholding)
				➡️Telegram канал UKG Holding  (https://t.me/UKG_holding)
				➡️Telegram чат UKG Holding  (https://t.me/UKG_Chat_ru)
				➡️Instagram  (https://www.instagram.com/ukgholding/)
				➡️Twitter  (https://twitter.com/UKG_Holding)
				➡️Обменник Купить/продать CGT токен (https://t.me/mtxchgbot)`, AboutMentorAdm)
		}

		if(msg.data == "Связь с наставником"){
			await bot.sendMessage(chatId, `@${msg.from.username}`)
		}

		if(msg.data == "Связь с наставникомAdm"){
			await bot.sendMessage(chatId, `@${msg.from.username}`)
		}

		if(msg.data == "Система обучения"){
			await bot.sendMessage(chatId, `в админ панель приходит запрос типа:

				💡 Выполните пожалуйста 3 простых шага, чтобы перейти в систему обучения:

				Шаг 1: Иметь личный кабинет с депозитом на сайте: https://ukgholding.net/cabinet

				Шаг 2: Сделать скриншот личного кабинета

				Шаг 3: Отправить скриншот в ответ на это сообщение

				Модератор проверит скриншот и добавит Вас в систему обучения в течении 24 часов.

				Важно. Отправлять скриншот необходимо в ответ на это сообщение!  Не наставнику, не в общий чат, а прямо сюда.`, Confirm)
		}

		if(msg.data == "Система обученияAdm"){
			await bot.sendMessage(chatId, `в админ панель приходит запрос типа:

				💡 Выполните пожалуйста 3 простых шага, чтобы перейти в систему обучения:

				Шаг 1: Иметь личный кабинет с депозитом на сайте: https://ukgholding.net/cabinet

				Шаг 2: Сделать скриншот личного кабинета

				Шаг 3: Отправить скриншот в ответ на это сообщение

				Модератор проверит скриншот и добавит Вас в систему обучения в течении 24 часов.

				Важно. Отправлять скриншот необходимо в ответ на это сообщение!  Не наставнику, не в общий чат, а прямо сюда.`, ConfirmAdm)
		}

		if(msg.data == "Личный кабинет"){
			console.log("globall mentor is : ", global.mentor)
			await bot.sendMessage(chatId, `Добро пожаловать в персональный кабинет бота. 

				Вас пригласил: ${global.mentor}

				Внимание чтобы стать наставником убедитесь что у Вас в настройках телеграма заполнена графа "Username"!

				🔗 Ваша реферальная ссылка: 🔗 https://t.me/${msg.message.from.username}?start=${chatId}

				Приглашено по Вашей реф. ссылке:
				- всего 0 чел
				- за последние 30 дней: 0 чел


				Из них прошли регистрацию: 0 чел`, MainMenu)
		}

		if(msg.data == "Личный кабинетAdm"){
			await bot.sendMessage(chatId, `Добро пожаловать в персональный кабинет бота. 

				Вас пригласил: ${global.mentor}

				Внимание чтобы стать наставником убедитесь что у Вас в настройках телеграма заполнена графа "Username"!

				🔗 Ваша реферальная ссылка: 🔗 https://t.me/${msg.message.from.username}?start=${chatId}

				Приглашено по Вашей реф. ссылке:
				- всего 0 чел
				- за последние 30 дней: 0 чел


				Из них прошли регистрацию: 0 чел`, MainMenuAdm)
		}

		if(msg.data == "Главное меню"){
			await bot.sendMessage(chatId, `💡Здесь главное меню и отсюда я готов показать тебе все!

 				🔥Главное что надо понять - в твоих руках сейчас ультрасовременный продукт - который позволит тебе уже сегодня, начать делать деньги.`,
 				MainButtons)
		}

		if(msg.data == "Главное менюAdm"){
			await bot.sendMessage(chatId, `💡Здесь главное меню и отсюда я готов показать тебе все!

 				🔥Главное что надо понять - в твоих руках сейчас ультрасовременный продукт - который позволит тебе уже сегодня, начать делать деньги.`,
 				AdminButtons)
		}

		if (msg.data == "Администрирование"){
			await bot.sendMessage(chatId, `Администрирование`, AdmButProceed)
		}

		if (msg.data == "Статистика"){
			await bot.sendMessage(chatId, `Статистика 
				Всего подписчиков : 
				За последние 30 дней : 
				За последние 7 дней : 
				За послледние 24 часа : `, MainStatistics)
		}

		if (msg.data == "Выгрузить статистику"){
			await bot.sendMessage(chatId, `Статистика 
				успешно экспортирована. `, BackToAdmin)
		}

		if (msg.data == "Статистика кликов"){
			await bot.sendMessage(chatId, `Статистика кликов по разделам

				Всего кликов: 0

				Про компанию (RU): 99 кликов
				Про команду (RU): 80 кликов
				Пассивный доход в компании (RU): 78 кликов
				Маркетинг план (RU): 72 кликов
				Отзывы партнеров (RU): 43 кликов
				Возможности системы автоматизации (RU): 53 кликов
				Наши Соцсети (RU): 61 кликов`, BackToStatistics)
		}

		if (msg.data == "Вернуться в статистику"){
			await bot.sendMessage(chatId, `Статистика 
				Всего подписчиков : 
				За последние 30 дней : 
				За последние 7 дней : 
				За послледние 24 часа : `, MainStatistics)
		}


		if (msg.data == "Создать рассылку"){
			await bot.sendMessage(chatId, `стандартные методы телеграм прикрепить файлы, написать текст, прикрепить видео, записать аудио



				Зона для отображения выгружаемых файлов


				`, SendingMessages)
		}

		if (msg.data == "Начать рассылку"){
			await bot.sendMessage(chatId, `Контент ушел в бота и виден всем !


					Рассылка успешно выполнена
				Всего отправлено: 203 сообщений`, BackToAdmin)
		}

		if (msg.data == "Сделать фото"){
			await bot.sendMessage(chatId, `фото


				Вы уверены что хотите отправить этот скриншот ?`, ClientSendProofPhoto)
		}

		if (msg.data == "КлиентПруфФото"){
			await bot.sendMessage(chatId, `✅Скриншот отправлен на утверждение✅

				Как только модератор  проверит информацию. Вы получите уведомление`, BackToAdmin)
		}

		if (msg.data == "Подтвердить"){
			await bot.sendMessage(chatId, `Пройти к обучению: @UKGStudy_bot`, ToLearningSystem)
		}

		if (msg.data == "Система обученияAllowed"){
			await bot.sendMessage(chatId, `🎓 Пройдите пошаговую систему обучения.

				✅ Получите занния которые помогут Вам построть большой международный бизнес с 
				компанией UKG Holding и нашей професиональной командой!`, LearningSystem)
		}

		if (msg.data == "Система обученияAllowedAdm"){
			await bot.sendMessage(chatId, `🎓 Пройдите пошаговую систему обучения.

				✅ Получите занния которые помогут Вам построть большой международный бизнес с 
				компанией UKG Holding и нашей професиональной командой!`, LearningSystemAdm)
		}

		if (msg.data == "Тренинг старт на миллион"){
			await bot.sendMessage(chatId, `Вы узнаете:

				🔸Как стать ТОП-лидером и долларовым Мультимиллионером.
				🔸Стратегии продвижения бизнеса.
				🔸Как пользоваться системой Автоматизации.

				🔸Какие 5 ошибок ломают большинство начинаний.
				🔸Какие инструменты не желательно использовать.

				🔸Фундаментальные правила успеха.
				🔸Как работать с состоянием.

				Ссылка на видео - https://youtu.be/rzad5S0kK9w`, TraningStartMillion)
		}

		if (msg.data == "Тренинг старт на миллионAdm"){
			await bot.sendMessage(chatId, `Вы узнаете:

				🔸Как стать ТОП-лидером и долларовым Мультимиллионером.
				🔸Стратегии продвижения бизнеса.
				🔸Как пользоваться системой Автоматизации.

				🔸Какие 5 ошибок ломают большинство начинаний.
				🔸Какие инструменты не желательно использовать.

				🔸Фундаментальные правила успеха.
				🔸Как работать с состоянием.

				Ссылка на видео - https://youtu.be/rzad5S0kK9w`, TraningStartMillionAdm)
		}

		if (msg.data == 'Академия продаж'){
			await bot.sendMessage(chatId, `Главная тема - как закрывать 70% сделок 🔥
				(и делать от 10 партнеров в первую линию каждый месяц)

				Сегодня в программе:
				► как делать от 10 партнеров в бизнес, уделяя не более часа в день?
				► как эффективно приглашать в систему, вебинары, трехсторонки?
				► пошаговый путь к первым 10.000$ с нуля

				Ссылка на видео - https://youtu.be/QMWo1W6ENdE`, SalesAcademy)
		}

		if (msg.data == 'Академия продажAdm'){
			await bot.sendMessage(chatId, `Главная тема - как закрывать 70% сделок 🔥
				(и делать от 10 партнеров в первую линию каждый месяц)

				Сегодня в программе:
				► как делать от 10 партнеров в бизнес, уделяя не более часа в день?
				► как эффективно приглашать в систему, вебинары, трехсторонки?
				► пошаговый путь к первым 10.000$ с нуля

				Ссылка на видео - https://youtu.be/QMWo1W6ENdE`, SalesAcademyAdm)
		}

		if (msg.data == 'Работа с соцсетями'){
			await bot.sendMessage(chatId, `После прохождения тренинга «Работа с соц сетями» вам больше не придется:

				❌Составлять список контактов,
				❌Писать людям первым,
				❌Работать с возражениями.

				Сегодня вы узнаете:

				► Как составить АВАТАР клиента?
				► Как активировать СИСТЕМУ АВТОМАТИЗАЦИИ?
				► Чего делать КАТЕГОРИЧЕСКИ не нужно?

				► Как "Воровать Как Художник"?
				► Как настроить свой ИНСТАГРАМ?
				► Базовые правила КОПИРАЙТИНГА.

				► Список ВИДЕО, которые надо ЗАПИСАТЬ.

				ПРОСТО ВОЗЬМИ И НАЧНИ ДЕЛАТЬ. И ВСЕ У ТЕБЯ БУДЕТ ПОЛУЧАТЬСЯ ЛЕГКО!

				ГЛАВНОЕ - Научись пользоваться системой!

				Ссылка на видео - https://youtu.be/2yxdprLS2zg`, SocialMediaWork)
		}
		
		if (msg.data == 'Работа с соцсетямиAdm'){
			await bot.sendMessage(chatId, `После прохождения тренинга «Работа с соц сетями» вам больше не придется:

				❌Составлять список контактов,
				❌Писать людям первым,
				❌Работать с возражениями.

				Сегодня вы узнаете:

				► Как составить АВАТАР клиента?
				► Как активировать СИСТЕМУ АВТОМАТИЗАЦИИ?
				► Чего делать КАТЕГОРИЧЕСКИ не нужно?

				► Как "Воровать Как Художник"?
				► Как настроить свой ИНСТАГРАМ?
				► Базовые правила КОПИРАЙТИНГА.

				► Список ВИДЕО, которые надо ЗАПИСАТЬ.

				ПРОСТО ВОЗЬМИ И НАЧНИ ДЕЛАТЬ. И ВСЕ У ТЕБЯ БУДЕТ ПОЛУЧАТЬСЯ ЛЕГКО!

				ГЛАВНОЕ - Научись пользоваться системой!

				Ссылка на видео - https://youtu.be/2yxdprLS2zg`, SocialMediaWorkAdm)
			}
		} catch (error){return error;}
	})

}

start ();
