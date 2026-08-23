---
title: "decryptedMessage (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessage"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessage

*Конструктор из схемы TL.*

> Contents of an encrypted message.

## Определение TL

```
===8===
decryptedMessage#1f814f1f random_id:long random_bytes:bytes message:string media:DecryptedMessageMedia = DecryptedMessage;

===17===
decryptedMessage#204d3878 random_id:long ttl:int message:string media:DecryptedMessageMedia = DecryptedMessage;

===45===
decryptedMessage#36b091de flags:# random_id:long ttl:int message:string media:flags.9?DecryptedMessageMedia entities:flags.7?Vector<MessageEntity> via_bot_name:flags.11?string reply_to_random_id:flags.3?long = DecryptedMessage;

===73===
decryptedMessage#91cc4674 flags:# no_webpage:flags.1?true silent:flags.5?true random_id:long ttl:int message:string media:flags.9?DecryptedMessageMedia entities:flags.7?Vector<MessageEntity> via_bot_name:flags.11?string reply_to_random_id:flags.3?long grouped_id:flags.17?long = DecryptedMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| random_id | [long](/type/long/) | Random message ID, assigned by the author of message. Must be equal to the ID passed to sending method. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| random_bytes | [bytes](/type/bytes/) | Random bytes, removed in layer 17. |
| message | [string](/type/string/) | Message text |
| media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[DecryptedMessageMedia](/type/DecryptedMessageMedia/) | Media content |
| ttl | [int](/type/int/) | Message lifetime. Has higher priority than [decryptedMessageActionSetMessageTTL](/constructor/decryptedMessageActionSetMessageTTL/). Parameter added in Layer 17. |
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) (added in layer 45) |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | Message [entities](https://core.telegram.org/api/entities) for styled text (parameter added in layer 45) |
| via_bot_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[string](/type/string/) | Specifies the ID of the inline bot that generated the message (parameter added in layer 45) |
| reply_to_random_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[long](/type/long/) | Random message ID of the message this message replies to (parameter added in layer 45) |
| grouped_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[long](/type/long/) | Random group ID, assigned by the author of message. Multiple encrypted messages with a photo attached and with the same group ID indicate an [album or grouped media](https://core.telegram.org/api/files/#albums-grouped-media) (parameter added in layer 45) |

## Тип

[DecryptedMessage](/type/DecryptedMessage/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [decryptedMessageActionSetMessageTTL](/constructor/decryptedMessageActionSetMessageTTL/)

Setting of a message lifetime after reading.

Upon receiving such message the client shall start deleting of all messages of an encrypted chat **ttl\_seconds** seconds after the messages were read by user.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
