---
title: "bots.BotInfo (тип)"
original: "https://core.telegram.org/type/bots.BotInfo"
section: ref
kind: type
layout: layout.njk
---

# bots.BotInfo

*Тип из схемы TL.*

> Localized name, about text and description of a bot.

## Определение TL

```
bots.botInfo#e8a775b0 name:string about:string description:string = bots.BotInfo;

---functions---

bots.getBotInfo#dcd914fd flags:# bot:flags.0?InputUser lang_code:string = bots.BotInfo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [bots.botInfo](/constructor/bots.botInfo/) | Localized information about a bot. |

## Методы

| Method | Описание |
|---|---|
| [bots.getBotInfo](/method/bots.getBotInfo/) | Get localized name, about text and description of a bot (or of the current account, if called by a bot). |
