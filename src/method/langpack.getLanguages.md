---
title: "langpack.getLanguages (метод)"
original: "https://core.telegram.org/method/langpack.getLanguages"
section: ref
kind: method
layout: layout.njk
---

# langpack.getLanguages

*Метод из схемы TL.*

> Get information about all languages in a localization pack

## Определение TL

```
---functions---
langpack.getLanguages#42c6978f lang_pack:string = Vector<LangPackLanguage>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lang_pack | [string](/type/string/) | Platform identifier (i.e. android, tdesktop, etc). |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[LangPackLanguage](/type/LangPackLanguage/)\>

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | LANG_PACK_INVALID | The provided language pack is invalid. |
