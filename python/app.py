import asyncio
from aiogram import Bot, Dispatcher, F, html, types, Router
from aiogram.types import Message
from aiogram.filters import CommandStart, Command
from aiogram.types.web_app_info import WebAppInfo
from dotenv import load_dotenv
import os

load_dotenv()
TOKEN = os.getenv('TELEGRAM_BOT_KEY')
print(TOKEN)

bot = Bot(token=TOKEN)
dp = Dispatcher()

@dp.message(CommandStart())
async def cmd_start(message: Message):
    markup = types.ReplyKeyboardMarkup(keyboard=[[types.KeyboardButton(text="Open Webpage", web_app=WebAppInfo(url='https://p2p-bor-frontend.vercel.app/'))]], resize_keyboard=True)
    await message.answer("Hey!", reply_markup=markup)
    await message.reply("How are u?")

@dp.message(Command('help'))
async def cmd_help(message: Message):
    await message.answer('You pressed help button')

async def main():
    await dp.start_polling(bot)


if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Bot is turned off")

