---
title: "updateWebViewResultSent (конструктор)"
original: "https://core.telegram.org/constructor/updateWebViewResultSent"
section: ref
kind: constructor
layout: layout.njk
---

# updateWebViewResultSent

*Конструктор из схемы TL.*

> Indicates to a bot that a webview was closed and an inline message was sent on behalf of the user using [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/)

## Определение TL

```
updateWebViewResultSent#1592b79d query_id:long = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| query_id | [long](/type/long/) | Web app interaction ID |

## Тип

[Update](/type/Update/)

## Related pages

#### [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/)

Terminate webview interaction started with [messages.requestWebView](/method/messages.requestWebView/), sending the specified message to the chat on behalf of the user.
