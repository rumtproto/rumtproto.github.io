---
title: "bots.editPreviewMedia"
original: "https://core.telegram.org/method/bots.editPreviewMedia"
section: ref
kind: method
description: "Изменить превью Main Mini App, подробнее см. здесь »."
layout: layout.njk
---

# bots.editPreviewMedia

[@term:Mini App] Изменить [превью Main Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews).

Этот метод могут использовать только владельцы ботов с настроенным Main Mini App; о том, как проверить, доступен ли вам вызов этого метода, [см. здесь »](/api/bots/webapps/#main-mini-app-previews).

```
botPreviewMedia#23e91ba3 date:int media:MessageMedia = BotPreviewMedia;
---functions---
bots.editPreviewMedia#8525606f bot:InputUser lang_code:string media:InputMedia new_media:InputMedia = BotPreviewMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, которому принадлежит Main Mini App.</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка по ISO 639-1, указывающий локализацию изменяемого предпросмотра.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/InputMedia">InputMedia</a></td><td>Предпросмотр в виде фото или видео, который нужно заменить; ранее получен так, как указано <a href="/api/bots/webapps#main-mini-app-previews">здесь »</a>.</td></tr><tr><td><strong>new_media</strong></td><td style="text-align: center;"><a href="/type/InputMedia">InputMedia</a></td><td>Новый предпросмотр в виде фото или видео, загруженный с помощью <a href="/method/messages.uploadMedia">messages.uploadMedia</a>.</td></tr></tbody></table>

### Результат

[BotPreviewMedia](/type/BotPreviewMedia/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [messages.uploadMedia](/method/messages.uploadMedia/)

Загрузить файл и связать его с чатом (не отправляя его в чат)

Может также применяться в рамках [бизнес-подключения](/api/bots/connected-business-bots/), причём _не_ путём оборачивания запроса в [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), а путём указания идентификатора бизнес-подключения в параметре `business_connection_id`.
