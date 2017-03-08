"use strict";
var Mail = (function () {
    function Mail(model) {
        if (model === void 0) { model = null; }
        this.from = model.from;
        this.subject = model.subject;
        this.content = model.content;
        this.when = model.when;
        this.read = model.read;
        this.starred = model.starred;
        this.labels = model.labels;
        this.group = model.group;
        this.type = model.type;
        this.attachments = model.attachments;
    }
    return Mail;
}());
exports.Mail = Mail;
