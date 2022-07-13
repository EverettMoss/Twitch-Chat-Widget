const messages = [];
const chatLimit = 3;

const client = new tmi.Client({
	//Edit this array to change where the messages come from
	channels: ['myth', 'kennybeats', 'imkaicenat', 'clix']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	var x = `${tags['display-name']}: ${message}`;

	if (messages.length < chatLimit) {
		messages.push(x);
	} else {
		messages.shift();
		messages.push(x);
	}
	document.getElementById("chat-messages").innerText = messages.join('\n');
});
