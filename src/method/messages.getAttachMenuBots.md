---
title: "messages.getAttachMenuBots"
original: "https://core.telegram.org/method/messages.getAttachMenuBots"
section: ref
kind: method
description: "Возвращает установленные в меню вложений mini app ботов »"
layout: layout.njk
---

# messages.getAttachMenuBots

[@term:Mini App] Возвращает установленные в меню вложений [mini app ботов »](/api/bots/attach/)

```
attachMenuBotsNotModified#f1d88a5c = AttachMenuBots;
attachMenuBots#3c4301c0 hash:long bots:Vector<AttachMenuBot> users:Vector<User> = AttachMenuBots;
---functions---
messages.getAttachMenuBots#16fcc2cb hash:long = AttachMenuBots;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[AttachMenuBots](/type/AttachMenuBots/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Пункты меню вложений и бокового меню для ботов](/api/bots/attach/)

Боты могут добавлять пункты в меню вложений и в боковое меню, предлагая легкодоступные многофункциональные веб-приложения.
