---
title: "chatParticipantsForbidden"
original: "https://core.telegram.org/constructor/chatParticipantsForbidden"
section: ref
kind: constructor
description: "Полный список участников обычных групп » вам недоступен, поскольку вы были заблокированы."
layout: layout.njk
---

# chatParticipantsForbidden

Полный список участников [обычных групп »](/api/channel/#basic-groups) вам недоступен, поскольку вы были заблокированы.

```
chatParticipantsForbidden#8763d3e1 flags:# chat_id:long self_participant:flags.0?ChatParticipant = ChatParticipants;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор группы</td></tr><tr><td><strong>self_participant</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/ChatParticipant">ChatParticipant</a></td><td>Информация об участии текущего пользователя в группе</td></tr></tbody></table>

### Тип

[ChatParticipants](/type/ChatParticipants/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
