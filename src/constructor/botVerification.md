---
title: "botVerification (конструктор)"
original: "https://core.telegram.org/constructor/botVerification"
section: ref
kind: constructor
layout: layout.njk
---

# botVerification

*Конструктор из схемы TL.*

> Describes a [bot verification icon »](https://core.telegram.org/api/bots/verification).

## Определение TL

```
botVerification#f93cd45c bot_id:long icon:long description:string = BotVerification;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot_id | [long](/type/long/) | ID of the bot that verified this peer |
| icon | [long](/type/long/) | Verification icon |
| description | [string](/type/string/) | Verification description |

## Тип

[BotVerification](/type/BotVerification/)

## Related pages

#### [Third-party verification](https://core.telegram.org/api/bots/verification)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.
