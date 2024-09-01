from aiogram import Bot, Dispatcer, executor, types
from aiogram.types.web_app_info import WebAppInfo
from dotenv import load_dotenv
import os

load_dotenv() 

bot = os.getenv('TELEGRAM_BOT_KEY')

dp = Dispatcer(bot)

@dp.message_handler(commands=['start'])
async def start(message : types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton('Open Web Page', web_app = WebAppInfo('https://p2p-bor-frontend.vercel.app/')))
    await message.answer("Hey, my friend!", reply_markup = markup)

if __name__ == '__main__':
    executor.start_polling(dp)

executor.start_polling(dp)