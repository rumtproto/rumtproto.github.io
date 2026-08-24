---
title: "messages.checkHistoryImport"
original: "https://core.telegram.org/method/messages.checkHistoryImport"
section: ref
kind: method
description: "Получает информацию о файле экспорта чата, выгруженном из стороннего мессенджера; подробнее об импортированных чатах см. здесь »."
layout: layout.njk
---

# messages.checkHistoryImport

Получает информацию о файле экспорта чата, выгруженном из стороннего мессенджера; [подробнее об импортированных чатах см. здесь »](/api/import/).

```
messages.historyImportParsed#5e0fb7b9 flags:# pm:flags.0?true group:flags.1?true title:flags.2?string = messages.HistoryImportParsed;
---functions---
messages.checkHistoryImport#43fe19f3 import_head:string = messages.HistoryImportParsed;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>import_head</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Начало файла сообщения; до 100 строк.</td></tr></tbody></table>

### Результат

[messages.HistoryImportParsed](/type/messages.HistoryImportParsed/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>IMPORT_FORMAT_UNRECOGNIZED</td><td>Указанный файл экспорта чата был выгружен из неподдерживаемого мессенджера.</td></tr></tbody></table>

### Связанные страницы

#### [Импортированные сообщения](/api/import/)

Telegram позволяет импортировать сообщения и медиа из сторонних мессенджеров.
