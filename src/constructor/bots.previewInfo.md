---
title: "bots.previewInfo"
original: "https://core.telegram.org/constructor/bots.previewInfo"
section: ref
kind: constructor
description: "Содержит информацию о превью Main Mini App, подробнее см. здесь »."
layout: layout.njk
---

# bots.previewInfo

[@term:Mini App] Содержит информацию о [превью Main Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews).

```
bots.previewInfo#ca71d64 media:Vector<BotPreviewMedia> lang_codes:Vector<string> = bots.PreviewInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/BotPreviewMedia">BotPreviewMedia</a>&gt;</td><td>Все медиафайлы предпросмотра для кода языка, переданного в <a href="/method/bots.getPreviewInfo">bots.getPreviewInfo</a>.</td></tr><tr><td><strong>lang_codes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Все доступные коды языков, для которых были загружены медиафайлы предпросмотра (независимо от кода языка, переданного в <a href="/method/bots.getPreviewInfo">bots.getPreviewInfo</a>).</td></tr></tbody></table>

### Тип

[bots.PreviewInfo](/type/bots.PreviewInfo/)

### Связанные страницы

#### [bots.getPreviewInfo](/method/bots.getPreviewInfo/)

Только для владельцев ботов: получить [сведения о предпросмотре главного mini app, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews).

Примечание: технически этот метод могут вызывать и не владельцы, но тогда он всегда ведёт себя в точности как [bots.getPreviewMedias](/method/bots.getPreviewMedias/), возвращая только предпросмотры для текущего языка и пустой массив `lang_codes` независимо от переданного `lang_code`, поэтому, если вы не владелец бота `bot`, используйте, пожалуйста, только [bots.getPreviewMedias](/method/bots.getPreviewMedias/).

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
