var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\!bomber/;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = cool();
  cocInfo = 'TownHall Upgrade Priority Guide (upgrade wisely): \n' +
    'http://www.clashofclansguidehq.com/th3-upgrade-order/ \n' +
    'http://www.clashofclansguidehq.com/th4-upgrade-order/ \n' +
    'http://www.clashofclansguidehq.com/th5-upgrade-order/ \n' +
    'http://www.clashofclansguidehq.com/th6-upgrade-order/ \n' +
    'http://www.clashofclansguidehq.com/th7-upgrade-order/ \n' +
    'http://www.clashofclansguidehq.com/th8-upgrade-order/ \n' +
    'http://www.clashofclansguidehq.com/th9-upgrade-order/ \n\n' +
    'Clash of Clans Forecasting Site to farm at the right times: \n' +
    'http://www.clashofclansforecaster.com \n\n' +
    'Farming Strategy: Milking: \n' +
    'http://cocland.com/strategies/milking-farming-strategy \n\n' + 
    'Best League and Army Composition to Farm: \n' + 
    'http://cocland.com/guides/choosing-the-best-league-and-farming-composition \n\n' +
    'Balloons - Strategy: \n' +
    'http://cocland.com/troops/balloons \n\n' +
    'Dragons - Strategy Infographic: \n' + 
    'http://cocland.com/strategies/dragon-attack-strategy-infographic \n\n' +
    'BattleFrogs Strategy Guide Database \n' + 
    'https://goo.gl/fGfBLA';
  };

  body = {
    "bot_id" : botID,
    "text" : cocInfo
  };
