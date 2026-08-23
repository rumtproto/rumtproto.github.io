---
title: "GroupCallMessage (тип)"
original: "https://core.telegram.org/type/GroupCallMessage"
section: ref
kind: type
layout: layout.njk
---

# GroupCallMessage

*Тип из схемы TL.*

> Represents an in-call message, [emoji reaction »](https://core.telegram.org/api/group-calls#in-call-reactions), paid live story comment or standalone paid live story donation.
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===216===
> groupCallMessage#907ce88e random_id:long message:TextWithEntities = GroupCallMessage;
> ```
> API schema:

## Определение TL

```
groupCallMessage#1a8afc7e flags:# from_admin:flags.1?true id:int from_id:Peer date:int message:TextWithEntities paid_message_stars:flags.0?long = GroupCallMessage;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [groupCallMessage](/constructor/groupCallMessage/) | Represents an [in-call message »](https://core.telegram.org/api/group-calls#in-call-messages), emoji reaction, paid live story comment or standalone paid live story donation. |

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
