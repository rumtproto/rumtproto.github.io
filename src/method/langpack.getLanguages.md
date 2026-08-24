---
title: "langpack.getLanguages"
original: "https://core.telegram.org/method/langpack.getLanguages"
section: ref
kind: method
description: "Получить информацию обо всех языках в пакете локализации"
layout: layout.njk
---

# langpack.getLanguages

Получить информацию обо всех языках в пакете локализации

```
---functions---
langpack.getLanguages#42c6978f lang_pack:string = Vector<LangPackLanguage>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>lang_pack</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор платформы (например, <code>android</code>, <code>tdesktop</code> и т. п.).</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[LangPackLanguage](/type/LangPackLanguage/)\>

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>LANG_PACK_INVALID</td><td>Указанный языковой пакет недействителен.</td></tr></tbody></table>
