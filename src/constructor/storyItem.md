---
title: "storyItem (конструктор)"
original: "https://core.telegram.org/constructor/storyItem"
section: ref
kind: constructor
layout: layout.njk
---

# storyItem

*Конструктор из схемы TL.*

> Represents a [story](https://core.telegram.org/api/stories).

## Определение TL

```
storyItem#edf164f1 flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> = StoryItem;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether this story is pinned on the user's profile |
| public | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Whether this story is public and can be viewed by everyone |
| close_friends | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Whether this story can only be viewed by [our close friends, see here »](https://core.telegram.org/api/privacy) for more info |
| min | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Full information about this story was omitted for space and performance reasons; use [stories.getStoriesByID](/method/stories.getStoriesByID/) to fetch full info about this story when and if needed. |
| noforwards | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | Whether this story is [protected](https://telegram.org/blog/content-protection-delete-by-date-and-more) and thus cannot be forwarded; clients should also prevent users from saving attached media (i.e. videos should only be streamed, photos should be kept in RAM, et cetera). |
| edited | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | Indicates whether the story was edited. |
| contacts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | Whether this story can only be viewed by our contacts |
| selected_contacts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | Whether this story can only be viewed by a select list of our contacts |
| out | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[true](/constructor/true/) | indicates whether we sent this story. |
| id | [int](/type/int/) | ID of the story. |
| date | [int](/type/int/) | When was the story posted. |
| from_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[Peer](/type/Peer/) | Sender of the story. |
| fwd_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[StoryFwdHeader](/type/StoryFwdHeader/) | For [reposted stories »](https://core.telegram.org/api/stories#reposting-stories), contains info about the original story. |
| expire_date | [int](/type/int/) | When does the story expire. |
| caption | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Story caption. |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |
| media | [MessageMedia](/type/MessageMedia/) | Story media. |
| media_areas | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[Vector](https://core.telegram.org/type/Vector%20t)<[MediaArea](/type/MediaArea/)> | List of media areas, see [here »](https://core.telegram.org/api/stories#media-areas) for more info on media areas. |
| privacy | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Vector](https://core.telegram.org/type/Vector%20t)<[PrivacyRule](/type/PrivacyRule/)> | [Privacy rules](https://core.telegram.org/api/privacy) indicating who can and can't view this story |
| views | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[StoryViews](/type/StoryViews/) | View date and reaction information |
| sent_reaction | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[Reaction](/type/Reaction/) | The reaction we sent. |
| albums | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | [Albums](https://core.telegram.org/api/stories#story-albums) this story is part of. |
| music | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[Document](/type/Document/) | If set, the audio track played as background music for the story. |

## Тип

[StoryItem](/type/StoryItem/)

## Related pages

#### [Privacy settings](https://core.telegram.org/api/privacy)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [stories.getStoriesByID](/method/stories.getStoriesByID/)

Obtain full info about a set of [stories](https://core.telegram.org/api/stories) by their IDs.

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
