const venom = require('venom-bot');
const options = require('./options');
const { handleStateChange, handleIncomingCall, handleMessage } = require('./handlers');

const main = () => {
  venom
    .create(options)
    .then(client => {

      // handle state change
      handleStateChange(client);
      // handle incoming call
      handleIncomingCall(client);
      // handle message
      handleMessage(client);
    })
    .catch(err => console.error(err));
}

main();
