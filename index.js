
const Discord = require('discord.js'); // Import discord.js library
const client = new Discord.Client();
var WebSocket = require('ws')
const prefix = "!";
var serverstat = "Undefined";
var plyrs = "nil";
var connected = false;
var pw = "";
var Ipv4 = "";
var port_web = ""
var dta
var cc = false;

//EDIT THESE!!! \/\/\/\/
var DiscordBotToken = "Mjc4OTg5ODI0ODM5NTE2MTgy.C30YkA.I7Zq5lUpZGLAe2NMdDl4FgleKgk";
var OwnerID = "211236135983120385";
var WhiteList = ["211236135983120385"];
//EDIT THESE!!! /\/\/\/\


function commandIs(str, msg){

return msg.content.startsWith(prefix + str);

}
function IsAllowed(id) {

WhiteList.forEach(function(item, index, array) {
    console.log(item + + "/" + id)

if(item === id) {
cc = true
    return true;
} else {


}

});
if(cc == true) {

return true;
} else {
return false;
}

}
function AddWhitelist(Id) {
WhiteList = WhiteList.push(Id);

}
function RemoveWhitelist(Id) {
WhiteList.forEach(function(item, index, array) {
if(item == Id) {
    WhiteList = WhiteList.splice(pos, index)
    return true
} else {


}

});
return false
}
var st = "None"
function GetWhitelist() {
WhiteList.forEach(function(item, index, array) {
if (st == "None") {
st = item

} else {
st = st + ", " + item

}
});
return(st);

}




function GetPlayers(gn) {
cmdthens('playerlist')
(data => dta = data.message) // hostname: Test Serv version : 1355 secure (secure...

var json_data_object = JSON.parse(dta)
var number = 0
var str = "N/A"
if (gn) {
for (var pn in json_data_object){
    if (str = "N/A") {
    str = json_data_object[pn]


//B
    } else {

str = str + "``` " + json_data_object[pn] 
        //A
    }
}
return str

} else {
for (var pn in json_data_object) {

number = number + 1
}
return number

}

}




client.on('ready', () => {
console.log("Bot is online.");

});

client.on('message', message => {
if(message.content === prefix + "getstatus"){
    if (connected) {
    message.reply('Status: ' + serverstat);
    } else {
    message.reply('Status: ' + serverstat);
    }


}

if(commandIs("op.get", message)) {
message.channel.sendMessage("Allowed Operators: ");
message.channel.sendMessage("`" + GetWhitelist() + "`")
}


var args = message.content.split(/[ ]+/);
if (commandIs("setstatus", message)) {

if (IsAllowed(message.author.id)) {
message.channel.sendMessage('Set status to: `' + args[1] + "`");
serverstat = args[1];
} else {
    message.channel.sendMessage("Your are not allowed to do this task.");
}

}

if (commandIs("op.add", message)) {
if(message.author.id == OwnerID) {
AddWhitelist(args[1])
 message.channel.sendMessage("Added Operator: `" + args[1] + "`");
} else {
message.channel.sendMessage("Your are not allowed to do this task.");
}

}
if (commandIs("op.del", message)) {
if(message.author.id == OwnerID) {
if(RemoveWhitelist(args[1])) {
 message.channel.sendMessage("Removed Operator from: `" + args[1] + "`");
} else {
    message.channel.sendMessage("User is not operator.");
}

} else {
message.channel.sendMessage("Your are not allowed to do this task.");
}

}

if (commandIs("cmd", message)) {
if (IsAllowed(message.author.id)) {
var sendcmd = args.join(" ").substring(5);
if (connected) {
cmd(sendcmd)
message.channel.sendMessage("Sent Command: `" + sendcmd + "`")
} else {

message.channel.sendMessage("`ERROR: RCON Is Not Connected.`")

}
} else {
message.channel.sendMessage("Your are not allowed to do this task.");
}



}

if (commandIs("connect", message)) {

if (IsAllowed(message.author.id)) {
if(connected) {
message.channel.sendMessage("RCON Is Already Connected!")
} else {
Ipv4 = args[1]
port = args[2]
pw = args[3] 
message.channel.sendMessage("Connecting to Server: " + Ipv4);
open(port, Ipv4, pw)
cmd("say DonkeyBot> Connected V1.1")
message.channel.sendMessage("Connected to Server.");
connected = true;
}

} else {
message.channel.sendMessage("Your are not allowed to do this task.");
}






}



});
this.connected = false
this.socket = null

function send(msg, identifier, resolve, reject) {
if(!this.connected) return reject('Connection isn\'t established yet')

		let packet = JSON.stringify({
			'Identifier': identifier,
			'Message': msg,
			'Name': 'WebRcon'
		})
		
		this.socket.onerror = () =>  reject('Error in connection establishment')
		this.socket.onmessage = msg => resolve(JSON.parse(msg.data))
		this.socket.send(packet)


}
function cmd(msg, identifier=-1) {
    return new Promise((resolve, reject) => {
			send(msg, identifier, resolve, reject)
		})
}
function open(prt, ipv, psw) {
    return new Promise((resolve, reject) => {
			if(!this.connected){
				this.socket = new WebSocket(`ws://${ipv}:${prt}/${psw}`)
                console.log(`ws://${ipv}:${prt}/${psw}`)
				this.socket.onopen = () => {
					if (this.socket.readyState === 1) {
						this.connected = true
						resolve(this.socket)
					}
				}
				this.socket.onerror = () => reject('Error in connection establishment')
			}
			else reject('Connection already established')
		})
}
function cmdthens(msg, identifier=-1){
		return ()=> new Promise((resolve, reject) => {
			send(msg, identifier, resolve, reject)
		})
	}

client.login(DiscordBotToken);
