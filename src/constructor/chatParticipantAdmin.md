---
title: "chatParticipantAdmin"
original: "https://core.telegram.org/constructor/chatParticipantAdmin"
section: ref
kind: constructor
description: "Администратор обычной группы (неприменимо к супергруппам)."
layout: layout.njk
---

# chatParticipantAdmin

Администратор [обычной группы](/api/channel/#basic-groups) (неприменимо к супергруппам).

```
chatParticipantAdmin#360d5d2 flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор участника группы, который является администратором</td></tr><tr><td><strong>inviter_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, добавившего участника в группу</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата добавления пользователя</td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td><a href="/api/rank">Звание »</a> участника.</td></tr></tbody></table>

### Тип

[ChatParticipant](/type/ChatParticipant/)

### Связанные страницы

#### [Звание](/api/rank/)

Участники групповых чатов (как обычных групп, так и супергрупп) могут добавить рядом со своим именем тег — чтобы указать свою роль на работе, что они изучают в учебном заведении и прочее.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
