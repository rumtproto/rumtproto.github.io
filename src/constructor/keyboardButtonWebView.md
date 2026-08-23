---
title: "keyboardButtonWebView (конструктор)"
original: "https://core.telegram.org/constructor/keyboardButtonWebView"
section: ref
kind: constructor
layout: layout.njk
---

# keyboardButtonWebView

*Конструктор из схемы TL.*

> Button to open a [bot mini app](https://core.telegram.org/api/bots/webapps) using [messages.requestWebView](/method/messages.requestWebView/), sending over user information after user confirmation.
> Can only be sent or received as part of an inline keyboard, use [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/) for reply keyboards.
> When pressed, clients must open an [Inline Button Mini App](https://core.telegram.org/api/bots/webapps#inline-button-mini-apps) using [messages.requestWebView](/method/messages.requestWebView/), passing `url` to [messages.requestWebView](/method/messages.requestWebView/).`url`.

## Определение TL

```
keyboardButtonWebView#e846b1a0 flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| style | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[KeyboardButtonStyle](/type/KeyboardButtonStyle/) | Button style, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info on button styles. |
| text | [string](/type/string/) | Button text |
| url | [string](/type/string/) | [Web app url](https://core.telegram.org/api/bots/webapps) |

## Тип

[KeyboardButton](/type/KeyboardButton/)

## Related pages

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [messages.requestWebView](/method/messages.requestWebView/)

Open a [bot mini app](https://core.telegram.org/bots/webapps), sending over user information after user confirmation.

After calling this method, until the user closes the webview, [messages.prolongWebView](/method/messages.prolongWebView/) must be called every 60 seconds.

#### [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/)

Button to open a [bot mini app](https://core.telegram.org/api/bots/webapps) using [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), without sending user information to the web app.

Can only be sent or received as part of a reply keyboard, use [keyboardButtonWebView](/constructor/keyboardButtonWebView/) for inline keyboards.

When pressed, clients must open a [Keyboard Button Mini App](https://core.telegram.org/api/bots/webapps#keyboard-button-mini-apps) using [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/), passing `url` to [messages.requestSimpleWebView](/method/messages.requestSimpleWebView/).`url`.
