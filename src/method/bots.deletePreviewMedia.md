---
title: "bots.deletePreviewMedia"
original: "https://core.telegram.org/method/bots.deletePreviewMedia"
section: ref
kind: method
description: "Удалить предпросмотр главного Mini App, подробнее см. здесь »."
layout: layout.njk
---

# bots.deletePreviewMedia

[@term:Mini App] Удалить [предпросмотр главного Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews).

Этот метод могут использовать только владельцы ботов с настроенным Main Mini App; о том, как проверить, доступен ли вам вызов этого метода, [см. здесь »](/api/bots/webapps/#main-mini-app-previews).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.deletePreviewMedia#2d0135b3 bot:InputUser lang_code:string media:Vector<InputMedia> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, которому принадлежит Main Mini App.</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка по ISO 639-1, указывающий локализацию удаляемого предпросмотра.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputMedia">InputMedia</a>&gt;</td><td>Предпросмотр в виде фото или видео, который нужно удалить; ранее получен так, как указано <a href="/api/bots/webapps#main-mini-app-previews">здесь »</a>.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
