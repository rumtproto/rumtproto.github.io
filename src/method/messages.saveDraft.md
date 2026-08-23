---
title: "messages.saveDraft (метод)"
original: "https://core.telegram.org/method/messages.saveDraft"
section: ref
kind: method
layout: layout.njk
---

# messages.saveDraft

*Метод из схемы TL.*

> Save a message [draft](https://core.telegram.org/api/drafts) associated to a chat.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.saveDraft#54ae308e flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo peer:InputPeer message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia effect:flags.7?long suggested_post:flags.8?SuggestedPost = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| no_webpage | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Disable generation of the webpage preview |
| invert_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. |
| reply_to | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[InputReplyTo](/type/InputReplyTo/) | If set, indicates that the message should be sent in reply to the specified message or story. |
| peer | [InputPeer](/type/InputPeer/) | Destination of the message that should be sent |
| message | [string](/type/string/) | The draft |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | Message [entities](https://core.telegram.org/api/entities) for styled text |
| media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[InputMedia](/type/InputMedia/) | Attached media |
| effect | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[long](/type/long/) | Specifies a [message effect »](https://core.telegram.org/api/effects) to use for the message. |
| suggested_post | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[SuggestedPost](/type/SuggestedPost/) | Used to [suggest a post to a channel, see here »](https://core.telegram.org/api/suggested-posts) for more info on the full flow. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | ENTITY_BOUNDS_INVALID | A specified [entity offset or length](https://core.telegram.org/api/entities#entity-length) is invalid, see [here »](https://core.telegram.org/api/entities#entity-length) for info on how to properly compute the entity offset/length. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Animated message effects](https://core.telegram.org/api/effects)

Telegram allows adding spectacular animated effects to messages you send.

#### [Suggested posts](https://core.telegram.org/api/suggested-posts)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.

#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts
