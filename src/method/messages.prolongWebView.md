---
title: "messages.prolongWebView (метод)"
original: "https://core.telegram.org/method/messages.prolongWebView"
section: ref
kind: method
layout: layout.njk
---

# messages.prolongWebView

*Метод из схемы TL.*

> Indicate to the server (from the user side) that the user is still using a web app.
> If the method returns a `QUERY_ID_INVALID` error, the webview must be closed.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.prolongWebView#b0d81a83 flags:# silent:flags.5?true peer:InputPeer bot:InputUser query_id:long reply_to:flags.0?InputReplyTo send_as:flags.13?InputPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| silent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](/method/messages.sendWebViewResultMessage/) should be sent silently (no notifications for the receivers). |
| peer | [InputPeer](/type/InputPeer/) | Dialog where the web app was opened. |
| bot | [InputUser](/type/InputUser/) | Bot that owns the [web app](https://core.telegram.org/api/bots/webapps) |
| query_id | [long](/type/long/) | Web app interaction ID obtained from [messages.requestWebView](/method/messages.requestWebView/) |
| reply_to | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputReplyTo](/type/InputReplyTo/) | If set, indicates that the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](/method/messages.sendWebViewResultMessage/) should be sent in reply to the specified message or story. |
| send_as | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[InputPeer](/type/InputPeer/) | Open the web app as the specified peer |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |

## Related pages

#### [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/)

Terminate webview interaction started with [messages.requestWebView](/method/messages.requestWebView/), sending the specified message to the chat on behalf of the user.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [messages.requestWebView](/method/messages.requestWebView/)

Open a [bot mini app](https://core.telegram.org/bots/webapps), sending over user information after user confirmation.

After calling this method, until the user closes the webview, [messages.prolongWebView](/method/messages.prolongWebView/) must be called every 60 seconds.
