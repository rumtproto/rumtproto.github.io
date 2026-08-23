---
title: "updateDraftMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateDraftMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateDraftMessage

*Конструктор из схемы TL.*

> Notifies a change of a message [draft](https://core.telegram.org/api/drafts).

## Определение TL

```
updateDraftMessage#edfc111e flags:# peer:Peer top_msg_id:flags.0?int saved_peer_id:flags.1?Peer draft:DraftMessage = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [Peer](/type/Peer/) | The peer to which the draft is associated |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | ID of the [forum topic](https://core.telegram.org/api/forum#forum-topics) to which the draft is associated |
| saved_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Peer](/type/Peer/) | If set, the draft is related to the specified [monoforum topic ID »](https://core.telegram.org/api/monoforum). |
| draft | [DraftMessage](/type/DraftMessage/) | The draft |

## Тип

[Update](/type/Update/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts
