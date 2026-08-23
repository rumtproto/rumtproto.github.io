---
title: "chatlists.ExportedChatlistInvite (тип)"
original: "https://core.telegram.org/type/chatlists.ExportedChatlistInvite"
section: ref
kind: type
layout: layout.njk
---

# chatlists.ExportedChatlistInvite

*Тип из схемы TL.*

> Exported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
chatlists.exportedChatlistInvite#10e6e3a6 filter:DialogFilter invite:ExportedChatlistInvite = chatlists.ExportedChatlistInvite;

---functions---

chatlists.exportChatlistInvite#8472478e chatlist:InputChatlist title:string peers:Vector<InputPeer> = chatlists.ExportedChatlistInvite;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [chatlists.exportedChatlistInvite](/constructor/chatlists.exportedChatlistInvite/) | Info about an exported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |

## Методы

| Method | Описание |
|---|---|
| [chatlists.exportChatlistInvite](/method/chatlists.exportChatlistInvite/) | Export a [folder »](https://core.telegram.org/api/folders), creating a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
