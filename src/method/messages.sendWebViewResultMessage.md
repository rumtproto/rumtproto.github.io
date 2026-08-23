---
title: "messages.sendWebViewResultMessage (метод)"
original: "https://core.telegram.org/method/messages.sendWebViewResultMessage"
section: ref
kind: method
layout: layout.njk
---

# messages.sendWebViewResultMessage

*Метод из схемы TL.*

> Terminate webview interaction started with [messages.requestWebView](/method/messages.requestWebView/), sending the specified message to the chat on behalf of the user.

## Определение TL

```
webViewMessageSent#c94511c flags:# msg_id:flags.0?InputBotInlineMessageID = WebViewMessageSent;
---functions---
messages.sendWebViewResultMessage#a4314f5 bot_query_id:string result:InputBotInlineResult = WebViewMessageSent;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot_query_id | [string](/type/string/) | Webview interaction ID obtained from [messages.requestWebView](/method/messages.requestWebView/) |
| result | [InputBotInlineResult](/type/InputBotInlineResult/) | Message to send |

## Результат

[WebViewMessageSent](/type/WebViewMessageSent/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | QUERY_ID_INVALID | The query ID is invalid. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |

## Related pages

#### [messages.requestWebView](/method/messages.requestWebView/)

Open a [bot mini app](https://core.telegram.org/bots/webapps), sending over user information after user confirmation.

After calling this method, until the user closes the webview, [messages.prolongWebView](/method/messages.prolongWebView/) must be called every 60 seconds.
