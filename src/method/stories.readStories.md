---
title: "stories.readStories"
original: "https://core.telegram.org/method/stories.readStories"
section: ref
kind: method
description: "Отметить все истории указанного пира вплоть до определённого ID как прочитанные; всем авторизованным сессиям будет отправлено обновление updateReadStories."
layout: layout.njk
---

# stories.readStories

Отметить все истории указанного пира вплоть до определённого ID как прочитанные; всем авторизованным сессиям будет отправлено обновление [updateReadStories](/constructor/updateReadStories/).

```
---functions---
stories.readStories#a556dac8 peer:InputPeer max_id:int = Vector<int>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, истории которого нужно пометить как прочитанные.</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Отметить как прочитанные все истории вплоть до этого ID включительно</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MAX_ID_INVALID</td><td>Указанный максимальный идентификатор недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>STORIES_NEVER_CREATED</td><td>Этот пир ни разу не публиковал историй.</td></tr></tbody></table>

### Связанные страницы

#### [updateReadStories](/constructor/updateReadStories/)

Истории определённого пира были отмечены как прочитанные.
