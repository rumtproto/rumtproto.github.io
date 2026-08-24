---
title: "chatParticipants"
original: "https://core.telegram.org/constructor/chatParticipants"
section: ref
kind: constructor
description: "Содержит полный список участников обычных групп »; **НЕ** применимо к супергруппам и каналам."
layout: layout.njk
---

# chatParticipants

Содержит полный список участников [обычных групп »](/api/channel/#basic-groups); **НЕ** применимо к супергруппам и каналам.

```
chatParticipants#3cbc93f8 chat_id:long participants:Vector<ChatParticipant> version:int = ChatParticipants;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор группы</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ChatParticipant">ChatParticipant</a>&gt;</td><td>Список участников группы</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Номер версии группы</td></tr></tbody></table>

### Тип

[ChatParticipants](/type/ChatParticipants/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
