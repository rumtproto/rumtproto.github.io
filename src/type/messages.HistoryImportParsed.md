---
title: "messages.HistoryImportParsed"
original: "https://core.telegram.org/type/messages.HistoryImportParsed"
section: ref
kind: type
description: "Содержит информацию о файле экспорта чата, выгруженном из стороннего мессенджера."
layout: layout.njk
---

# messages.HistoryImportParsed

Содержит информацию о файле экспорта чата, выгруженном из стороннего мессенджера.

```
messages.historyImportParsed#5e0fb7b9 flags:# pm:flags.0?true group:flags.1?true title:flags.2?string = messages.HistoryImportParsed;

---functions---

messages.checkHistoryImport#43fe19f3 import_head:string = messages.HistoryImportParsed;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.historyImportParsed">messages.historyImportParsed</a></td><td>Содержит информацию о файле экспорта чата, <a href="/api/import">выгруженном из стороннего мессенджера; подробнее см. здесь</a>.<br>Если не задан ни флаг <code>pm</code>, ни флаг <code>group</code>, указанный экспорт чата был выгружен из чата неизвестного типа.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.checkHistoryImport">messages.checkHistoryImport</a></td><td>Получает информацию о файле экспорта чата, выгруженном из стороннего мессенджера; <a href="/api/import">подробнее об импортированных чатах см. здесь »</a>.</td></tr></tbody></table>
