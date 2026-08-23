---
title: "inlineBotSwitchPM (конструктор)"
original: "https://core.telegram.org/constructor/inlineBotSwitchPM"
section: ref
kind: constructor
layout: layout.njk
---

# inlineBotSwitchPM

*Конструктор из схемы TL.*

> The bot requested the user to message them in private

## Определение TL

```
inlineBotSwitchPM#3c20629f text:string start_param:string = InlineBotSwitchPM;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| text | [string](/type/string/) | Text for the button that switches the user to a private chat with the bot and sends the bot a start message with the parameter start_parameter (can be empty) |
| start_param | [string](/type/string/) | The parameter for the /start parameter |

## Тип

[InlineBotSwitchPM](/type/InlineBotSwitchPM/)
