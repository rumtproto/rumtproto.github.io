---
title: "bots.getPreviewMedias"
original: "https://core.telegram.org/method/bots.getPreviewMedias"
section: ref
kind: method
description: "Получить превью Main Mini App, подробнее см. здесь »."
layout: layout.njk
---

# bots.getPreviewMedias

[@term:Mini App] Получить [превью Main Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews).

```
---functions---
bots.getPreviewMedias#a2a5594d bot:InputUser = Vector<BotPreviewMedia>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, которому принадлежит Main Mini App.</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[BotPreviewMedia](/type/BotPreviewMedia/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
