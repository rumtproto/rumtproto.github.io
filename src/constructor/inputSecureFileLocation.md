---
title: "inputSecureFileLocation (конструктор)"
original: "https://core.telegram.org/constructor/inputSecureFileLocation"
section: ref
kind: constructor
layout: layout.njk
---

# inputSecureFileLocation

*Конструктор из схемы TL.*

> Location of encrypted telegram [passport](https://core.telegram.org/passport) file.

## Определение TL

```
inputSecureFileLocation#cbc7ee28 id:long access_hash:long = InputFileLocation;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | File ID, id parameter value from [secureFile](/constructor/secureFile/) |
| access_hash | [long](/type/long/) | Checksum, access_hash parameter value from [secureFile](/constructor/secureFile/) |

## Тип

[InputFileLocation](/type/InputFileLocation/)

## Related pages

#### [secureFile](/constructor/secureFile/)

Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
