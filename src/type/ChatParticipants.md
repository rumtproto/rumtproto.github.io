---
title: "ChatParticipants"
original: "https://core.telegram.org/type/ChatParticipants"
section: ref
kind: type
description: "Содержит полный список участников обычных групп »; **НЕ** применимо к супергруппам и каналам."
layout: layout.njk
---

# ChatParticipants

Содержит полный список участников [обычных групп »](/api/channel/#basic-groups); **НЕ** применимо к супергруппам и каналам.

```
chatParticipantsForbidden#8763d3e1 flags:# chat_id:long self_participant:flags.0?ChatParticipant = ChatParticipants;
chatParticipants#3cbc93f8 chat_id:long participants:Vector<ChatParticipant> version:int = ChatParticipants;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/chatParticipantsForbidden">chatParticipantsForbidden</a></td><td>Полный список участников <a href="/api/channel#basic-groups">обычных групп »</a> вам недоступен, поскольку вы были заблокированы.</td></tr><tr><td><a href="/constructor/chatParticipants">chatParticipants</a></td><td>Содержит полный список участников <a href="/api/channel#basic-groups">обычных групп »</a>; <strong>НЕ</strong> применимо к супергруппам и каналам.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
