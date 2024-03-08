const TelegramApi = require('node-telegram-bot-api');
const token = '7051185573:AAH3diL8EhId8qtzHM2VhB0BzvGWaVEC5fc';
const bot = new TelegramApi(token, {polling:true});
const Json2CsvParser = require("json2csv").Parser;
const fs = require("fs");
const path = require("path");
let admin = false;
let adminName = '338176795';
let User={};
let User2={};
let User3={};
let mediaInfo = [];
User.systemLearn = 'Система обучения';

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
			[{text : '💼Личный кабинет💼', callback_data : 'Личный кабинет'}]
			
			]
		
	})
};

const MainButtonsProceed = {
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
			[{text : '💡Система обучения💡', callback_data : 'Система обученияAllowed'}],
			[{text : '💼Личный кабинет💼', callback_data : 'Личный кабинет'}]
			
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
			[{text : '💡Система обучения💡', callback_data : 'Система обученияAllowedAdm'}],
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
			[{text : '💎Про команду💎', callback_data : 'Про командуAdm'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставникомAdm'}],
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
			[{text : '🏆Пассивный доход в компании🏆', callback_data : 'Пассивный доходAdm'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставникомAdm'}],
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
			[{text : '❤️Маркетинг план❤️', callback_data : 'Маркетинг планAdm'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставникомAdm'}],
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
			[{text : '🗣Отзывы партнеров🗣', callback_data : 'Отзывы партнеровAdm'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставникомAdm'}],
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
			[{text : '🚀Возможности системы автоматизации🚀', callback_data : 'Возможности системыAdm'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставникомAdm'}],
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
			[{text : '🧭Наши соцсети🧭', callback_data : 'Наши соцсетиAdm'}],
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставникомAdm'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное менюAdm'}]
		]
	})
};

const MentorContact = {
	reply_markup: JSON.stringify({
		inline_keyboard: [	
			
			[{text : '📱Связь с наставником📱', url:'tg://user?id=@R0m44'}]
			
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
			[{text : '📱Связь с наставником📱', callback_data : 'Связь с наставникомAdm'}],
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

const AreYouShure = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '📋Отправить📋', callback_data : 'ОтправитьСкрин'}],
			[{text : '📋Отменить📋', callback_data : 'ОтменитьСкрин'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное меню'}]
		]
	})
};
const AreYouShureAdm = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : '📋Отправить📋', callback_data : 'ОтправитьСкрин'}],
			[{text : '📋Отменить📋', callback_data : 'ОтменитьСкрин'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное менюAdm'}]
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
			[{text : 'Отменить', callback_data : 'Создать рассылку'}],
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
			[{text : 'Подтвердить', callback_data : 'Подтвердить'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное меню'}]			
		]
	})
};

const ConfirmAdm = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : 'Подтвердить', callback_data : 'Система обученияAllowedAdm'}],
			[{text : '📋Главное меню📋', callback_data : 'Главное менюAdm'}]			
		]
	})
};

const ConfirmPhotoAprove = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text : 'Подтвердить', callback_data : 'ПодтвердитьPhotoAprove'}],
			[{text : 'Отменить', callback_data : 'ОтменитьPhotoAprove'}]			
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
//run().catch(console.dir);



const start = () => {
	
	bot.setMyCommands([

		{command: '/start', description: 'Приветствую Ваc!'},
		{command: '/link', description: 'Персональная Ссылка'},
		{command: '/language', description: 'Choose your language'}

	])

	const dbUsers = client.db('UKGLearningBot').collection('Users');
	//let mentorI;		

	
	
	async function writeGetUser(data, mentor){
		
		try {

			//console.debug("data Debug", data);
			//console.log("mentor inside writeGetUser", mentor);
			let User = {};

			await client.connect();
			
			const filter = {TG_ID: data.id};
			const mentorOne = {TG_ID: Number(mentor)};			
			let now = new Date();
			now.setUTCHours(now.getUTCHours() + 2);
			//const formattedDate = formatDate(now);
			
			await dbUsers.updateOne(filter,

				{$set: {"UserName": data.username, "Name": data.first_name, "Surname": data.last_name}, $setOnInsert: {"Mentor": mentor, "RegDate": now}}, 
				{upsert:true}

			)				
			
			let get_user = await dbUsers.findOne(filter); 
			let get_mentor = await dbUsers.findOne(mentorOne);
			//console.log("getMent", get_mentor);
			mentor_data = {TG_ID: get_mentor.TG_ID}
			//console.log('trying get_user.MentorName',get_user.MentorName == true);
			
			if (!get_user.MentorName){

				await dbUsers.updateOne(filter, { 

		    	$set: { "MentorName": get_mentor.UserName }
		  
		  	}, { upsert: true })


			}			

			get_user = await dbUsers.findOne(filter); 			

			if (get_user.UserName != get_mentor.UserName ){

				//console.log("Mentor data fired", get_mentor);
			  const followersCount = isNaN(get_mentor.Followers) ? 1 : get_mentor.Followers + 1;

			  await dbUsers.updateOne(mentor_data, {

			  	$set: {"Followers": followersCount}
			  
			  })

			}
			
			User = get_user;
			//console.log("User inside writeGetUser", User)

			//User.Mentor = get_mentor.UserName;
			
			//console.log("USer inside WriteGet", User)
			
			return User;
			
		} finally {
		
			await client.close();
		
		}
	}

	

	async function writeUserPass(data){
		
		try {

			//console.debug("data Debug WriteUserPass", data);
			
			
			await client.connect();
			
			const filter = {TG_ID: data.id};
				
			let get_user = await dbUsers.findOne(filter);
			const mentorFilter = {TG_ID: Number(get_user.Mentor)}; 	
			let get_mentor = await dbUsers.findOne(mentorFilter);	
			//console.log('mentorFilter inside writeUserPass', mentorFilter);

			const result = await dbUsers.updateOne(

			  filter,
			    { $set: { "UserPass": "Passed" } },
			  		{ upsert: true }
			);

			const followerRegisteredCount = isNaN(get_mentor.FollowerRegistered) ? 1 : get_mentor.FollowerRegistered + 1;				

			//console.log("Before mentorUpdate: get_mentor", get_mentor);
			const mentorUpdate = await dbUsers.updateOne(

				mentorFilter,
					{$set: { "FollowerRegistered": followerRegisteredCount }},
						{ upsert: true}

			)				

			//console.log('mentorUpdate modyfier count', mentorUpdate.modifiedCount);
			//console.log("mentorUpdate upserted ID", mentorUpdate.upsertedId);
			//console.log("result writeUserPass ", result);
			
		} finally {
		
			await client.close();
		
		}
	}

	async function getUser(data){

		try {

			await client.connect();				
   			console.log("data inside getUser", data)
	 		const filter = {TG_ID: data.id}
			let get = await dbUsers.findOne(filter)
			
			console.log("get User inside ", get)

			if (get == null) {return null}

			 // Текущая дата и время
			const currentDateTime = new Date();

			// Начальная дата (текущая дата и время)
			const endDate = new Date(currentDateTime);
			//console.log("start date", endDate);
			// Конечная дата (startDate - 1 месяц)
			const startDate = new Date(endDate);
			startDate.setMonth(endDate.getMonth() - 1);
			//console.log("endDate ", startDate)

			// Формируем запрос для выборки данных за определенный период и по полю MentorName
			const query = {
			  RegDate: {
			    $gte: startDate, // Больше или равно начальной дате
			    $lt: endDate     // Меньше конечной даты
			  },
			  MentorName: get.UserName // Укажите имя наставника, по которому хотите фильтровать
			};

			// Выполняем запрос к базе данных
			const result = await dbUsers.find(query).toArray();

			// В переменной result теперь содержатся записи, удовлетворяющие условиям времени и имени наставника
			//console.log("result", result.length);
			//User2.MonthlyFollowers = result.length;

			const MonthlyFollowers = await dbUsers.updateOne(

				filter,
					{$set: { "MonthlyFollowers": result.length }},
						{ upsert: true}

			)	

			get = await dbUsers.findOne(filter)	

			return get;

		} finally {

			await client.close();

		}
	}


	async function csvFile() {

	  try {

	    await client.connect();

	    const csvFields = ['TG_ID', 'UserName', 'Name', 'Surname', 'MentorName', 'RegDate'];

	    const userData = await dbUsers.find({}).toArray();

	    const formattedUserData = userData.map(user => {

	      const formattedUser = {};

	      csvFields.forEach(field => {

	        formattedUser[field] = user[field];

	      });

	      return formattedUser;

	    });

	    const json2csvParser = new Json2CsvParser({

	      csvFields

	    });

	    const csvData = json2csvParser.parse(formattedUserData);

	    fs.writeFile('./Statistic.csv', csvData, function (err) {

	      if (err) throw err;

	      //console.log('Wrote to Statistic.csv successfully!');

	    });

	    //console.log('File downloaded successfully');

	  } finally {

	    await client.close();
	  }
	}

	async function statisticsOverall() {
	  try {
	    await client.connect();

	    // Текущая дата и время
	    const currentDateTime = new Date();

	    // Записи за месяц
	    const startDateMonth = new Date(currentDateTime);
	    startDateMonth.setMonth(currentDateTime.getMonth() - 1);

	    // Записи за 7 дней
	    const startDate7Days = new Date(currentDateTime);
	    startDate7Days.setDate(currentDateTime.getDate() - 7);

	    // Записи за 24 часа
	    const startDate24Hours = new Date(currentDateTime);
	    startDate24Hours.setHours(currentDateTime.getHours() - 24);

	    // Записи за все времена
	    const queryAllTime = {};

	    const queries = [
	      {
	        period: 'месяц',
	        query: {
	          RegDate: {
	            $gte: startDateMonth,
	            $lt: currentDateTime
	          }
	        }
	      },
	      {
	        period: '7 дней',
	        query: {
	          RegDate: {
	            $gte: startDate7Days,
	            $lt: currentDateTime
	          }
	        }
	      },
	      {
	        period: '24 часа',
	        query: {
	          RegDate: {
	            $gte: startDate24Hours,
	            $lt: currentDateTime
	          }
	        }
	      },
	      {
	        period: 'все времена',
	        query: queryAllTime
	      }
	    ];

	    const resultObject = {};

	    for (const { period, query } of queries) {
	      const result = await dbUsers.find(query).toArray();

	      //console.log(`Результат за ${period}:`, result.length);

	      resultObject[period] = result.length;
	    }

	    return resultObject;
	  } finally {
	    await client.close();
	  }
	}

	async function messageHandler(msg) {


    if (User2.sendCombMessage) {

        const chatId = msg.chat.id;
        //console.log("Message mass sending", msg);

        // Обработка текста
        let text = msg.text || '';
        if (text.startsWith("/")) {
        	return;			            
        }
        //console.log("text inside bot.on", text)
        // Обработка фотографии (всегда будет одна)
        const photo = msg.photo ? msg.photo[msg.photo.length - 1] : null;

        // Обработка видео
        const video = msg.video || {};

        // Обработка аудио
        const audio = msg.audio || {};

        const voice = msg.voice || {};

        const video_note = msg.video_note || {};



        if (text) {
        		//console.log("text inside text fired", text)
				    // Если текст уже есть в массиве, заменяем его
				    const textIndex = mediaInfo.findIndex(info => info.startsWith('Текст:'));
				    if (textIndex !== -1) {
				        mediaInfo[textIndex] = `Текст: ${text}`;
				    } else {
				        // Иначе добавляем новый текст
				        mediaInfo.push(`Текст: ${text}`);
				    }
				    User2.text = text; // Перезаписываем значение при каждом новом тексте
				}

				if (msg.caption) {
					mediaInfo.push(`Caption:  ${msg.caption}`)
          User2.caption = msg.caption;
          	if (msg.caption_entities) {
          		User2.caption_entities = msg.caption_entities
          	}
        }

				//console.log("Photo inside preparing sendings", msg.caption);
        if (photo) {
            mediaInfo.push(`Фото: загружено`);
            User2.photo = photo.file_id; // Перезаписываем значение при каждой загрузке фотографии
            
        }

        if (video.file_id) {
				    const videoIndex = mediaInfo.findIndex(info => info.startsWith('Видео:'));
				    if (videoIndex !== -1) {
				        mediaInfo[videoIndex] = `Видео: загружено`;
				    } else {
				        mediaInfo.push(`Видео: загружено`);
				    }
				    User2.video = video.file_id;
				}

				if (audio.file_id) {
				    const audioIndex = mediaInfo.findIndex(info => info.startsWith('Аудио:'));
				    if (audioIndex !== -1) {
				        mediaInfo[audioIndex] = `Аудио: загружено`;
				    } else {
				        mediaInfo.push(`Аудио: загружено`);
				    }
				    User2.audio = audio.file_id;
				}

				if (voice.file_id) {
				    const voiceIndex = mediaInfo.findIndex(info => info.startsWith('Voice:'));
				    if (voiceIndex !== -1) {
				        mediaInfo[voiceIndex] = `Voice загружен`;
				    } else {
				        mediaInfo.push(`Voice загружен`);
				    }
				    User2.voice = voice.file_id;
				}

				if (video_note.file_id) {
				    const videoNoteIndex = mediaInfo.findIndex(info => info.startsWith('Video_note:'));
				    if (videoNoteIndex !== -1) {
				        mediaInfo[videoNoteIndex] = `Video_note загружен`;
				    } else {
				        mediaInfo.push(`Video_note загружен`);
				    }
				    User2.video_note = video_note.file_id;
				}

        //console.log("mediaInfo ", mediaInfo);
        // Скомпановать все в одно сообщение
        const combinedMessage = mediaInfo.join('\n');

        //console.log("user2 before msg.caption ", User2)
        
        if (msg.caption) {
        	const captionEnt = msg.caption_entities;
        	//console.log("captionEnt", captionEnt)
        	const capp = `<b>Создано сообщение из ваших материалов:\n${combinedMessage}</b>`;
        	await bot.sendMessage(chatId, capp, {
        		parse_mode: "HTML",
        		reply_markup: SendingMessages.reply_markup
        	});

        } else await bot.sendMessage(chatId, `Создано сообщение из ваших материалов:\n${combinedMessage}`, SendingMessages

        );
        
        //
    }
			}

	


		
	bot.on('message', async msg => {
		
	try {		
		
		let Reg = /^\/start \d+$/;
		mentor = msg.text.split(" ");
		//console.log(msg.text)
		//console.log("Mentor bot.on", mentor)		
		let botName = 'https://t.me/Holding_UKG_bot';		
		const text = msg.text;
		const chatId = msg.chat.id;	

		/*if (mentor.length == 2){

			User = await writeGetUser(msg.chat, mentor[1]).catch(console.dir);
		
		} else User = await getUser(msg.chat).catch(console.dir);*/
				
		/*if (msg.chat.id == adminName) {

			
			admin = true;
		
		}*/
		
		//Start via link nonAdmin
		if (Reg.test(msg.text) && msg.chat.id != adminName){	

			User2.sendCombmessage = false;			
			const User = await writeGetUser(msg.chat, mentor[1]).catch(console.dir);
			//mentorI = mentor[1];

			if (User.UserPass){User.systemLearn = 'Система обученияAllowed'} else User.systemLearn = 'Система обучения';

			let switcher;

			if (User.systemLearn == 'Система обучения'){switcher = MainButtons} else switcher = MainButtonsProceed;			

			await bot.sendMessage(chatId, `<b>Поздравляем! 🎉\n\nВы оказались в лучшем месте, чтобы начать зарабатывать через интернет от 1000$ / мес на экологичном продукте с командой профессионалов.\n\n✅ Жмите последовательно на кнопки в главном меню и уже через 15 минут у вас сложится понимание - как достичь ваших финансовых целей вместе с нами в 2024 году.\n\nto change language press: menu button -> /language</b>`, 
				{parse_mode: "HTML", reply_markup: switcher.reply_markup})
		
		//Star via link Admin
		} else if (Reg.test(msg.text) && msg.chat.id == adminName) {
			
			User2.sendCombmessage = false;			
			const User = await writeGetUser(msg.chat, mentor[1]).catch(console.dir);							

			await bot.sendMessage(chatId, `<b>Поздравляем! 🎉\n\nВы оказались в лучшем месте, чтобы начать зарабатывать через интернет от 1000$ / мес на экологичном продукте с командой профессионалов.\n\n✅ Жмите последовательно на кнопки в главном меню и уже через 15 минут у вас сложится понимание - как достичь ваших финансовых целей вместе с нами в 2024 году.\n\nto change language press: menu button -> /language</b>`, 
				{parse_mode: "HTML", reply_markup: AdminButtons.reply_markup})

		// /Start non Admin
		} else if (text == '/start' && msg.chat.id != adminName) {

			//console.log("start 1")
			//console.log("User sendCombMess non Addm", User.sendCombmessage)
			User2.sendCombmessage = false;
			//console.log("start 2")

			const User = await getUser(msg.chat).catch(console.dir);

			if (User == null) { await bot.sendMessage(chatId, `<b>Неправильное использование системы! пожалуйста зайдите в бота по ссылке типа : https://t.me/Holding_UKG_bot?start=338176795; а не по ссылке : @Holding_UKG_bot \n\nTo change language press: menu button -> /language</b>`, 
				{parse_mode: "HTML"}) }
			//console.log("start 3")
			//console.log("User /start admin false", User);

			if (User.UserPass){User.systemLearn = 'Система обученияAllowed'} else User.systemLearn = 'Система обучения';

			//console.log("start 4")		
			let switcher;

			if (User.systemLearn == 'Система обучения'){switcher = MainButtons} else switcher = MainButtonsProceed;

			//console.log("start 5")
			await bot.sendMessage(chatId, `<b>Поздравляем! 🎉\n\nВы оказались в лучшем месте, чтобы начать зарабатывать через интернет от 1000$ / мес на экологичном продукте с	командой профессионалов.\n\n✅ Жмите последовательно на кнопки в главном меню и уже через 15 минут у вас сложится понимание - как достичь ваших финансовых целей вместе с нами в 2024 году.\n\nTo change language press: menu button -> /language</b>`, 
				{parse_mode: "HTML", reply_markup: switcher.reply_markup})
		
	  // /Start Admin
	  } else if (text == '/start' && msg.chat.id == adminName) {

	  	//console.log("start 1")
	  	//console.log("User sendCombMess Addm", User.sendCombmessage)
	  	User2.sendCombmessage = false;
	  	//console.log("start 2")
	  	const User = await getUser(msg.chat).catch(console.dir);

	  	if (User == null) { await bot.sendMessage(chatId, `<b>Неправильное использование системы! пожалуйста зайдите в бота по ссылке типа : https://t.me/Holding_UKG_bot?start=338176795; а не по ссылке : @Holding_UKG_bot \n\nTo change language press: menu button -> /language</b>`, 
				{parse_mode: "HTML"}) }
	  	//console.log("start 3")
			//console.log("User start adm true", User);
			
			await bot.sendMessage(chatId, `<b>Поздравляем 🎉\n\nВы оказались в лучшем месте, чтобы начать зарабатывать через интернет от 1000$ / мес на экологичном продукте с командой профессионалов\n\n✅ Жмите последовательно на кнопки в главном меню и уже через 15 минут у Вас сложится понимание\n\n- как достичь Ваших финансовых целей вместе с нами в 2024 году.\n\nto change language press: menu button -> /language</b>`, {parse_mode: "HTML", reply_markup: AdminButtons.reply_markup})
		
		}
	  
	  //Link Nonadmin
		if (text == '/link' && msg.chat.id != adminName) {

			await bot.sendMessage(chatId, `Чтобы подробнее узнать о UKG Holding - переходи по ссылке ниже 👇 

					🔗 ${botName}?start=${chatId}`, AboutMentor )
		
		//Link Admin
		} else if (text == '/link' && msg.chat.id != adminName) {

			await bot.sendMessage(chatId, `Чтобы подробнее узнать о UKG Holding - переходи по ссылке ниже 👇 

					🔗 ${botName}?start=${chatId}`, AboutMentorAdm )
		}

		//Language NonAdmin
		if (text == '/language'){

			await bot.sendMessage(chatId, `Please choose your Language 🌍 :`, LanguageButtons	)
		}			

	} catch (error){ return error}	

})

	bot.on('callback_query', async msg => {

		try {
		//console.log("srabotal calback", MainButtons)
		chatId = msg.message.chat.id;		

		if (msg.data =="Про компанию" ){
			
			await bot.sendMessage(chatId, `✨  UKG Holding – это инновационная компания, которая объединила в себе надежность инвестиций в золото и перспективы криптовалюты. Мы предлагаем вам не просто инвестировать, но стать частью нашего прогрессивного и динамично развивающегося сообщества.

				 https://www.youtube.com/watch?v=lAepxXqesLA`, AboutCompButtons)
		}

		if (msg.data =="Про компаниюAdm" ){
			
			await bot.sendMessage(chatId, `✨  UKG Holding – это инновационная компания, которая объединила в себе надежность инвестиций в золото и перспективы криптовалюты. Мы предлагаем вам не просто инвестировать, но стать частью нашего прогрессивного и динамично развивающегося сообщества.

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

		if (msg.data == "Маркетинг план"){

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

				В видео узнаете о инструменте, с которым сможете построить бизнес с доходом от 1000$ / мес.

				(работая по 2-4 часа в день

				✅ Нажмите кнопку «Связь с наставником», чтобы получить личную консультацию.

				https://youtu.be/eCWPo7yLNNo`, AboutSocial)
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

				В видео узнаете о инструменте, с которым сможете построить бизнес с доходом от 1000$ / мес.

				(работая по 2-4 часа в день

				✅ Нажмите кнопку «Связь с наставником», чтобы получить личную консультацию.

				https://youtu.be/eCWPo7yLNNo`, AboutSocialAdm)
		}

		if (msg.data == "Наши соцсети"){

			await bot.sendMessage(chatId, `.
				➡️Сайт UKGHolding.org  (https://ukgholding.org/)
				➡️YOUTUBE  (https://www.youtube.com/@ukgholding)
				➡️Telegram канал UKG Holding  (https://t.me/UKG_holding)
				➡️Telegram чат UKG Holding  (https://t.me/UKG_Chat_ru)
				➡️Instagram  (https://www.instagram.com/ukgholding/)
				➡️Twitter  (https://twitter.com/UKG_Holding)
				➡️Обменник Купить/продать CGT токен (https://t.me/BitFineBot)`, AboutMentor)
		}

		if (msg.data == "Наши соцсетиAdm"){

			await bot.sendMessage(chatId, `.
				➡️Сайт UKGHolding.org  (https://ukgholding.org/)
				➡️YOUTUBE  (https://www.youtube.com/@ukgholding)
				➡️Telegram канал UKG Holding  (https://t.me/UKG_holding)
				➡️Telegram чат UKG Holding  (https://t.me/UKG_Chat_ru)
				➡️Instagram  (https://www.instagram.com/ukgholding/)
				➡️Twitter  (https://twitter.com/UKG_Holding)
				➡️Обменник Купить/продать CGT токен (https://t.me/BitFineBot)`, AboutMentorAdm)
		}

		if (msg.data == "Связь с наставником"){
			const User = await getUser(msg.from).catch(console.dir);
			//console.log("user связь с наставником", User);
			await bot.sendMessage(chatId, `<b>Внимание если наставник не записан у Вас в телефонной книге 
				или у него стоит запрет в настройках конфиденциальности,связь с настваником не предоставится @${User.MentorName}👇</b>`,{parse_mode: "HTML",
				reply_markup: JSON.stringify({
					inline_keyboard: [
						[{text : '📞Связь📞', url : `t.me/@${User.MentorName}`}],
						[{text : '📋Главное меню📋', callback_data : 'Главное меню'}]			
					]
				})
			})
		}

		if (msg.data == "Связь с наставникомAdm"){
			const User = await getUser(msg.from).catch(console.dir);
			//console.log("user связь с наставником", User);
			await bot.sendMessage(chatId, `Внимание если наставник не записан у Вас в 
				телефонной книге или у него стоит запрет в настройках конфиденциальности, 
				связь с настваником не предоставится 
				@${User.MentorName}👇`, {
				reply_markup: JSON.stringify({
					inline_keyboard: [
						[{text : '📞Связь📞', url : `t.me/@${User.MentorName}`}],
						[{text : '📋Главное меню📋', callback_data : 'Главное менюAdm'}]			
					]
				})
			})
		}

		if (msg.data == "Система обучения"){

			User3.photocheck = true;
			//console.log("система обучения", User)
			await bot.sendMessage(chatId, `

				💡 Выполните пожалуйста 3 простых шага, чтобы перейти в систему обучения:

				Шаг 1: Иметь личный кабинет с депозитом на сайте: https://ukgholding.org/login

				Шаг 2: Сделать скриншот личного кабинета

				Шаг 3: Отправить скриншот в ответ на это сообщение

				Модератор проверит скриншот и добавит Вас в систему обучения в течении 24 часов.

				Важно. Отправлять скриншот необходимо в ответ на это сообщение!  Не наставнику, не в общий чат, а прямо сюда.`, MainMenu)
		}

		if (msg.data == "Система обученияAdm"){

			await bot.sendMessage(chatId, `

				💡 Выполните пожалуйста 3 простых шага, чтобы перейти в систему обучения:

				Шаг 1: Иметь личный кабинет с депозитом на сайте: https://ukgholding.org/login

				Шаг 2: Сделать скриншот личного кабинета

				Шаг 3: Отправить скриншот в ответ на это сообщение

				Модератор проверит скриншот и добавит Вас в систему обучения в течении 24 часов.

				Важно. Отправлять скриншот необходимо в ответ на это сообщение!  Не наставнику, не в общий чат, а прямо сюда.`, ConfirmAdm)
		}
		
		if (msg.data == "Личный кабинет"){	
				const User = await getUser(msg.from).catch(console.dir);					
				//console.log("msg личный кабинет", User2)
				await bot.sendMessage(chatId, `<b>Добро пожаловать в персональный кабинет бота.</b>

					Вас пригласил: @${User.MentorName}

					Внимание чтобы стать наставником убедитесь что у Вас в настройках телеграма заполнена графа "Username"!

					🔗 Ваша реферальная ссылка: 🔗 https://t.me/${msg.message.from.username}?start=${chatId}

					Приглашено по Вашей реф. ссылке:
					- всего ${User.Followers ? User.Followers : 0} чел
					- за последние 30 дней: ${User.MonthlyFollowers ? User.MonthlyFollowers : 0} чел


					Из них прошли регистрацию: ${User.FollowerRegistered ? User.FollowerRegistered : 0} чел`, { 
					  parse_mode: "HTML", reply_markup: MainMenu.reply_markup
					}
				)					
			
		}		
			

		if (msg.data == "Личный кабинетAdm"){
			const User = await getUser(msg.from).catch(console.dir);
			
			await bot.sendMessage(chatId, `<b>Добро пожаловать в персональный кабинет бота.</b>

				Вас пригласил: @${User.MentorName}

				Внимание чтобы стать наставником убедитесь что у Вас в настройках телеграма заполнена графа "Username"!

				🔗 Ваша реферальная ссылка: 🔗 https://t.me/${msg.message.from.username}?start=${chatId}

				Приглашено по Вашей реф. ссылке:
				- всего ${User.Followers ? User.Followers : 0} чел
				- за последние 30 дней: ${User.MonthlyFollowers ? User.MonthlyFollowers : 0} чел


				Из них прошли регистрацию: ${User.FollowerRegistered ? User.FollowerRegistered : 0} чел`, { 
				  parse_mode: "HTML", reply_markup: MainMenuAdm.reply_markup
				}
			)
		}

		if (msg.data == "Главное меню"){

			let switcher;

			if (User3.photocheck){User3.photocheck = false};
			//console.log("Главное меню user", User );

			if (User.UserPass || User.systemLearn == 'Система обученияAllowed'){switcher = MainButtonsProceed} else switcher = MainButtons;

			//console.log("Useerr glavnoe menu", User.systemLearn)
			//console.log("Главное меню", msg);
			await bot.sendMessage(chatId, `<b>💡Здесь главное меню и отсюда я готов показать тебе все!</b>\n\n🔥Главное что надо понять - в твоих руках сейчас ультрасовременный продукт - который позволит тебе уже сегодня, начать делать деньги.`, { 
				  parse_mode: "HTML", reply_markup: switcher.reply_markup

				});

 				
		}

		if (msg.data == "Главное менюAdm"){

			await bot.sendMessage(chatId, `<b>💡Здесь главное меню и отсюда я готов показать тебе все!</b>\n\n🔥Главное что надо понять - в твоих руках сейчас ультрасовременный продукт - который позволит тебе уже сегодня, начать делать деньги.`,{
 				parse_mode: "HTML", reply_markup: AdminButtons.reply_markup
 			});
		}

		if (msg.data == "Администрирование"){

			
			User2.sendCombMessage = false;

			await bot.sendMessage(chatId, `Администрирование`, AdmButProceed)
		}

		if (msg.data == "Статистика"){
			await bot.sendMessage(chatId, `Загрузка...`)
			let stat = await statisticsOverall();
			//console.log("stat in stat ", stat)
			await bot.sendMessage(chatId, `Статистика 
				Всего подписчиков : ${stat['все времена']}
				За последние 30 дней : ${stat.месяц}
				За последние 7 дней : ${stat['7 дней']}
				За послледние 24 часа : ${stat['24 часа']}`, MainStatistics)
		}

		if (msg.data == "Выгрузить статистику"){

			await bot.sendMessage(chatId, `Загрузка.......`)
			
			await csvFile().catch(console.dir);;	
			
			await bot.sendDocument(chatId, './Statistic.csv',{
				caption: 'Статистика',
		  	contentType: 'text/csv' // Указываем тип контента
		  });
			
			await bot.sendMessage(chatId, `
				успешно экспортирована. `, BackToAdmin)
		}

		if (msg.data == "Статистика кликов"){

			await bot.sendMessage(chatId, `Статистика кликов по разделам

				Всего кликов: 289

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
			//console.log("msg data ", msg)
			User2.sendCombMessage = true;			
			//bot.off("message");
			bot.off('message', messageHandler);
			
			//console.log("mediaInfo sending", mediaInfo);
			delete User2.text;
			delete User2.photo;
			delete User2.video;
			delete User2.audio;
			delete User2.voice;
			delete User2.video_note;
			delete User2.caption;

			bot.on('message', messageHandler);
			mediaInfo = [];				

			//console.log("UserSend after if", User.sendCombMessage);			

			await bot.sendMessage(chatId, `стандартные методы телеграм прикрепить файлы, написать текст, прикрепить видео, записать аудио



				Зона для отображения выгружаемых файлов


				`, SendingMessages)
		}














		if (msg.data == "Начать рассылку"){
			await bot.sendMessage(chatId, `Загрузка...`)
			await client.connect();

			const filter = {TG_ID: chatId};
			let get_user = await dbUsers.findOne(filter); 
			//console.log("statistic get_user before", get_user);

			const messageOverallCount = isNaN(get_user.messageOverallCount) ? 1 : get_user.messageOverallCount + 1;				

			//console.log("Before mentorUpdate: get_mentor", get_mentor);
			let statisticCount = await dbUsers.updateOne(

				filter,
					{$set: { "messageOverallCount": messageOverallCount }},
						{ upsert: true}

			)	
			get_user = await dbUsers.findOne(filter);
			//console.log("statistic get_user after", get_user);

			
			

			const messageToSend = `<b>${User2.text}</b>`;
      const allUserIds = await dbUsers.find({}, { projection: { TG_ID: 1, _id: 0 } }).toArray();
      //console.log("msg inside begin sending ", msg)
			//await console.log("all Users Ids ", allUserIds);

			

			//console.log("User2 Begin Sending", User2)
			// Отправка фотографии
      if (User2.photo) {
          const photoId = User2.photo;
          if (User2.caption) {
          	capMessage = `<b>${User2.caption}</b>`;

          	allUserIds.forEach(async (doc) => {
						    const targetChatId = doc.TG_ID;
						    await bot.sendPhoto(targetChatId, photoId, {caption: capMessage, parse_mode: "HTML" });
					   })

          	//await bot.sendPhoto(chatId, photoId, { caption: capMessage, parse_mode: "HTML" });
          }  else (allUserIds.forEach(async (doc) => {
						    const targetChatId = doc.TG_ID;
						    await bot.sendPhoto(targetChatId, photoId, {caption: messageToSend, parse_mode: "HTML" });
					   }));
      }

      // Отправка видео
      if (User2.video) {
          const videoId = User2.video;
          if (User2.caption) {
          	capMessage = `<b>${User2.caption}</b>`;

          	allUserIds.forEach(async  (doc) => {
          		const targetChatId = doc.TG_ID;
          		await bot.sendVideo(targetChatId, videoId, {caption: capMessage, parse_mode: "HTML" });
          	})

          } else (allUserIds.forEach(async  (doc) => {
          		const targetChatId = doc.TG_ID;
          		await bot.sendVideo(targetChatId, videoId, {caption: messageToSend, parse_mode: "HTML" });
          	}))
          //await bot.sendVideo(chatId, videoId, { caption: 'Видео' });
      }

      // Отправка аудио
      if (User2.audio) {
          const audioId = User2.audio;
          if (User2.caption) {
          	capMessage = `<b>${User2.caption}</b>`;

          	allUserIds.forEach(async  (doc) => {
          		const targetChatId = doc.TG_ID;
          		await bot.sendAudio(targetChatId, audioId, {caption: capMessage, parse_mode: "HTML" });
          	}) 
          } else (allUserIds.forEach(async  (doc) => {
	          		const targetChatId = doc.TG_ID;
	          		await bot.sendAudio(targetChatId, audioId, {caption: `${messageToSend ? messageToSend : 'Audio'}`, parse_mode: "HTML" });
	          	})
          	)
          
          //await bot.sendAudio(chatId, audioId, { caption: 'Аудио' });
      }

      // Отправка Voice
      if (User2.voice) {
          const voiceId = User2.voice;
          if (User2.caption) {
          	capMessage = `<b>${User2.caption}</b>`;

          	allUserIds.forEach(async  (doc) => {
          		const targetChatId = doc.TG_ID;
          		await bot.sendVoice(targetChatId, voiceId, {caption: capMessage, parse_mode: "HTML" });
          	}) 
          } else (allUserIds.forEach(async  (doc) => {
	          		const targetChatId = doc.TG_ID;
	          		await bot.sendVoice(targetChatId, voiceId, {caption: `${messageToSend ? messageToSend : 'Voice'}`, parse_mode: "HTML" });
	          	})
          	)
          
          //await bot.sendAudio(chatId, audioId, { caption: 'Аудио' });
      }

      // Отправка кружочков
      if (User2.video_note) {
          const video_noteId = User2.video_note;
          if (User2.caption) {
          	capMessage = `<b>${User2.caption}</b>`;

          	allUserIds.forEach(async  (doc) => {
          		const targetChatId = doc.TG_ID;
          		await bot.sendVideoNote(targetChatId, video_noteId, {caption: capMessage, parse_mode: "HTML" });
          	}) 
          } else (allUserIds.forEach(async  (doc) => {
	          		const targetChatId = doc.TG_ID;
	          		await bot.sendVideoNote(targetChatId, video_noteId, {caption: `${messageToSend ? messageToSend : 'Video_note'}`, parse_mode: "HTML" });
	          	})
          	)
          
          //await bot.sendAudio(chatId, audioId, { caption: 'Аудио' });
      }

      if (!User2.video && !User2.photo && !User2.audio && !User2.voice && !User2.video_note && User2.text) {
          const textId = `<b>${User2.text}</b>`;

          allUserIds.forEach(async (doc) => {
						    const targetChatId = doc.TG_ID;
						    await bot.sendMessage(targetChatId, textId, {parse_mode: "HTML" });
					   });
      }

      

			User2.sendCombMessage = false;
			await client.close();
			await bot.sendMessage(chatId, `Контент ушел в бота и виден всем !


					Рассылка успешно выполнена
				Всего отправлено: ${get_user.messageOverallCount ? get_user.messageOverallCount : 0} сообщений`, BackToAdmin)
		}

		if (msg.data == "Отменить рассылку"){

			
			mediaInfo = [];
			//console.log("mediaInfo cancel sending", mediaInfo);
			User2.sendCombMessage = false;
			await bot.sendMessage(chatId, `стандартные методы телеграм прикрепить файлы, написать текст, прикрепить видео, записать аудио



				Зона для отображения выгружаемых файлов


				`, SendingMessages)
		}

		if (msg.data == "Сделать фото"){

			User3.photocheck = false;
			//console.log("сделать фото", User)
			await bot.sendMessage(chatId, `фото


				Вы уверены что хотите отправить этот скриншот ?`, ClientSendProofPhoto)
		}

		if (msg.data == "КлиентПруфФото"){

			await bot.sendMessage(chatId, `✅Скриншот отправлен на утверждение✅

				Как только модератор  проверит информацию. Вы получите уведомление`, BackToAdmin)
		}

		if (msg.data == "Подтвердить"){
			//console.log("Подтвердить msg", msg)
			writeUserPass(msg.from)
			User.systemLearn = 'Система обученияAllowed';
			await bot.sendMessage(chatId, `Пройти к обучению: UKGStudy_bot`, ToLearningSystem)
		}

		if (msg.data == "Система обученияAllowed"){

			await bot.sendMessage(chatId, `<b>🎓 Пройдите пошаговую систему обучения.\n\n✅ Получите знания которые помогут Вам построть большой международный бизнес с компанией UKG Holding и нашей професиональной командой!</b>`, {parse_mode : "HTML", reply_markup : LearningSystem.reply_markup})
		}

		if (msg.data == "Система обученияAllowedAdm"){

			await bot.sendMessage(chatId, `<b>🎓 Пройдите пошаговую систему обучения.\n\n✅ Получите знания которые помогут Вам построть большой международный бизнес с компанией UKG Holding и нашей професиональной командой!</b>`, {parse_mode : "HTML", reply_markup : LearningSystemAdm.reply_markup})
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

			if (msg.data == "ОтправитьСкрин"){

				const User = await userModel.getUser(msg.from).catch(console.dir);
				User3.photocheck = false;
				//console.log("отправить скрин", User)
				await bot.sendMessage(chatId, `✅Скриншот отправлен на утверждение✅Как только модератор  проверит информацию. Вы получите уведомление`, MainMenu)
				await bot.sendPhoto(adminName, User.photo, {caption: 'Подтвердите регистрацию пользователя'});
				await bot.sendMessage(adminName, `Пользователь: @${User.UserName}`, ConfirmPhotoAprove )

			}

			if (msg.data == "ОтменитьСкрин"){
				
				await bot.sendMessage(chatId, `

				💡 Выполните пожалуйста 3 простых шага, чтобы перейти в систему обучения:

				Шаг 1: Иметь личный кабинет с депозитом на сайте: https://ukgholding.org/login

				Шаг 2: Сделать скриншот личного кабинета

				Шаг 3: Отправить скриншот в ответ на это сообщение

				Модератор проверит скриншот и добавит Вас в систему обучения в течении 24 часов.

				Важно. Отправлять скриншот необходимо в ответ на это сообщение!  Не наставнику, не в общий чат, а прямо сюда.`, MainMenu)
			}

			if (msg.data == "ПодтвердитьPhotoAprove"){

				await bot.sendMessage(User.TG_ID, `Пройти к обучению`, Confirm);
				await bot.sendMessage(chatId, `Одобрение успешно отправлено.`, MainMenuAdm)

			}

		} catch (error){return error;}
	})

	bot.on('photo', async (msg) => {

	  try{

	  		 if (User3.photocheck){

	  		 		const chatId = msg.chat.id;
				    //console.log("чат айди :", chatId)
					  const photo = msg.photo;
					  const fileId = photo[photo.length - 1].file_id;
					  User.photo = fileId;

					  //console.log("User is bot.on(photo):", User);
					  await bot.sendMessage(chatId, `Вы уверены что хотите отправить этот скриншот ?`, AreYouShure);
					  
					  //bot.sendPhoto(chatId, fileId, {caption: 'Вы прислали фото:'});
					  // Ваши дальнейшие действия с изображением
					  //console.log('Получено фото:', photo);					  
					  //console.log(admin)

				  }

					  
		} catch (err){console.log(err)}	 	  
					  		
	});

	process.on('SIGINT', async () => {
	  if (dbUsers) {
	    await dbUsers.client.close();
	    console.log('MongoDB connection closed due to application termination');
	  }
	  process.exit(0);
	});
		
		

}

start ();
