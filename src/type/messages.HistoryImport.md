---
title: "messages.HistoryImport"
original: "https://core.telegram.org/type/messages.HistoryImport"
section: ref
kind: type
description: "Идентификатор сессии импорта истории, подробнее см. здесь »."
layout: layout.njk
---

# messages.HistoryImport

Идентификатор [сессии импорта истории, подробнее см. здесь »](/api/import/).

```
messages.historyImport#1662af0b id:long = messages.HistoryImport;

---functions---

messages.initHistoryImport#34090c3b peer:InputPeer file:InputFile media_count:int = messages.HistoryImport;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.historyImport">messages.historyImport</a></td><td>Идентификатор конкретного <a href="/api/import">сеанса импорта чата, подробнее см. здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.initHistoryImport">messages.initHistoryImport</a></td><td>Импортировать историю переписки из стороннего мессенджера в определённый чат Telegram; <a href="/api/import">подробнее об импортированных чатах см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Импортированные сообщения](/api/import/)

Telegram позволяет импортировать сообщения и медиа из сторонних мессенджеров.
