---
title: "channels.setStickers"
original: "https://core.telegram.org/method/channels.setStickers"
section: ref
kind: method
description: "Привязать набор стикеров к супергруппе"
layout: layout.njk
---

# channels.setStickers

Привязать набор стикеров к супергруппе

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.setStickers#ea8ca4f9 channel:InputChannel stickerset:InputStickerSet = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Супергруппа</td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet">InputStickerSet</a></td><td>Набор стикеров, который нужно привязать</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>PARTICIPANTS_TOO_FEW</td><td>Недостаточно участников.</td></tr><tr><td>406</td><td>STICKERSET_OWNER_ANONYMOUS</td><td>Указанный набор стикеров нельзя установить как групповой во избежание деанонимизации администраторов.</td></tr></tbody></table>
