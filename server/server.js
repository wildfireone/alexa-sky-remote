const PubNub = require('pubnub');
const eyes = require('eyes');

const options = {
    publishKey: process.env.PN_PUBLISH_KEY,
    subscribeKey: process.env.PN_SUBSCRIBE_KEY,
    ssl: true
};

const pubnub = new PubNub(options);

eyes.inspect(options);

pubnub.addListener({

    message: function (message) {
        eyes.inspect(message);
    },
    status: function (s) {
        eyes.inspect(s);
    }
});

pubnub.subscribe({
    channels: [
        'alexa-sky-remote'
    ]
});
