---
title: "messages.requestWebView (метод)"
original: "https://core.telegram.org/method/messages.requestWebView"
section: ref
kind: method
layout: layout.njk
---

# messages.requestWebView

*Метод из схемы TL.*

> Open a [bot mini app](https://core.telegram.org/bots/webapps), sending over user information after user confirmation.
> After calling this method, until the user closes the webview, [messages.prolongWebView](/method/messages.prolongWebView/) must be called every 60 seconds.

## Определение TL

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;
---functions---
messages.requestWebView#269dc2c1 flags:# from_bot_menu:flags.4?true silent:flags.5?true compact:flags.7?true fullscreen:flags.8?true peer:InputPeer bot:InputUser url:flags.1?string start_param:flags.3?string theme_params:flags.2?DataJSON platform:string reply_to:flags.0?InputReplyTo send_as:flags.13?InputPeer = WebViewResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| from_bot_menu | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether the webview was opened by clicking on the bot's [menu button »](https://core.telegram.org/api/bots/menu). |
| silent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](/method/messages.sendWebViewResultMessage/) should be sent silently (no notifications for the receivers). |
| compact | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | If set, requests to open the mini app in compact mode (as opposed to normal or fullscreen mode). Must be set if the mode parameter of the [attachment menu deep link](https://core.telegram.org/api/links#bot-attachment-or-side-menu-links) is equal to compact. |
| fullscreen | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | If set, requests to open the mini app in fullscreen mode (as opposed to normal or compact mode). Must be set if the mode parameter of the [attachment menu deep link](https://core.telegram.org/api/links#bot-attachment-or-side-menu-links) is equal to fullscreen. |
| peer | [InputPeer](/type/InputPeer/) | Dialog where the web app is being opened, and where the resulting message will be sent (see the [docs for more info »](https://core.telegram.org/api/bots/webapps)). |
| bot | [InputUser](/type/InputUser/) | Bot that owns the [web app](https://core.telegram.org/api/bots/webapps) |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | [Web app URL](https://core.telegram.org/api/bots/webapps) |
| start_param | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | If the web app was opened from the attachment menu using a [attachment menu deep link](https://core.telegram.org/api/links#bot-attachment-or-side-menu-links), start_param should contain the data from the startattach parameter. |
| theme_params | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[DataJSON](/type/DataJSON/) | [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) |
| platform | [string](/type/string/) | Short name of the application; 0-64 English letters, digits, and underscores |
| reply_to | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputReplyTo](/type/InputReplyTo/) | If set, indicates that the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](/method/messages.sendWebViewResultMessage/) should be sent in reply to the specified message or story. |
| send_as | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[InputPeer](/type/InputPeer/) | Open the web app as the specified peer, sending the resulting the message as the specified peer. |

## Результат

[WebViewResult](/type/WebViewResult/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | BOT_WEBVIEW_DISABLED | A webview cannot be opened in the specified conditions: emitted for example if from_bot_menu or url are set and peer is not the chat with the bot. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 403 | PRIVACY_PREMIUM_REQUIRED | You need a [Telegram Premium subscription](https://core.telegram.org/api/premium) to send a message to this user. |
| 400 | SEND_AS_PEER_INVALID | You can't send messages as the specified peer. |
| 400 | THEME_PARAMS_INVALID | The specified theme_params field is invalid. |
| 400 | URL_INVALID | Invalid URL provided. |
| 400 | YOU_BLOCKED_USER | You blocked this user. |

## Related pages

#### [Bot menu button](https://core.telegram.org/api/bots/menu)

Bots can choose the behavior of the menu button shown next to the text input field.

#### [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/)

Terminate webview interaction started with [messages.requestWebView](/method/messages.requestWebView/), sending the specified message to the chat on behalf of the user.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)

#### [messages.prolongWebView](/method/messages.prolongWebView/)

Indicate to the server (from the user side) that the user is still using a web app.

If the method returns a `QUERY_ID_INVALID` error, the webview must be closed.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
