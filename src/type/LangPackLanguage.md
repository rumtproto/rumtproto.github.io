---
title: "LangPackLanguage"
original: "https://core.telegram.org/type/LangPackLanguage"
section: ref
kind: type
description: "Язык языкового пакета"
layout: layout.njk
---

# LangPackLanguage

Язык языкового пакета

```
langPackLanguage#eeca5ce3 flags:# official:flags.0?true rtl:flags.2?true beta:flags.3?true name:string native_name:string lang_code:string base_lang_code:flags.1?string plural_code:string strings_count:int translated_count:int translations_url:string = LangPackLanguage;

---functions---

langpack.getLanguage#6a596502 lang_pack:string lang_code:string = LangPackLanguage;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/langPackLanguage">langPackLanguage</a></td><td>Определяет пакет локализации</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/langpack.getLanguage">langpack.getLanguage</a></td><td>Получить информацию о языке из пакета локализации</td></tr></tbody></table>
