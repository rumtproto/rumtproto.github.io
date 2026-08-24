---
title: "bots.setBotInfo"
original: "https://core.telegram.org/method/bots.setBotInfo"
section: ref
kind: method
description: "Задать локализованные имя, текст «о себе» и описание бота (или текущего аккаунта, если метод вызывается ботом)."
layout: layout.njk
---

# bots.setBotInfo

Задать локализованные имя, текст «о себе» и описание бота (или текущего аккаунта, если метод вызывается ботом).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setBotInfo#10cf3123 flags:# bot:flags.2?InputUser lang_code:string name:flags.3?string about:flags.0?string description:flags.1?string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputUser">InputUser</a></td><td>При вызове пользователем <strong>обязано</strong> содержать пир принадлежащего нам бота.</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка; если оставить пустым, будут изменены запасные текст «о себе» и описание</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Новое имя бота</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Новый текст «о себе»</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Новое описание</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>USER_BOT_INVALID</td><td>При вызове этого метода пользовательские аккаунты обязаны передавать параметр метода <code>bot</code>. Если такого параметра у метода нет, метод могут вызывать только аккаунты ботов.</td></tr></tbody></table>
