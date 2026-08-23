---
title: "updateMonoForumNoPaidException (конструктор)"
original: "https://core.telegram.org/constructor/updateMonoForumNoPaidException"
section: ref
kind: constructor
layout: layout.njk
---

# updateMonoForumNoPaidException

*Конструктор из схемы TL.*

> An admin has (un)exempted this [monoforum topic »](https://core.telegram.org/api/monoforum) from payment to send messages using [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/).

## Определение TL

```
updateMonoForumNoPaidException#9f812b08 flags:# exception:flags.0?true channel_id:long saved_peer_id:Peer = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| exception | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, an admin has exempted this peer, otherwise the peer was unexempted. |
| channel_id | [long](/type/long/) | The monoforum ID. |
| saved_peer_id | [Peer](/type/Peer/) | The peer/topic ID. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/)

Allow a user to send us messages without paying if [paid messages »](https://core.telegram.org/api/paid-messages) are enabled.
