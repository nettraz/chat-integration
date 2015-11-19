var Slack = require('slack-node');
var Skyweb = require('skyweb');
var fs = require('fs');

webhookUri = "https://hooks.slack.com/services/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";

slack = new Slack();
slack.setWebhook(webhookUri);

//for (var i = 1; i < 11; i++) {
//    slack.webhook({
//        channel: "#chim-khong-lo",
//        username: "God",
//        text: "fuck all " + i
//    }, function(err, response) {
//        console.log(response);
//    });
//}

var skyweb = new Skyweb();
var username = "greencool5";
var password = "0nlyleaf";
skyweb.login(username, password).then(function (skypeAccount) {
    //console.log('Your contacts : ' + JSON.stringify(skyweb.group, null, 2));

    //fs.writeFile('helloworld.txt', JSON.stringify(skyweb, null, 2), 'utf-8', function (err) {
    //  if (err) return console.log(err);
    //  console.log('Hello World > helloworld.txt');
    //});
    for (var i = 1; i < 11; i++) {
        skyweb.sendMessage("19:eb5c3d26ecce4d2d8dcec9e17c7e66eb@thread.skype", "(monkey)");
    }
    //skyweb.messagesCallback = function (messages) {
    //messages.forEach(function (message) {
    //        if (message.resource.from.indexOf(username) === -1 && message.resource.messagetype !== 'Control/Typing' && message.resource.messagetype !== 'Control/ClearTyping') {
    //            var conversationLink = message.resource.conversationLink;
    //            var conversationId = conversationLink.substring(conversationLink.lastIndexOf('/') + 1);
    //            skyweb.sendMessage(conversationId, message.resource.content + '. I will rule the World');
    //        }
    //    });
    //};
});
