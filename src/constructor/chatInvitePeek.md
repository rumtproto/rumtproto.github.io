---
title: "chatInvitePeek (конструктор)"
original: "https://core.telegram.org/constructor/chatInvitePeek"
section: ref
kind: constructor
layout: layout.njk
---

# chatInvitePeek

*Конструктор из схемы TL.*

> A chat invitation that also allows peeking into the group to read messages without joining it.

## Определение TL

```
chatInvitePeek#61695cb0 chat:Chat expires:int = ChatInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat | [Chat](/type/Chat/) | Chat information |
| expires | [int](/type/int/) | Read-only anonymous access to this group will be revoked at this date |

## Тип

[ChatInvite](/type/ChatInvite/)
