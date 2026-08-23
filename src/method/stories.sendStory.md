---
title: "stories.sendStory (метод)"
original: "https://core.telegram.org/method/stories.sendStory"
section: ref
kind: method
layout: layout.njk
---

# stories.sendStory

*Метод из схемы TL.*

> Uploads a [Telegram Story](https://core.telegram.org/api/stories).
> May also be used in a [business connection](https://core.telegram.org/api/bots/connected-business-bots), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the ID of a controlled business user in `peer`.

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
stories.sendStory#737fc2ec flags:# pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:InputPeer media:InputMedia media_areas:flags.5?Vector<MediaArea> caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long period:flags.3?int fwd_from_id:flags.6?InputPeer fwd_from_story:flags.6?int albums:flags.8?Vector<int> = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether to add the story to the profile automatically upon expiration. If not set, the story will only be added to the archive, see [here »](https://core.telegram.org/api/stories) for more info. |
| noforwards | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | If set, disables forwards, screenshots, and downloads. |
| fwd_modified | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Set this flag when reposting stories with fwd_from_id+fwd_from_story, if the media was modified before reposting. |
| peer | [InputPeer](/type/InputPeer/) | The peer to send the story as. |
| media | [InputMedia](/type/InputMedia/) | The story media. |
| media_areas | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[Vector](https://core.telegram.org/type/Vector%20t)<[MediaArea](/type/MediaArea/)> | [Media areas](https://core.telegram.org/api/stories#media-areas) associated to the story, see [here »](https://core.telegram.org/api/stories#media-areas) for more info. |
| caption | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Story caption. |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities), if allowed by the [stories_entities client configuration parameter »](https://core.telegram.org/api/config#stories-entities). |
| privacy_rules | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPrivacyRule](/type/InputPrivacyRule/)> | [Privacy rules](https://core.telegram.org/api/privacy) for the story, indicating who can or can't view the story. |
| random_id | [long](/type/long/) | Unique client message ID required to prevent message resending. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | Period after which the story is moved to archive (and to the profile if pinned is set), in seconds; must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400 for Telegram Premium users, and 86400 otherwise. |
| fwd_from_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[InputPeer](/type/InputPeer/) | If set, indicates that this story is a repost of story with ID fwd_from_story posted by the peer in fwd_from_id. |
| fwd_from_story | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[int](/type/int/) | If set, indicates that this story is a repost of story with ID fwd_from_story posted by the peer in fwd_from_id. |
| albums | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | If set, adds the story to the specified albums. |
| music | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[InputDocument](/type/InputDocument/) | If set, the audio track to play as background music for the story. |

## Результат

[Updates](/type/Updates/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOOSTS_REQUIRED | The specified channel must first be [boosted by its users](https://core.telegram.org/api/boost) in order to perform this action. |
| 403 | BOT_ACCESS_FORBIDDEN | The specified method can be used over a [business connection](https://core.telegram.org/api/bots/connected-business-bots) for some operations, but the specified query attempted an operation that is not allowed over a business connection. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | IMAGE_PROCESS_FAILED | Failure while processing image. |
| 400 | MEDIA_CAPTION_TOO_LONG | The caption is too long. |
| 400 | MEDIA_EMPTY | The provided media object is invalid. |
| 400 | MEDIA_FILE_INVALID | The specified media file is invalid. |
| 400 | MEDIA_TYPE_INVALID | The specified media type cannot be used in stories. |
| 400 | MEDIA_VIDEO_STORY_MISSING | A non-story video cannot be repubblished as a story (emitted when trying to resend a non-story video as a story using inputDocument). |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | PHOTO_INVALID_DIMENSIONS | The photo dimensions are invalid. |
| 400 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |
| 400 | REACTION_INVALID | The specified reaction is invalid. |
| 400 | STORIES_TOO_MUCH | You have hit the maximum active stories limit as specified by the [story_expiring_limit_* client configuration parameters](https://core.telegram.org/api/config#story-expiring-limit-default): you should buy a [Premium](https://core.telegram.org/api/premium) subscription, delete an active story, or wait for the oldest story to expire. |
| 400 | STORY_PERIOD_INVALID | The specified story period is invalid for this account. |
| 400 | VENUE_ID_INVALID | The specified venue ID is invalid. |
| 400 | VIDEO_DURATION_INVALID | The duration of the specified video is invalid. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Privacy settings](https://core.telegram.org/api/privacy)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/)

Invoke a method using a [Telegram Business Bot connection, see here » for more info, including a list of the methods that can be wrapped in this constructor](https://core.telegram.org/api/bots/connected-business-bots).

Make sure to always send queries wrapped in a `invokeWithBusinessConnection` to the datacenter ID, specified in the `dc_id` field of the [botBusinessConnection](/constructor/botBusinessConnection/) that is being used.

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
