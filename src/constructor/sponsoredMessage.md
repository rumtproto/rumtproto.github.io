---
title: "sponsoredMessage (конструктор)"
original: "https://core.telegram.org/constructor/sponsoredMessage"
section: ref
kind: constructor
layout: layout.njk
---

# sponsoredMessage

*Конструктор из схемы TL.*

> A [sponsored message](https://core.telegram.org/api/sponsored-messages).

## Определение TL

```
sponsoredMessage#7dbf8673 flags:# recommended:flags.5?true can_report:flags.12?true random_id:bytes url:string title:string message:string entities:flags.1?Vector<MessageEntity> photo:flags.6?Photo media:flags.14?MessageMedia color:flags.13?PeerColor button_text:string sponsor_info:flags.7?string additional_info:flags.8?string min_display_duration:flags.15?int max_display_duration:flags.15?int = SponsoredMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| recommended | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether the message needs to be labeled as "recommended" instead of "sponsored" |
| can_report | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | Whether this message can be [reported as specified here »](https://core.telegram.org/api/sponsored-messages#reporting-sponsored-messages). |
| random_id | [bytes](/type/bytes/) | Message ID. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| url | [string](/type/string/) | Contains the URL to open when the user clicks on the sponsored message. |
| title | [string](/type/string/) | Contains the title of the sponsored message. |
| message | [string](/type/string/) | Sponsored message |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) in message. |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[Photo](/type/Photo/) | If set, contains a custom profile photo bubble that should be displayed for the sponsored message, like for messages sent in groups. |
| media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[MessageMedia](/type/MessageMedia/) | If set, contains some media. |
| color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[PeerColor](/type/PeerColor/) | If set, the sponsored message should use the [message accent color »](https://core.telegram.org/api/colors) specified in color. |
| button_text | [string](/type/string/) | Label of the sponsored message button. |
| sponsor_info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[string](/type/string/) | If set, contains additional information about the sponsor to be shown along with the message. |
| additional_info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[string](/type/string/) | If set, contains additional information about the sponsored message to be shown along with the message. |
| min_display_duration | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[int](/type/int/) | For [sponsored messages to show on channel videos »](https://core.telegram.org/api/sponsored-messages#getting-sponsored-video-advertisements), allow the user to hide the ad only after the specified amount of seconds. |
| max_display_duration | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[int](/type/int/) | For [sponsored messages to show on channel videos »](https://core.telegram.org/api/sponsored-messages#getting-sponsored-video-advertisements), autohide the ad after after the specified amount of seconds. |

## Тип

[SponsoredMessage](/type/SponsoredMessage/)

## Related pages

#### [Sponsored messages](https://core.telegram.org/api/sponsored-messages)

How clients should fetch, display and interact with sponsored messages.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
