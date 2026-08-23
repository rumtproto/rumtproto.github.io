---
title: "messages.botApp (конструктор)"
original: "https://core.telegram.org/constructor/messages.botApp"
section: ref
kind: constructor
layout: layout.njk
---

# messages.botApp

*Конструктор из схемы TL.*

> Contains information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps)

## Определение TL

```
messages.botApp#eb50adf5 flags:# inactive:flags.0?true request_write_access:flags.1?true has_settings:flags.2?true app:BotApp = messages.BotApp;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| inactive | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the web app was never used by the user, and confirmation must be asked from the user before opening it. |
| request_write_access | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | The bot is asking permission to send messages to the user: if the user agrees, set the write_allowed flag when invoking [messages.requestAppWebView](/method/messages.requestAppWebView/). |
| has_settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Deprecated flag, can be ignored. |
| app | [BotApp](/type/BotApp/) | Bot app information |

## Тип

[messages.BotApp](/type/messages.BotApp/)

## Related pages

#### [messages.requestAppWebView](/method/messages.requestAppWebView/)

Open a [bot mini app](https://core.telegram.org/bots/webapps) from a [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links), sending over user information after user confirmation.

After calling this method, until the user closes the webview, [messages.prolongWebView](/method/messages.prolongWebView/) must be called every 60 seconds.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
