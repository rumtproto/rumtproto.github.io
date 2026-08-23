---
title: "stories.editStory (метод)"
original: "https://core.telegram.org/method/stories.editStory"
section: ref
kind: method
layout: layout.njk
---

# stories.editStory

*Метод из схемы TL.*

> Edit an uploaded [story](https://core.telegram.org/api/stories)
> May also be used in a [business connection](https://core.telegram.org/api/bots/connected-business-bots), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the ID of a controlled business user in `peer`: in this context, the method can only be used to edit stories posted by the same business bot on behalf of the user with [stories.sendStory](/method/stories.sendStory/).

## Определение TL

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
stories.editStory#b583ba46 flags:# peer:InputPeer id:int media:flags.0?InputMedia media_areas:flags.3?Vector<MediaArea> caption:flags.1?string entities:flags.1?Vector<MessageEntity> privacy_rules:flags.2?Vector<InputPrivacyRule> = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Peer where the story was posted. |
| id | [int](/type/int/) | ID of story to edit. |
| media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputMedia](/type/InputMedia/) | If specified, replaces the story media. |
| media_areas | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MediaArea](/type/MediaArea/)> | [Media areas](https://core.telegram.org/api/stories#media-areas) associated to the story, see [here »](https://core.telegram.org/api/stories#media-areas) for more info. |
| caption | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | If specified, replaces the story caption. |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text in the caption](https://core.telegram.org/api/entities), if allowed by the [stories_entities client configuration parameter »](https://core.telegram.org/api/config#stories-entities). |
| privacy_rules | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Vector](https://core.telegram.org/type/Vector%20t)<[InputPrivacyRule](/type/InputPrivacyRule/)> | If specified, alters the [privacy settings »](https://core.telegram.org/api/privacy) of the story, changing who can or can't view the story. |
| music | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[InputDocument](/type/InputDocument/) | If set, the new audio track to play as background music for the story. |

## Результат

[Updates](/type/Updates/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | STORY_NOT_MODIFIED | The new story information you passed is equal to the previous story information, thus it wasn't modified. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Privacy settings](https://core.telegram.org/api/privacy)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/)

Invoke a method using a [Telegram Business Bot connection, see here » for more info, including a list of the methods that can be wrapped in this constructor](https://core.telegram.org/api/bots/connected-business-bots).

Make sure to always send queries wrapped in a `invokeWithBusinessConnection` to the datacenter ID, specified in the `dc_id` field of the [botBusinessConnection](/constructor/botBusinessConnection/) that is being used.

#### [stories.sendStory](/method/stories.sendStory/)

Uploads a [Telegram Story](https://core.telegram.org/api/stories).

May also be used in a [business connection](https://core.telegram.org/api/bots/connected-business-bots), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the ID of a controlled business user in `peer`.
