---
title: "attachMenuBots"
original: "https://core.telegram.org/constructor/attachMenuBots"
section: ref
kind: constructor
description: "Представляет список mini app ботов, которые можно запустить из меню вложений »"
layout: layout.njk
---

# attachMenuBots

[@term:Mini App] Представляет список [mini app ботов, которые можно запустить из меню вложений »](/api/bots/attach/)

```
attachMenuBots#3c4301c0 hash:long bots:Vector<AttachMenuBot> users:Vector<User> = AttachMenuBots;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>bots</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/AttachMenuBot">AttachMenuBot</a>&gt;</td><td>Список <a href="/api/bots/attach">mini app ботов, которые можно запустить из меню вложений »</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Информация о связанных пользователях и ботах</td></tr></tbody></table>

### Тип

[AttachMenuBots](/type/AttachMenuBots/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Пункты меню вложений и бокового меню для ботов](/api/bots/attach/)

Боты могут добавлять пункты в меню вложений и в боковое меню, предлагая легкодоступные многофункциональные веб-приложения.
