const chatChannels = {
    General: 0,
    Activity: 1,
    Trade: 2,
    IronManGeneral: 2
}

function displayChatMessageRaw(html, channelNumber) {
    let chatChannels = document.getElementsByClassName("css-y1c0xs");
    if (chatChannels.length > channelNumber){
        chatChannels[channelNumber].insertAdjacentHTML('beforeend', html);
        return true;
    }
    return false;
}

function displayChatMessage(message, channelNumber, username = '', level = 22) {
    const messageHtml = _generateChatMessage(message, username, level);
    return displayChatMessageRaw(messageHtml, channelNumber);
}

function _generateChatMessage(message, username, level){
    const formattedTime = new Date().toISOString().substr(11, 8);
    let messageHtml = `<div class="chat-message"><div class="chat-message" style="font-size: 14px;"><div class="chat-message-header"><span class="message-time-stamp">[${formattedTime}]</span>`;
    if (username !== null && username.length > 0) messageHtml += `<span class="message-username message-league-theme--1">${username}</span><span class="message-league-theme-1">[${level}]: </span>`;
    messageHtml += `</div><span>${message}</span></div></div>`;
    return messageHtml;
}