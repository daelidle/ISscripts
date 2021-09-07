const chatChannels = {
    General: 0,
    Activity: 1,
    Trade: 2,
    IronManGeneral: 2
}

function displayChatMessage(messages, channelNumber, username = '', level = 22) {
    let messagesHtml = '';
    messages.forEach(message => messagesHtml += _generateChatMessage(message, username, level));
    let chatChannels = document.getElementsByClassName("css-y1c0xs");
    if (chatChannels.length > channelNumber){
        chatChannels[channelNumber].insertAdjacentHTML('beforeend', messagesHtml);
        return true;
    }
    return false;
}

function _generateChatMessage(message, username, level){
    const formattedTime = new Date().toISOString().substr(11, 8);
    let messageHtml = `<div class="chat-message"><div class="chat-message" style="font-size: 14px;">`;
    if (username !== null && username.length > 0) messageHtml += `<div class="chat-message-header"><span class="message-time-stamp">[${formattedTime}]</span><span class="message-username message-league-theme--2">${username}</span><span class="message-league-theme-2">[${level}]: </span></div>`;
    messageHtml += `<span>${message}</span></div></div>`;
    return messageHtml;
}