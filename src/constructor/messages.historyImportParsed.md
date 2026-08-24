---
title: "messages.historyImportParsed"
original: "https://core.telegram.org/constructor/messages.historyImportParsed"
section: ref
kind: constructor
description: "Содержит информацию о файле экспорта чата, выгруженном из стороннего мессенджера; подробнее см. здесь."
layout: layout.njk
---

# messages.historyImportParsed

Содержит информацию о файле экспорта чата, [выгруженном из стороннего мессенджера; подробнее см. здесь](/api/import/).  
Если не задан ни флаг `pm`, ни флаг `group`, указанный экспорт чата был выгружен из чата неизвестного типа.

```
messages.historyImportParsed#5e0fb7b9 flags:# pm:flags.0?true group:flags.1?true title:flags.2?string = messages.HistoryImportParsed;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>pm</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Файл экспорта переписки был получен из личного чата.</td></tr><tr><td><strong>group</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Файл экспорта переписки был получен из группового чата.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Название чата.</td></tr></tbody></table>

### Тип

[messages.HistoryImportParsed](/type/messages.HistoryImportParsed/)

### Связанные страницы

#### [Импортированные сообщения](/api/import/)

Telegram позволяет импортировать сообщения и медиа из сторонних мессенджеров.
