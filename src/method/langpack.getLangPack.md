---
title: "langpack.getLangPack (метод)"
original: "https://core.telegram.org/method/langpack.getLangPack"
section: ref
kind: method
layout: layout.njk
---

# langpack.getLangPack

*Метод из схемы TL.*

> Get localization pack strings

## Определение TL

```
langPackDifference#f385c1f6 lang_code:string from_version:int version:int strings:Vector<LangPackString> = LangPackDifference;
---functions---
langpack.getLangPack#f2f2330a lang_pack:string lang_code:string = LangPackDifference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lang_pack | [string](/type/string/) | Platform identifier (i.e. android, tdesktop, etc). |
| lang_code | [string](/type/string/) | Either an ISO 639-1 language code or a language pack name obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links). |

## Результат

[LangPackDifference](/type/LangPackDifference/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | LANGUAGE_INVALID | The specified lang_code is invalid. |
| 400 | LANG_CODE_NOT_SUPPORTED | The specified language code is not supported. |
| 400 | LANG_PACK_INVALID | The provided language pack is invalid. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
