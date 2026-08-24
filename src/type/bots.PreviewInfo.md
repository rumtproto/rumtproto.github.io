---
title: "bots.PreviewInfo"
original: "https://core.telegram.org/type/bots.PreviewInfo"
section: ref
kind: type
description: "Содержит информацию о превью Main Mini App, подробнее см. здесь »."
layout: layout.njk
---

# bots.PreviewInfo

[@term:Mini App] Содержит информацию о [превью Main Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews).

```
bots.previewInfo#ca71d64 media:Vector<BotPreviewMedia> lang_codes:Vector<string> = bots.PreviewInfo;

---functions---

bots.getPreviewInfo#423ab3ad bot:InputUser lang_code:string = bots.PreviewInfo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/bots.previewInfo">bots.previewInfo</a></td><td>Содержит информацию о <a href="/api/bots/webapps#main-mini-app-previews">превью Main Mini App, подробнее см. здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/bots.getPreviewInfo">bots.getPreviewInfo</a></td><td>Только для владельцев ботов: получить <a href="/api/bots/webapps#main-mini-app-previews">сведения о предпросмотре главного mini app, подробнее см. здесь »</a>.<br><br>Примечание: технически этот метод могут вызывать и не владельцы, но тогда он всегда ведёт себя в точности как <a href="/method/bots.getPreviewMedias">bots.getPreviewMedias</a>, возвращая только предпросмотры для текущего языка и пустой массив <code>lang_codes</code> независимо от переданного <code>lang_code</code>, поэтому используйте, пожалуйста, <a href="/method/bots.getPreviewMedias">bots.getPreviewMedias</a>, если вы не владелец бота <code>bot</code>.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
