---
title: "messages.toggleBotInAttachMenu"
original: "https://core.telegram.org/method/messages.toggleBotInAttachMenu"
section: ref
kind: method
description: "Включить или отключить меню вложений веб-бота »"
layout: layout.njk
---

# messages.toggleBotInAttachMenu

Включить или отключить [меню вложений веб-бота »](/api/bots/attach/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.toggleBotInAttachMenu#69f59d69 flags:# write_allowed:flags.0?true bot:InputUser enabled:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>write_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Разрешает ли пользователь боту писать ему сообщения, если это запрошено в <a href="/constructor/attachMenuBot">attachMenuBot</a>.<code>request_write_access</code></td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор бота</td></tr><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Переключатель</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr></tbody></table>

### Связанные страницы

#### [attachMenuBot](/constructor/attachMenuBot/)

[@term:Mini App] Представляет [mini app бота, который можно запустить из меню вложений или бокового меню »](/api/bots/attach/)

Хотя бы один из флагов `show_in_attach_menu` или `show_in_side_menu` всегда будет установлен.

#### [Пункты меню вложений и бокового меню для ботов](/api/bots/attach/)

Боты могут добавлять пункты в меню вложений и в боковое меню, предлагая легкодоступные многофункциональные веб-приложения.
