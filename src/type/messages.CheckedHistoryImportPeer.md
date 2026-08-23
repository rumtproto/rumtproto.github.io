---
title: "messages.CheckedHistoryImportPeer (тип)"
original: "https://core.telegram.org/type/messages.CheckedHistoryImportPeer"
section: ref
kind: type
layout: layout.njk
---

# messages.CheckedHistoryImportPeer

*Тип из схемы TL.*

> Contains a confirmation text to be shown to the user, upon [importing chat history, click here for more info »](https://core.telegram.org/api/import).

## Определение TL

```
messages.checkedHistoryImportPeer#a24de717 confirm_text:string = messages.CheckedHistoryImportPeer;

---functions---

messages.checkHistoryImportPeer#5dc60f03 peer:InputPeer = messages.CheckedHistoryImportPeer;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.checkedHistoryImportPeer](/constructor/messages.checkedHistoryImportPeer/) | Contains a confirmation text to be shown to the user, upon [importing chat history, click here for more info »](https://core.telegram.org/api/import). |

## Методы

| Method | Описание |
|---|---|
| [messages.checkHistoryImportPeer](/method/messages.checkHistoryImportPeer/) | Check whether chat history exported from another chat app can be [imported into a specific Telegram chat, click here for more info »](https://core.telegram.org/api/import). If the check succeeds, and no RPC errors are returned, a [messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/) constructor will be returned, with a confirmation text to be shown to the user, before actually initializing the import. |

## Related pages

#### [Imported messages](https://core.telegram.org/api/import)

Telegram allows importing messages and media from foreign chat apps.
