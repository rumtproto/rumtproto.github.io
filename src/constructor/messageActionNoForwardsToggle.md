---
title: "messageActionNoForwardsToggle (конструктор)"
original: "https://core.telegram.org/constructor/messageActionNoForwardsToggle"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionNoForwardsToggle

*Конструктор из схемы TL.*

> Emitted only in private chats when enabling or disabling [content protection »](https://core.telegram.org/api/content-protection#for-users).

## Определение TL

```
messageActionNoForwardsToggle#bf7d6572 prev_value:Bool new_value:Bool = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prev_value | [Bool](/type/Bool/) | Previous protection status (if true, the chat was protected). May be equal to new_value when replying to requests, see [here »](https://core.telegram.org/api/content-protection#for-users) for more info on the full flow. |
| new_value | [Bool](/type/Bool/) | New protection status. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Content protection](https://core.telegram.org/api/content-protection)

Users and bots who want to keep their messages private, as well as Group and Channel owners who want to keep their content members-only can enable content protection, which prevents screenshots, copying, disables message forwards and limits the ability to save media from posts.
