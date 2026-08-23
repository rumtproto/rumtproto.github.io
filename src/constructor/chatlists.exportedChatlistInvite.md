---
title: "chatlists.exportedChatlistInvite (конструктор)"
original: "https://core.telegram.org/constructor/chatlists.exportedChatlistInvite"
section: ref
kind: constructor
layout: layout.njk
---

# chatlists.exportedChatlistInvite

*Конструктор из схемы TL.*

> Info about an exported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
chatlists.exportedChatlistInvite#10e6e3a6 filter:DialogFilter invite:ExportedChatlistInvite = chatlists.ExportedChatlistInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| filter | [DialogFilter](/type/DialogFilter/) | Folder ID |
| invite | [ExportedChatlistInvite](/type/ExportedChatlistInvite/) | The exported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |

## Тип

[chatlists.ExportedChatlistInvite](/type/chatlists.ExportedChatlistInvite/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
