---
title: "account.initTakeoutSession (метод)"
original: "https://core.telegram.org/method/account.initTakeoutSession"
section: ref
kind: method
layout: layout.njk
---

# account.initTakeoutSession

*Метод из схемы TL.*

> Initialize a [takeout session, see here » for more info](https://core.telegram.org/api/takeout).

## Определение TL

```
account.takeout#4dba4501 id:long = account.Takeout;
---functions---
account.initTakeoutSession#8ef3eab0 flags:# contacts:flags.0?true message_users:flags.1?true message_chats:flags.2?true message_megagroups:flags.3?true message_channels:flags.4?true files:flags.5?true file_max_size:flags.5?long = account.Takeout;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| contacts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to export contacts |
| message_users | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether to export messages in private chats |
| message_chats | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether to export messages in [basic groups](https://core.telegram.org/api/channel#basic-groups) |
| message_megagroups | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether to export messages in [supergroups](https://core.telegram.org/api/channel#supergroups) |
| message_channels | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether to export messages in [channels](https://core.telegram.org/api/channel#channels) |
| files | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether to export files |
| file_max_size | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[long](/type/long/) | Maximum size of files to export |

## Результат

[account.Takeout](/type/account.Takeout/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 420 | TAKEOUT_INIT_DELAY_%d | Sorry, for security reasons, you will be able to begin downloading your data in %d seconds. We have notified all your devices about the export request to make sure it's authorized and to give you time to react if it's not. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Takeout API](https://core.telegram.org/api/takeout)

Telegram's API allows users to export all of their information through the takeout API.
