---
title: "messages.deleteParticipantReactions"
original: "https://core.telegram.org/method/messages.deleteParticipantReactions"
section: ref
kind: method
description: "Будучи администратором, удалить все реакции определённого участника со всех сообщений в группе или канале."
layout: layout.njk
---

# messages.deleteParticipantReactions

Будучи администратором, удалить все [реакции](/api/reactions/) определённого участника со всех сообщений в группе или канале.

```
 Method schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Группа или канал, в которых следует удалить реакции участника</td></tr><tr><td><strong>participant</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Участник, реакции которого нужно снять</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
