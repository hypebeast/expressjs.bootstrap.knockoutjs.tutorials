'use strict';

var mails = require('../mails'),
    _ = require('lodash');

exports.index = function(req, res) {
    if (req.query.folder) {
        var folderData = {
            mails: mails.mails[req.query.folder]
        };

        res.json(folderData);
    } else if (req.query.mailId) {
        var id = parseInt(req.query.mailId);
        var mail = {};

        _.each(mails.mails['Inbox'], function (value, key) {
            if (value.id === id) {
                mail = value;
            }
        });

        _.each(mails.mails['Archive'], function (value, key) {
            if (value.id === id) {
                mail = value;
            }
        });

        _.each(mails.mails['Sent'], function (value, key) {
            if (value.id === id) {
                mail = value;
            }
        });

        _.each(mails.mails['Spam'], function (value, key) {
            if (value.id === id) {
                mail = value;
            }
        });

        res.json(mail);
    } else {
        res.json(500, {error: 'Wrong query parameter!'});
    }
};
