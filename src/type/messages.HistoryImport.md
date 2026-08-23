---
title: "messages.HistoryImport (тип)"
original: "https://core.telegram.org/type/messages.HistoryImport"
section: ref
kind: type
layout: layout.njk
---

# messages.HistoryImport

*Тип из схемы TL.*

> Identifier of a [history import session, click here for more info »](https://core.telegram.org/api/import).

## Определение TL

```
messages.historyImport#1662af0b id:long = messages.HistoryImport;

---functions---

messages.initHistoryImport#34090c3b peer:InputPeer file:InputFile media_count:int = messages.HistoryImport;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.historyImport](/constructor/messages.historyImport/) | ID of a specific [chat import session, click here for more info »](https://core.telegram.org/api/import). |

## Методы

| Method | Описание |
|---|---|
| [messages.initHistoryImport](/method/messages.initHistoryImport/) | Import chat history from a foreign chat app into a specific Telegram chat, [click here for more info about imported chats »](https://core.telegram.org/api/import). |

## Related pages

#### [Imported messages](https://core.telegram.org/api/import)

Telegram allows importing messages and media from foreign chat apps.
