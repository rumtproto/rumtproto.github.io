---
title: "savedReactionTag (конструктор)"
original: "https://core.telegram.org/constructor/savedReactionTag"
section: ref
kind: constructor
layout: layout.njk
---

# savedReactionTag

*Конструктор из схемы TL.*

> Info about a [saved message reaction tag »](https://core.telegram.org/api/saved-messages#tags).

## Определение TL

```
savedReactionTag#cb6ff828 flags:# reaction:Reaction title:flags.0?string count:int = SavedReactionTag;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| reaction | [Reaction](/type/Reaction/) | [Reaction](https://core.telegram.org/api/reactions) associated to the tag. |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Custom tag name assigned by the user (max 12 UTF-8 chars). |
| count | [int](/type/int/) | Number of messages tagged with this tag. |

## Тип

[SavedReactionTag](/type/SavedReactionTag/)

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
