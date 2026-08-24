---
title: "bots.BotInfo"
original: "https://core.telegram.org/type/bots.BotInfo"
section: ref
kind: type
description: "Локализованные имя, текст «О боте» и описание бота."
layout: layout.njk
---

# bots.BotInfo

Локализованные имя, текст «О боте» и описание бота.

```
bots.botInfo#e8a775b0 name:string about:string description:string = bots.BotInfo;

---functions---

bots.getBotInfo#dcd914fd flags:# bot:flags.0?InputUser lang_code:string = bots.BotInfo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/bots.botInfo">bots.botInfo</a></td><td>Локализованные сведения о боте.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/bots.getBotInfo">bots.getBotInfo</a></td><td>Получить локализованное имя, текст «о себе» и описание бота (или текущего аккаунта, если метод вызван ботом).</td></tr></tbody></table>
