---
title: "langpack.getLanguage (метод)"
original: "https://core.telegram.org/method/langpack.getLanguage"
section: ref
kind: method
layout: layout.njk
---

# langpack.getLanguage

*Метод из схемы TL.*

> Get information about a language in a localization pack

## Определение TL

```
langPackLanguage#eeca5ce3 flags:# official:flags.0?true rtl:flags.2?true beta:flags.3?true name:string native_name:string lang_code:string base_lang_code:flags.1?string plural_code:string strings_count:int translated_count:int translations_url:string = LangPackLanguage;
---functions---
langpack.getLanguage#6a596502 lang_pack:string lang_code:string = LangPackLanguage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lang_pack | [string](/type/string/) | Platform identifier (i.e. android, tdesktop, etc). |
| lang_code | [string](/type/string/) | Either an ISO 639-1 language code or a language pack name obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links). |

## Результат

[LangPackLanguage](/type/LangPackLanguage/)

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
