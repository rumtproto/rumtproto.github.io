---
title: "bots.getBotInfo"
original: "https://core.telegram.org/method/bots.getBotInfo"
section: ref
kind: method
description: "Получить локализованное имя, текст «о себе» и описание бота (или текущего аккаунта, если метод вызван ботом)."
layout: layout.njk
---

# bots.getBotInfo

Получить локализованное имя, текст «о себе» и описание бота (или текущего аккаунта, если метод вызван ботом).

```
bots.botInfo#e8a775b0 name:string about:string description:string = bots.BotInfo;
---functions---
bots.getBotInfo#dcd914fd flags:# bot:flags.0?InputUser lang_code:string = bots.BotInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputUser">InputUser</a></td><td>При вызове пользователем <strong>обязано</strong> содержать пир принадлежащего нам бота.</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка; если оставить пустым, метод вернёт запасные текст «о себе» и описание.</td></tr></tbody></table>

### Результат

[bots.BotInfo](/type/bots.BotInfo/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>LANG_CODE_INVALID</td><td>Указанный код языка недействителен.</td></tr><tr><td>400</td><td>USER_BOT_INVALID</td><td>При вызове этого метода пользовательские аккаунты обязаны передавать параметр метода <code>bot</code>. Если такого параметра у метода нет, метод могут вызывать только аккаунты ботов.</td></tr></tbody></table>
