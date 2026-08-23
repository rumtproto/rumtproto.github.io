---
title: "ExportedChatlistInvite (тип)"
original: "https://core.telegram.org/type/ExportedChatlistInvite"
section: ref
kind: type
layout: layout.njk
---

# ExportedChatlistInvite

*Тип из схемы TL.*

> An exported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
exportedChatlistInvite#c5181ac flags:# title:string url:string peers:Vector<Peer> = ExportedChatlistInvite;

---functions---

chatlists.editExportedInvite#653db63d flags:# chatlist:InputChatlist slug:string title:flags.1?string peers:flags.2?Vector<InputPeer> = ExportedChatlistInvite;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [exportedChatlistInvite](/constructor/exportedChatlistInvite/) | Exported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |

## Методы

| Method | Описание |
|---|---|
| [chatlists.editExportedInvite](/method/chatlists.editExportedInvite/) | Edit a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
