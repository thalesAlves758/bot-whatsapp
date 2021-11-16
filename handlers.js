module.exports.handleStateChange = client => {
  client.onStateChange(state => {
    if('CONFLICT'.includes(state)) client.useHere();
  });
}

module.exports.handleIncomingCall = client => {
  client.onIncomingCall(async call => {
    client.sendText(call.peerJid, "Desculpe, eu ainda não atendo ligações..");
  });
}

module.exports.handleMessage = async client => {
  client.onMessage(msg => {
    if((msg.isMedia || msg.isMSS) && !msg.isGroupMessage && msg.from !== 'status@broadcast') {

      if(msg.type === 'image') {
        
        client
          .decryptFile(msg)
          .then(buffer => {
            const base64 = buffer.toString('base64');
            client.sendImageAsSticker(msg.from, base64);
          })
          .catch(err => console.error(err));
      }
    }
  });
}
