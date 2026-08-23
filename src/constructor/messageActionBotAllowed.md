---
title: "messageActionBotAllowed (конструктор)"
original: "https://core.telegram.org/constructor/messageActionBotAllowed"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionBotAllowed

*Конструктор из схемы TL.*

> We have given the bot permission to send us direct messages.
> The optional fields specify how did we authorize the bot to send us messages.

## Определение TL

```
messageActionBotAllowed#c516d679 flags:# attach_menu:flags.1?true from_request:flags.3?true domain:flags.0?string app:flags.2?BotApp = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| attach_menu | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | We have authorized the bot to send us messages by installing the bot's [attachment menu](https://core.telegram.org/api/bots/attach). |
| from_request | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | We have allowed the bot to send us messages using [bots.allowSendMessage »](/method/bots.allowSendMessage/). |
| domain | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | We have authorized the bot to send us messages by logging into a website via [Telegram Login »](https://core.telegram.org/widgets/login); this field contains the domain name of the website on which the user has logged in. |
| app | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[BotApp](/type/BotApp/) | We have authorized the bot to send us messages by opening the specified [bot mini app](https://core.telegram.org/api/bots/webapps). |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Bot attachment menu and side menu entries](https://core.telegram.org/api/bots/attach)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.

#### [bots.allowSendMessage](/method/bots.allowSendMessage/)

Allow the specified bot to send us messages

#### [Telegram Login Widget](https://core.telegram.org/widgets/login)

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
