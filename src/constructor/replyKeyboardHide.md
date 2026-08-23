---
title: "replyKeyboardHide (конструктор)"
original: "https://core.telegram.org/constructor/replyKeyboardHide"
section: ref
kind: constructor
layout: layout.njk
---

# replyKeyboardHide

*Конструктор из схемы TL.*

> Hide sent reply keyboard

## Определение TL

```
replyKeyboardHide#a03e5b85 flags:# selective:flags.2?true = ReplyMarkup;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| selective | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Use this flag if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet |

## Тип

[ReplyMarkup](/type/ReplyMarkup/)
