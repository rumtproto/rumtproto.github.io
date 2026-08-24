---
title: "messages.searchCounter"
original: "https://core.telegram.org/constructor/messages.searchCounter"
section: ref
kind: constructor
description: "Указывает, сколько результатов было бы найдено вызовом messages.search с теми же параметрами"
layout: layout.njk
---

# messages.searchCounter

Указывает, сколько результатов было бы найдено вызовом [messages.search](/method/messages.search/) с теми же параметрами

```
messages.searchCounter#e844ebff flags:# inexact:flags.1?true filter:MessagesFilter count:int = messages.SearchCounter;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>inexact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, результаты могут быть неточными</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/MessagesFilter">MessagesFilter</a></td><td>Указанный фильтр сообщений</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество результатов, найденных на сервере</td></tr></tbody></table>

### Тип

[messages.SearchCounter](/type/messages.SearchCounter/)

### Связанные страницы

#### [messages.search](/method/messages.search/)

Поиск сообщений.
