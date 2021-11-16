const venom = require('venom-bot');

const main = () => {
  venom
    .create()
    .then(client => console.log(client))
    .catch(err => console.error(err));
}

main();
