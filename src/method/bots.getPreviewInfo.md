---
title: "bots.getPreviewInfo"
original: "https://core.telegram.org/method/bots.getPreviewInfo"
section: ref
kind: method
description: "Только для владельцев ботов: получить сведения о предпросмотре главного mini app, подробнее см. здесь »."
layout: layout.njk
---

# bots.getPreviewInfo

[@term:Mini App] Только для владельцев ботов: получить [сведения о предпросмотре главного mini app, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews).

Примечание: технически этот метод могут вызывать и не владельцы, но тогда он всегда ведёт себя в точности как [bots.getPreviewMedias](/method/bots.getPreviewMedias/), возвращая только предпросмотры для текущего языка и пустой массив `lang_codes` независимо от переданного `lang_code`, поэтому, если вы не владелец бота `bot`, используйте, пожалуйста, только [bots.getPreviewMedias](/method/bots.getPreviewMedias/).

```
bots.previewInfo#ca71d64 media:Vector<BotPreviewMedia> lang_codes:Vector<string> = bots.PreviewInfo;
---functions---
bots.getPreviewInfo#423ab3ad bot:InputUser lang_code:string = bots.PreviewInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, которому принадлежит Main Mini App.</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Получить предпросмотры для указанного кода языка по ISO 639-1.</td></tr></tbody></table>

### Результат

[bots.PreviewInfo](/type/bots.PreviewInfo/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [bots.getPreviewMedias](/method/bots.getPreviewMedias/)

Получить [превью Main Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews).
