# Harbor Help – ODA chatbot website

## Preview in VS Code
1. Open this folder in VS Code (File > Open Folder).
2. Install the **Live Server** extension (Ritwick Dey).
3. Right-click `index.html` > **Open with Live Server**. It opens at http://127.0.0.1:5500.

## Connect your chatbot
1. In Oracle Digital Assistant, create a **Web channel** and add `127.0.0.1` and `localhost` to its allowed domains.
2. Download the Web SDK from Oracle and save it as `scripts/web-sdk.js`.
3. Edit `scripts/chat-config.js`: set `URI` and `channelId`.
4. Reload the page. The chat button appears at the bottom right.
