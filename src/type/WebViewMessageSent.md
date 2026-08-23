---
title: "WebViewMessageSent (тип)"
original: "https://core.telegram.org/type/WebViewMessageSent"
section: ref
kind: type
layout: layout.njk
---

# WebViewMessageSent

*Тип из схемы TL.*

> Contains information about an inline message sent by a [Web App](https://core.telegram.org/bots/webapps) on behalf of a user.

## Определение TL

```
webViewMessageSent#c94511c flags:# msg_id:flags.0?InputBotInlineMessageID = WebViewMessageSent;

---functions---

messages.sendWebViewResultMessage#a4314f5 bot_query_id:string result:InputBotInlineResult = WebViewMessageSent;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [webViewMessageSent](/constructor/webViewMessageSent/) | Info about a sent inline webview message |

## Методы

| Method | Описание |
|---|---|
| [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/) | Terminate webview interaction started with [messages.requestWebView](/method/messages.requestWebView/), sending the specified message to the chat on behalf of the user. |
