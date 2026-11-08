// Chat settings for the ODA Web SDK.
const chatSettings = {
  URI: 'oda-afd3a0ec86064804809302576bb0ac50-da61726e.data.digitalassistant.oci.oraclecloud.com',
  channelId: '22adc87c-3f29-4a4b-9a63-3f825248318a',
  userId: 'guest-' + Date.now(),
  initUserHiddenMessage: 'Hi',
  theme: 'default'
};

const notice = document.getElementById('chat-notice');

function showNotice(message) {
  notice.textContent = message;
  notice.hidden = false;
}

if (typeof WebSDK === 'undefined') {
  showNotice('Chat is not loaded: check the Oracle SDK link in index.html.');
} else if (chatSettings.channelId === 'YOUR_CHANNEL_ID') {
  showNotice('Chat is not connected: set your URI and channelId in scripts/chat-config.js.');
} else {
  try {
    const Bots = new WebSDK(chatSettings);
    Bots.connect();
  } catch (error) {
    console.error('ODA chat failed to start:', error);
    showNotice('Chat could not start. Check the browser console for details.');
  }
}