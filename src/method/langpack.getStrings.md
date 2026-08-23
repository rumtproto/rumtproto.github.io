---
title: "langpack.getStrings (метод)"
original: "https://core.telegram.org/method/langpack.getStrings"
section: ref
kind: method
layout: layout.njk
---

# langpack.getStrings

*Метод из схемы TL.*

> Get strings from a language pack

## Определение TL

```
---functions---
langpack.getStrings#efea3803 lang_pack:string lang_code:string keys:Vector<string> = Vector<LangPackString>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lang_pack | [string](/type/string/) | Platform identifier (i.e. android, tdesktop, etc). |
| lang_code | [string](/type/string/) | Either an ISO 639-1 language code or a language pack name obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links). |
| keys | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | Strings to get |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[LangPackString](/type/LangPackString/)\>

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | LANG_CODE_NOT_SUPPORTED | The specified language code is not supported. |
| 400 | LANG_PACK_INVALID | The provided language pack is invalid. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
