const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY ×͜× VÌÐÚ§HÄñ ×͜×" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94789178809";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/f022bb748f55c2dc06c17.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_35_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0LFxuICAgICAgICA3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOCxcbiAgICAgICAgNjksXG4gICAgICAgIDg1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM4LFxuICAgICAgICA3MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDUxLFxuICAgICAgICA2NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2LFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDcyLFxuICAgICAgICAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInUxVHh6N09VdUVRRk5lUzNmdjNsWEM2aUcrdG80SWh3UnVjalhBcTRDR009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3Njc5NDYzNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZGRjIzOTNDN0VDNzc1QzlCN0JGRTRBRjcxN0RENjVCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTA4NTMxMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzY3OTQ2MzcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxM0NDMTExMTU2RjgzRDM2QjRDQzc4RjZDRUY0QTFDRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTUwODUzMTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSGUyeGxUMnZUVnVDRnZKWm13bzBtZ1wiLFxuICBcInBob25lSWRcIjogXCI4ODdhMTA3Yi04MjAxLTQyZjYtYTY2Ny05MTM4MWQ4MGRhZDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAxODgsXG4gICAgICAyNyxcbiAgICAgIDYwLFxuICAgICAgMTQ1LFxuICAgICAgMTA3LFxuICAgICAgMTc4LFxuICAgICAgMTk1LFxuICAgICAgMjM1LFxuICAgICAgMzgsXG4gICAgICAyMzIsXG4gICAgICAxOTUsXG4gICAgICAyNDAsXG4gICAgICAyNDcsXG4gICAgICAxMCxcbiAgICAgIDIyMCxcbiAgICAgIDE0LFxuICAgICAgMTYxLFxuICAgICAgMTU3LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDMzLFxuICAgICAgMTI4LFxuICAgICAgMTgzLFxuICAgICAgNDgsXG4gICAgICAzMixcbiAgICAgIDc4LFxuICAgICAgMjA2LFxuICAgICAgMjM2LFxuICAgICAgNTksXG4gICAgICAxNzYsXG4gICAgICA3NyxcbiAgICAgIDIyMSxcbiAgICAgIDE2NSxcbiAgICAgIDE1NyxcbiAgICAgIDE0NixcbiAgICAgIDE0NyxcbiAgICAgIDIxNixcbiAgICAgIDE0NixcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKRlNGRlRaUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Njc5NDYzNzE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA3NzM5NjA2OTY2NDIzOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiLi4uLi4uXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFN3dU53SEVQYS82TEVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSanJFUnl3aExyOVFBanpmSXVpb1FWSDVjVW5Lek1mK3NnbVNjeFhnbHdnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlEM2I4N21Vdnl2WkdGRzYrQktjOG1WdHFZWm1BVUVUbUJIaGxpdnJOR1BIM0htc2Z2M21rL2I2dXBvNWFZSGQrejN6OVp3Q25PRkFEOXQyMEJZWUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdGbm0veThMT2FIR3gvLy9NdFcyWEx4SkVyL0pxcWFQU3J1V2k5OXZMdEU5ckc3RGJYTnhodFV0YUx1NGNtVGxRNFltQ1hMSEpzejZOaFFsek9vOENnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY3OTQ2MzcxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTA4NTMwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVrRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWtELmpzb24iOiAie1wia2V5RGF0YVwiOlwiOTIwQmdNdXJkSXlEU3psYzhaTFFHTFNzcEtFNmp4dmM1Tk53OFl5bmllUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDcyOTA5ODc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTUwODUzMDg2OTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ×͜× VÌÐÚ§HÄñ ×͜× 』```", //*『Add this bot to any group as you like"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "×͜× VÌÐÚ§HÄñ ×͜×",
  ownername:process.env.OWNER_NAME|| "×͜× VÌÐÚ§HÄñ ×͜×",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "×͜× VÌÐÚ§HÄñ ×͜×"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
