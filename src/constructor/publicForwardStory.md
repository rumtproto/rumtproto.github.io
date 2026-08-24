---
title: "publicForwardStory"
original: "https://core.telegram.org/constructor/publicForwardStory"
section: ref
kind: constructor
description: "Содержит информацию о пересылке истории в виде репоста публичным каналом."
layout: layout.njk
---

# publicForwardStory

Содержит информацию о пересылке [истории](/api/stories/) в виде репоста публичным каналом.

```
publicForwardStory#edf3add0 peer:Peer story:StoryItem = PublicForward;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Канал, который переопубликовал историю.</td></tr><tr><td><strong>story</strong></td><td style="text-align: center;"><a href="/type/StoryItem">StoryItem</a></td><td>Перепощенная история (может отличаться от исходной истории).</td></tr></tbody></table>

### Тип

[PublicForward](/type/PublicForward/)

### Связанные страницы

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.
