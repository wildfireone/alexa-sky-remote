'use strict';

const Alexa = require('alexa-sdk');

const handlers = {
    LaunchRequest: function () {
        console.log(this);
        this.emit('AboutIntent');
    },

    AboutIntent: function () {
        this.emit(':tell', 'Welcome to Sky Remote for Amazon Echo.');
    },

    UpChannel: function () {
        this.emit(':tell', 'Up channel.');
    },

    DownChannel: function () {
        this.emit(':tell', 'Down channel.');
    },

    Unhandled: function () {
        this.emit(':tell', 'Sorry, not sure what you said.');
    }
};

exports.handler = (event, context /*, callback */) => {
    const alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};
