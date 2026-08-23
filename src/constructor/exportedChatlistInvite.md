---
title: "exportedChatlistInvite (конструктор)"
original: "https://core.telegram.org/constructor/exportedChatlistInvite"
section: ref
kind: constructor
layout: layout.njk
---

# exportedChatlistInvite

*Конструктор из схемы TL.*

> Exported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
exportedChatlistInvite#c5181ac flags:# title:string url:string peers:Vector<Peer> = ExportedChatlistInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| title | [string](/type/string/) | Name of the link |
| url | [string](/type/string/) | The [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| peers | [Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | Peers to import |

## Тип

[ExportedChatlistInvite](/type/ExportedChatlistInvite/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
