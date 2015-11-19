var Slack = require('slack-node');

webhookUri = "https://hooks.slack.com/services/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";

slack = new Slack();
slack.setWebhook(webhookUri);

for (var i = 1; i < 11; i++) {
    slack.webhook({
        channel: "#chim-khong-lo",
        username: "God",
        text: "fuck all " + i
    }, function(err, response) {
        console.log(response);
    });
}
