from aiogram import Bot, Dispatcer, executor, types
from aiogram.types.web_app_info import WebAppInfo

bot = BOT('7346780970:AAFtfT_zSenIjl514NCKtz9984N4q0pbz3U')

dp = Dispatcer(bot)

@dp.message_handler(commands=['start'])
async def start(message : types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton('Open Web Page', web_app = WebAppInfo('')))
    await message.answer("Hey, my friend!", reply_markup = markup)

if __name__ == '__main__':
    executor.start_polling(dp)

executor.start_polling(dp)