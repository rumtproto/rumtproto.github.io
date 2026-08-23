---
title: "draftMessage (конструктор)"
original: "https://core.telegram.org/constructor/draftMessage"
section: ref
kind: constructor
layout: layout.njk
---

# draftMessage

*Конструктор из схемы TL.*

> Represents a message [draft](https://core.telegram.org/api/drafts).

## Определение TL

```
draftMessage#96eaa5eb flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia date:int effect:flags.7?long suggested_post:flags.8?SuggestedPost = DraftMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| no_webpage | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether no webpage preview will be generated |
| invert_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. |
| reply_to | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[InputReplyTo](/type/InputReplyTo/) | If set, indicates that the message should be sent in reply to the specified message or story. |
| message | [string](/type/string/) | The draft |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | Message [entities](https://core.telegram.org/api/entities) for styled text. |
| media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[InputMedia](/type/InputMedia/) | Media. |
| date | [int](/type/int/) | Date of last update of the draft. |
| effect | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[long](/type/long/) | A [message effect that should be played as specified here »](https://core.telegram.org/api/effects). |
| suggested_post | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[SuggestedPost](/type/SuggestedPost/) | Used to [suggest a post to a channel, see here »](https://core.telegram.org/api/suggested-posts) for more info on the full flow. |

## Тип

[DraftMessage](/type/DraftMessage/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Animated message effects](https://core.telegram.org/api/effects)

Telegram allows adding spectacular animated effects to messages you send.

#### [Suggested posts](https://core.telegram.org/api/suggested-posts)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.

#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts
