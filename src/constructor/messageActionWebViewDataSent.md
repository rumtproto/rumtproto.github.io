---
title: "messageActionWebViewDataSent (конструктор)"
original: "https://core.telegram.org/constructor/messageActionWebViewDataSent"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionWebViewDataSent

*Конструктор из схемы TL.*

> Data from an opened [reply keyboard bot mini app](https://core.telegram.org/api/bots/webapps) was relayed to the bot that owns it (user side service message).
> Clients should display a service message with the text `Data from the «$text» button was transferred to the bot.`

## Определение TL

```
messageActionWebViewDataSent#b4c38cb5 text:string = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| text | [string](/type/string/) | Text of the [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/) that was pressed to open the web app. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/)

Button to open a [bot mini app](https://core.telegram.org/api/bots/webapps) using [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), without sending user information to the web app.

Can only be sent or received as part of a reply keyboard, use [keyboardButtonWebView](/constructor/keyboardButtonWebView/) for inline keyboards.

When pressed, clients must open a [Keyboard Button Mini App](https://core.telegram.org/api/bots/webapps#keyboard-button-mini-apps) using [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), passing `url` to [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/).`url`.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
