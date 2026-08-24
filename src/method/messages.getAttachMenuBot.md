---
title: "messages.getAttachMenuBot"
original: "https://core.telegram.org/method/messages.getAttachMenuBot"
section: ref
kind: method
description: "Возвращает запись меню вложений для mini app бота, который можно запустить из меню вложений »"
layout: layout.njk
---

# messages.getAttachMenuBot

[@term:Mini App] Возвращает запись меню вложений для [mini app бота, который можно запустить из меню вложений »](/api/bots/attach/)

```
attachMenuBotsBot#93bf667f bot:AttachMenuBot users:Vector<User> = AttachMenuBotsBot;
---functions---
messages.getAttachMenuBot#77216192 bot:InputUser = AttachMenuBotsBot;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор бота</td></tr></tbody></table>

### Результат

[AttachMenuBotsBot](/type/AttachMenuBotsBot/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr></tbody></table>

### Связанные страницы

#### [Пункты меню вложений и бокового меню для ботов](/api/bots/attach/)

Боты могут добавлять пункты в меню вложений и в боковое меню, предлагая легкодоступные многофункциональные веб-приложения.
