# DiscordRCON
Made By: Jay/Donkey @Abaddon
play.abaddongaming.us:3389
--------------------------------------------------
Commands:

!connect [Ip] [Port] [Password]
(Connects to the RCON of your Server.) -Auth 1
e.x. !connect 127.0.0.1 420 letmein

!cmd [Server Command]
(Sends a command to the server.) -Auth 1
e.x. !cmd say Hello World!

!setstatus [Status]
(Sets the status users can view(Only one word)) -Auth 1
e.x. !setstatus offline

!getstatus
(Gets the Status set in Setstatus)
e.x. !getstatus

!op.get
(Gets users in RCON Whitelist) -Auth 2
e.x. !op.get

!op.add [DiscordID]
(Adds users to the RCON Whitelist)
e.x. !op.add 211236135983120385

!op.del [DiscordID]
(Removes users from the RCON Whitelist)
e.x. !op.del 211236135983120385

---------------------------------------------------

Installation:

In the top, where it says: Edit these, 

Under "DiscordBotToken" put the token/secret your discord bot uses

Under "Whitelist" Put your Discord ID and any other user you want to be able to use DiscordRCON When the bot starts up. (ONLY USE THIS ON YOURSELF AND ANYONE ELSE WHO YOU TRUST WITH RCON ACCESS THAT U CANT TAKE AWAY WITHOUT BOT RESTART)

Under "OwnerID" Put your Discord ID, so you can add users to get RCON access. 

There ya go! Its done!

------------------------------------------------------

Coming Soon:

Playercounts on !getstatus

adding new command to get players under !players

------------------------------------------------------

Credits:

https://github.com/acupofspirt/rust-experimental-webrcon for SOME source code that I modified because it wasn't working



