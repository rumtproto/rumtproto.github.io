---
title: "messageActionNoForwardsRequest (конструктор)"
original: "https://core.telegram.org/constructor/messageActionNoForwardsRequest"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionNoForwardsRequest

*Конструктор из схемы TL.*

> Emitted only in private chats if the other side requested to disable [content protection »](https://core.telegram.org/api/content-protection#for-users).

## Определение TL

```
messageActionNoForwardsRequest#3e2793ba flags:# expired:flags.0?true prev_value:Bool new_value:Bool = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| expired | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, this request was accepted or rejected by the other user and thus cannot be used anymore. |
| prev_value | [Bool](/type/Bool/) | Previous protection status. |
| new_value | [Bool](/type/Bool/) | New requested protection status. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Content protection](https://core.telegram.org/api/content-protection)

Users and bots who want to keep their messages private, as well as Group and Channel owners who want to keep their content members-only can enable content protection, which prevents screenshots, copying, disables message forwards and limits the ability to save media from posts.
