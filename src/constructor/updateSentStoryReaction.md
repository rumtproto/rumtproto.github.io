---
title: "updateSentStoryReaction"
original: "https://core.telegram.org/constructor/updateSentStoryReaction"
section: ref
kind: constructor
description: "Указывает, что мы отреагировали на историю »."
layout: layout.njk
---

# updateSentStoryReaction

Указывает, что мы [отреагировали на историю »](/api/stories/#reactions).

```
updateSentStoryReaction#7d627683 peer:Peer story_id:int reaction:Reaction = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир, отправивший историю</td></tr><tr><td><strong>story_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор истории, на которую мы поставили реакцию</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction">Reaction</a></td><td>Отправленная реакция</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
