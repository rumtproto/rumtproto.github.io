---
title: "monoForumDialog (конструктор)"
original: "https://core.telegram.org/constructor/monoForumDialog"
section: ref
kind: constructor
layout: layout.njk
---

# monoForumDialog

*Конструктор из схемы TL.*

> Represents a [monoforum topic »](https://core.telegram.org/api/monoforum).

## Определение TL

```
monoForumDialog#64407ea7 flags:# unread_mark:flags.3?true nopaid_messages_exception:flags.4?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_reactions_count:int draft:flags.1?DraftMessage = SavedDialog;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| unread_mark | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this topic has a manually set (with [messages.markDialogUnread](/method/messages.markDialogUnread/)) unread mark. |
| nopaid_messages_exception | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | If set, an admin has exempted this peer from payment to send messages using [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/). |
| peer | [Peer](/type/Peer/) | The peer associated to the topic, AKA the topic ID. |
| top_message | [int](/type/int/) | The latest message ID |
| read_inbox_max_id | [int](/type/int/) | Position up to which all incoming messages are read. |
| read_outbox_max_id | [int](/type/int/) | Position up to which all outgoing messages are read. |
| unread_count | [int](/type/int/) | Number of unread messages. |
| unread_reactions_count | [int](/type/int/) | Number of unread reactions. |
| draft | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[DraftMessage](/type/DraftMessage/) | A pending message [draft](https://core.telegram.org/api/drafts). |

## Тип

[SavedDialog](/type/SavedDialog/)

## Related pages

#### [messages.markDialogUnread](/method/messages.markDialogUnread/)

Manually mark dialog as unread

#### [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/)

Allow a user to send us messages without paying if [paid messages »](https://core.telegram.org/api/paid-messages) are enabled.

#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
