---
title: "updateChatParticipant"
original: "https://core.telegram.org/constructor/updateChatParticipant"
section: ref
kind: constructor
description: "Пользователь вступил в определённую обычную группу » или вышел из неё: это обновление могут получать только боты; пользовательский вариант этого обновления описан здесь »."
layout: layout.njk
---

# updateChatParticipant

Пользователь вступил в определённую [обычную группу »](/api/channel/#basic-groups) или вышел из неё: это обновление могут получать только боты; пользовательский вариант этого обновления описан [здесь »](/api/peers/#basic-group-updates).

```
updateChatParticipant#d087663a flags:# chat_id:long date:int actor_id:long user_id:long prev_participant:flags.0?ChatParticipant new_participant:flags.1?ChatParticipant invite:flags.2?ExportedChatInvite qts:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор <a href="/api/channel">чата</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда произошло это событие</td></tr><tr><td><strong>actor_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь, вызвавший изменение (пригласивший, администратор, исключивший пользователя, или даже сам <strong>user_id</strong>)</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь, которого затронуло изменение</td></tr><tr><td><strong>prev_participant</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/ChatParticipant">ChatParticipant</a></td><td>Сведения о предыдущем состоянии участника (пусто, если участник только что присоединился)</td></tr><tr><td><strong>new_participant</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/ChatParticipant">ChatParticipant</a></td><td>Сведения о новом участнике (пусто, если этот участник только что вышел)</td></tr><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/ExportedChatInvite">ExportedChatInvite</a></td><td>Приглашение, по которому был выполнен вход в группу</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Новое значение <strong>qts</strong>, подробнее см. <a href="/api/updates">обновления »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.
