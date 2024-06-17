//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "664d2ed610a0dc62714c5eca";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/4ca095d5d1c86ae881eec.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "237658397806";
global.owner = process.env.OWNER_NUMBER || "237658397806";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/4ca095d5d1c86ae881eec.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "ܻtrue;
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RJYXN3NVZLOUNNU3lXS0xKN0ZFRWhSMEJFMnBxQ3QzNzRzWGljSncwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU1tRTltZmFhRnBUbGJVS0xxeU51dG42MXJUbTBWaE9DbzJnRjZXZ3hscz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQmtPNnlCVHpYblQveWdldWIxcE5zeGVwZ1k1azI2ZXBDS3dremZ3K0ZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzaEdGdVpJdUlGUDM3ODhDRkxDbkxXSUpXK08wQmZEWWNKQkxkWmdjZEhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9LcUIwMkIxMlMxUE5aQmpJbytLbS9iQVVLamtpMFdaU2I1K2FENU5wMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMeTg2b21SdGF2WlVMcFRXa3Fhdk1NMmhYNG9UL254MC9xQjB4VTlrWHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEdSUXp1S0svenNNWlFWTlZkMy9YenZKQXprOHBjb1dJdWVYeGxicTZXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHdLUUEyR2ZCdFBIMVoxeU96ZStyZUhxY3NyT3cxVXRydDArRzdhVHhUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZndlh6d3dCQVRPWjQ3U3Nrdmp3KzNwaEtDWERteTY0V0F6Z2RhbnUwN0p3WXZmd3FYbkNlenRLRk04L2ZsK0ZwYlVPK0YyZTVsZWVmVUl2ZmhCK0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJsSnJTb3JvL3pkN3NrRTJSQmxSZVE3dWdIUFVkbVJFSFRnWHd1M3d2dnFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3bG80ZXFadVF6R3BjOVhjbmNKbDN3IiwicGhvbmVJZCI6IjBkZjFiNjNmLTk1NjAtNDJlZi04YzRjLTA2N2Y4NThmY2FkOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNdDErZUpyemdPWHpoSDFzM3FIQkZQNHRRdUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTI0S2hCQ1NrdVFKN1BoMW9nYVY1T0hoa3lFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldCV0w5Ulc3IiwibWUiOnsiaWQiOiIyMzc2NTgzOTc4MDY6MjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s3MjQvWUNFS0RNdjdNR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjUvSHcvdGpjam1RVmx2YmFiN3pIUW5kdGlLck5ZOWY5S1Q0R3c2WGlXWE09IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhjQzBxVzg3OE5YKzFEblc0cUhwdm5TRnlPbzBIdWNGVTRtZHB6eUpKc3ZxUk1xNU8yWDVzdjRxc2hqczVPR3kyTXJLMS9ucHNKcFZJa0xISFE2TEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrTUZuMnN1d1BUUWhiS1V0bTQ2bS9PS2llcElFNlBZcHJHWWg1WTIwcGh0N1hEV2I1V2N2TWxyMXAyWk1HSElsU0hXOUJpeU5SZGwrVFp6OThLNzVCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY1ODM5NzgwNjoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlZng4UDdZM0k1a0ZaYjIybSs4eDBKM2JZaXF6V1BYL1NrK0JzT2w0bGx6In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4NjA5NDU0fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "★",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝘨𝘳𝘦𝘢𝘵 𝘥𝘢𝘺 | 𝐀𝐒𝐇𝐀𝐅 𝐌𝐃",
  author: process.env.PACK_AUTHER || "𝐀𝐒𝐇𝐀𝐅",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝔸𝕊ℍ𝔸𝔽-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝑵𝑨𝑻𝑯𝑨𝑵 𝑫𝑨𝑹𝑲𝑺",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "nTMKYd6tShy3xZyTayntUASZ",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-b6af3488-e26e-44d5-b3b1-6e8f999c4a58",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "nathandarks10",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "22db6eed9c4ff4650ddda9ab98777ef6",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
