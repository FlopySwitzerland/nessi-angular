"use strict";
var Chat = (function () {
    function Chat(model) {
        if (model === void 0) { model = null; }
        this.picture = model.picture;
        this.name = model.name;
        this.messages = model.messages;
    }
    return Chat;
}());
exports.Chat = Chat;
