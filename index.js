const venom = require('venom-bot');
const options = require('./options');

const main = () => {
  venom
    .create(options)
    .then(client => {

      // handle state change
      client.onStateChange(state => {
        if('CONFLICT'.includes(state)) client.useHere();
      });

      // handle incoming call
      client.onIncomingCall(async call => {
        client.sendText(call.peerJid, "Desculpe, eu ainda não atendo ligações..");
      });

      console.log('started');
    })
    .catch(err => console.error(err));
}

main();
