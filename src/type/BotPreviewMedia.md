---
title: "BotPreviewMedia"
original: "https://core.telegram.org/type/BotPreviewMedia"
section: ref
kind: type
description: "Представляет медиафайл предпросмотра главного Mini App, подробнее см. здесь »."
layout: layout.njk
---

# BotPreviewMedia

[@term:Mini App] Представляет [медиафайл предпросмотра главного Mini App, подробнее см. здесь »](/api/bots/webapps/#main-mini-app-previews).

```
botPreviewMedia#23e91ba3 date:int media:MessageMedia = BotPreviewMedia;

---functions---

bots.addPreviewMedia#17aeb75a bot:InputUser lang_code:string media:InputMedia = BotPreviewMedia;
bots.editPreviewMedia#8525606f bot:InputUser lang_code:string media:InputMedia new_media:InputMedia = BotPreviewMedia;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/botPreviewMedia">botPreviewMedia</a></td><td>Представляет <a href="/api/bots/webapps#main-mini-app-previews">медиафайл предпросмотра главного Mini App, подробнее см. здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/bots.addPreviewMedia">bots.addPreviewMedia</a></td><td>Добавить <a href="/api/bots/webapps#main-mini-app-previews">превью Main Mini App, подробнее см. здесь »</a>.<br><br>Этот метод доступен только владельцам ботов с настроенным Main Mini App; о том, как проверить возможность вызова этого метода, см. <a href="/api/bots/webapps#main-mini-app-previews">здесь »</a>.</td></tr><tr><td><a href="/method/bots.editPreviewMedia">bots.editPreviewMedia</a></td><td>Изменить <a href="/api/bots/webapps#main-mini-app-previews">превью Main Mini App, подробнее см. здесь »</a>.<br><br>Этот метод могут использовать только владельцы ботов с настроенным Main Mini App; о том, как проверить, доступен ли вам вызов этого метода, <a href="/api/bots/webapps#main-mini-app-previews">см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
