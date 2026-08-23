---
title: "savedDialog (конструктор)"
original: "https://core.telegram.org/constructor/savedDialog"
section: ref
kind: constructor
layout: layout.njk
---

# savedDialog

*Конструктор из схемы TL.*

> Represents a [saved dialog »](https://core.telegram.org/api/saved-messages).

## Определение TL

```
savedDialog#bd87cb6c flags:# pinned:flags.2?true peer:Peer top_message:int = SavedDialog;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Is the dialog pinned |
| peer | [Peer](/type/Peer/) | The dialog |
| top_message | [int](/type/int/) | The latest message ID |

## Тип

[SavedDialog](/type/SavedDialog/)

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
