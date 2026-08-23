---
title: "Help.PassportConfig (тип)"
original: "https://core.telegram.org/type/help.PassportConfig"
section: ref
kind: type
layout: layout.njk
---

# Help.PassportConfig

*Тип из схемы TL.*

> Telegram [passport](https://core.telegram.org/passport) configuration

## Определение TL

```
help.passportConfigNotModified#bfb9f457 = help.PassportConfig;
help.passportConfig#a098d6af hash:int countries_langs:DataJSON = help.PassportConfig;

---functions---

help.getPassportConfig#c661ad08 hash:int = help.PassportConfig;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.passportConfigNotModified](/constructor/help.passportConfigNotModified/) | Password configuration not modified |
| [help.passportConfig](/constructor/help.passportConfig/) | Telegram [passport](https://core.telegram.org/passport) configuration |

## Методы

| Method | Описание |
|---|---|
| [help.getPassportConfig](/method/help.getPassportConfig/) | Get [passport](https://core.telegram.org/passport) configuration |

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
