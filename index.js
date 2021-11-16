const venom = require('venom-bot');
const options = require('./options');

const main = () => {
  venom
    .create(options)
    .then(client => console.log(client))
    .catch(err => console.error(err));
}

main();
