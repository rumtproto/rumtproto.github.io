---
title: "webPage (конструктор)"
original: "https://core.telegram.org/constructor/webPage"
section: ref
kind: constructor
layout: layout.njk
---

# webPage

*Конструктор из схемы TL.*

> Webpage preview
> The `type` field indicates the type of the web page, which influences how the preview is rendered (i.e. which extra action button is offered, where the media is taken from, and which [WebPageAttribute](/type/WebPageAttribute/) is present in the `attributes` field). It can be one of the following:
> -   `app` - Preview of a [Mini App link »](https://core.telegram.org/api/links#main-mini-app-links): the `photo` is the app icon, and clients render a button that launches the [Mini App »](https://core.telegram.org/api/bots/webapps).
> -   `article` - Preview of a generic external article or webpage. If `cached_page` is set, clients render an [instant view](https://instantview.telegram.org) button.
> -   `document` - Preview of an external document or file, contained in the `document` field.
> -   `gif` - Preview of an external animated GIF. If `embed_url`+`embed_type` are set the GIF is rendered using an embedded player, otherwise the animation is contained in the `document` field.
> -   `photo` - Preview of an external photo, contained in the `photo` field.
> -   `profile` - Preview of an external author or profile page; clients typically render this with a small thumbnail (forced small media).
> -   `telegram_aicomposetone` - Preview of an [AI compose tone link »](https://core.telegram.org/api/links#ai-compose-tone-links), shared when previewing a [custom AI composer tone »](https://core.telegram.org/api/ai#ai-compose-tones). The `attributes` field contains a [webPageAttributeAiComposeTone](https://core.telegram.org/constructor/webPageAttributeAiComposeTone) with the [custom emoji »](https://core.telegram.org/api/custom-emoji) representing the tone; clients render a button that applies the shared tone.
> -   `telegram_album` - Preview of a [message link »](https://core.telegram.org/api/links#message-links) pointing to a group of messages (album), rendered as a grouped media album rather than as a single-media preview. For this type the album media is **not** taken from the top-level `photo`/`document` fields: instead, a [cached\_page](#) ([instant view](https://instantview.telegram.org)) must be present, and clients render the items of its first [pageBlockCollage](/constructor/pageBlockCollage/) or [pageBlockSlideshow](/constructor/pageBlockSlideshow/) block. Each [pageBlockPhoto](/constructor/pageBlockPhoto/)/[pageBlockVideo](/constructor/pageBlockVideo/) item in that block references a photo or video by ID, resolved against the `photos` and `documents` of the `cached_page`. The instant view itself is not offered as a button (the album media replaces it).
> -   `telegram_auction` - Preview of an [auction link »](https://core.telegram.org/api/links#auction-links) to a [collectible gift auction »](https://core.telegram.org/api/auctions). The `attributes` field contains a [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/) with the auctioned gift and the auction end date; clients render a button to join the auction, or to view the results once the auction has ended.
> -   `telegram_background` - Preview of a [wallpaper deep link »](https://core.telegram.org/api/links#wallpaper-links) to a [chat wallpaper »](https://core.telegram.org/api/wallpapers). The wallpaper settings (background colors, gradient rotation, pattern intensity, blur/motion, etc.) are parsed from the deep link in the `url`, not from dedicated fields. Image wallpapers carry the wallpaper image in the `document` field. Pattern wallpapers also use the `document` field, with `application/x-tgwallpattern` or `image/png` as the pattern MIME type; the colors from the `url` are rendered as the pattern background and tint. Solid-color and gradient wallpapers carry no media and are rendered from the colors encoded in the `url`. No `photo` is present. Clients render a button to apply the background.
> -   `telegram_bot` - Preview of a [bot link »](https://core.telegram.org/api/links#bot-links), rendered like a profile preview using the bot's avatar in the `photo` field.
> -   `telegram_botapp` - Preview of a [direct Mini App link »](https://core.telegram.org/api/links#direct-mini-app-links) to a named bot Mini App: the `photo` is the app preview, and clients render a button that opens the Mini App.
> -   `telegram_call` - Preview of a [conference link »](https://core.telegram.org/api/links#conference-links) to a [group call/conference call »](https://core.telegram.org/api/group-calls); clients render a button to join the call (no `photo`/`document` is present).
> -   `telegram_channel` - Preview of a [public username link »](https://core.telegram.org/api/links#public-username-links) to a channel, using the channel's avatar in the `photo` field; clients render a button to open/join the channel.
> -   `telegram_channel_boost` - Preview of a [boost link »](https://core.telegram.org/api/links#boost-links) to [boost a channel »](https://core.telegram.org/api/boost), using the channel avatar in the `photo` field; clients render a button to boost the channel.
> -   `telegram_channel_direct` - Preview of a [monoforum link »](https://core.telegram.org/api/links#monoforum-links) to the direct messages of a channel, using the channel avatar in the `photo` field.
> -   `telegram_channel_request` - Preview of a [chat invite link »](https://core.telegram.org/api/links#chat-invite-links) to a channel that has [join requests »](https://core.telegram.org/api/invites#join-requests) enabled; clients render a "Request to join" button.
> -   `telegram_chat` - Preview of a [public username link »](https://core.telegram.org/api/links#public-username-links) to a basic group, using the group avatar in the `photo` field; clients render a button to open/join the group.
> -   `telegram_chat_request` - Preview of a [chat invite link »](https://core.telegram.org/api/links#chat-invite-links) to a group that has [join requests »](https://core.telegram.org/api/invites#join-requests) enabled; clients render a "Request to join" button.
> -   `telegram_chatlist` - Preview of a [chat folder link »](https://core.telegram.org/api/links#chat-folder-links) to a [shareable chat folder »](https://core.telegram.org/api/folders#shared-folders) (no `photo`/`document` is present): clients use the `site_name`, `title` and `description` fields for the preview text, no [WebPageAttribute](/type/WebPageAttribute/) is required, and the action button opens the deep link in `url` to import the folder.
> -   `telegram_collection` - Preview of a [gift collection link »](https://core.telegram.org/api/links#gift-collection-links) to a [gift collection »](https://core.telegram.org/api/gifts#gift-collections). The `attributes` field contains a [webPageAttributeStarGiftCollection](/constructor/webPageAttributeStarGiftCollection/) with the collection's icon stickers; clients render a button to view the collection.
> -   `telegram_community` - Preview of a [chat folder link »](https://core.telegram.org/api/links#chat-folder-links) to a [shareable chat folder »](https://core.telegram.org/api/folders#shared-folders), rendered like `telegram_chatlist`.
> -   `telegram_giftcode` - Preview of a [premium giftcode link »](https://core.telegram.org/api/links#premium-giftcode-links) to a [Telegram Premium gift code »](https://core.telegram.org/api/giveaways); clients render a button to view/redeem the gift code (no `photo`/`document` is present).
> -   `telegram_group_boost` - Preview of a [boost link »](https://core.telegram.org/api/links#boost-links) to [boost a supergroup »](https://core.telegram.org/api/boost), using the supergroup avatar in the `photo` field; clients render a button to boost the supergroup.
> -   `telegram_livestream` - Preview of a [video chat/livestream link »](https://core.telegram.org/api/links#video-chat-livestream-links) to a [live video stream »](https://core.telegram.org/api/group-calls), rendered as a video chat preview marked as a livestream; clients render a button to watch the stream.
> -   `telegram_megagroup` - Preview of a [public username link »](https://core.telegram.org/api/links#public-username-links) to a supergroup, using the supergroup avatar in the `photo` field; clients render a button to open/join the supergroup.
> -   `telegram_megagroup_request` - Preview of a [chat invite link »](https://core.telegram.org/api/links#chat-invite-links) to a supergroup that has [join requests »](https://core.telegram.org/api/invites#join-requests) enabled; clients render a "Request to join" button.
> -   `telegram_message` - Preview of a [message link »](https://core.telegram.org/api/links#message-links) to a single message; clients render a button to open the message. Any `cached_page` instant view is ignored for this type.
> -   `telegram_newbot` - Preview of a [managed bot creation request link »](https://core.telegram.org/api/links#managed-bot-creation-request-links) used to create a new bot; clients render a button to create/register the managed bot.
> -   `telegram_nft` - Preview of a [collectible gift link »](https://core.telegram.org/api/links#collectible-gift-link) to a [collectible (unique) gift »](https://core.telegram.org/api/gifts#collectible-gifts). The `attributes` field contains a [webPageAttributeUniqueStarGift](/constructor/webPageAttributeUniqueStarGift/) with the unique gift; clients render a button to view the collectible.
> -   `telegram_stickerset` - Preview of a [stickerset link »](https://core.telegram.org/api/links#stickerset-links) to a [sticker or custom emoji set »](https://core.telegram.org/api/stickers). The `attributes` field contains a [webPageAttributeStickerSet](/constructor/webPageAttributeStickerSet/) with a few preview stickers and the `emojis`/`text_color` flags; clients display the preview stickers and render a button to view the sticker set (or custom emoji set, if the `emojis` flag is set).
> -   `telegram_story` - Preview of a [story link »](https://core.telegram.org/api/links#story-links) to a [story »](https://core.telegram.org/api/stories). The `attributes` field contains a [webPageAttributeStory](/constructor/webPageAttributeStory/) with the story's peer and ID (and optionally the embedded [storyItem](/constructor/storyItem/)); the preview media and caption are taken from the story, and clients render a button to view it.
> -   `telegram_story_album` - Preview of a [story album link »](https://core.telegram.org/api/links#story-album-links) to a [story album »](https://core.telegram.org/api/stories): a `photo` (and optional video `document`) cover is present, and clients render a button to view the story album.
> -   `telegram_theme` - Preview of a [theme link »](https://core.telegram.org/api/links#theme-links) to a [theme »](https://core.telegram.org/api/themes). The `attributes` field contains a [webPageAttributeTheme](/constructor/webPageAttributeTheme/) with the theme file(s) and theme settings; clients render a button to apply the theme.
> -   `telegram_user` - Preview of a [public username link »](https://core.telegram.org/api/links#public-username-links) to a user, rendered like a profile preview using the user's avatar in the `photo` field.
> -   `telegram_videochat` - Preview of a [video chat/livestream link »](https://core.telegram.org/api/links#video-chat-livestream-links) to a [video chat »](https://core.telegram.org/api/group-calls), rendered as a video chat preview.
> -   `telegram_voicechat` - Preview of a [video chat/livestream link »](https://core.telegram.org/api/links#video-chat-livestream-links) to a [voice chat »](https://core.telegram.org/api/group-calls), rendered as a (non-video) video chat preview; clients render a button to join the voice chat.
> -   `video` - Preview of an external video. If `embed_url`+`embed_type` are set the video is rendered using an embedded player, otherwise the video is contained in the `document` field.

## Определение TL

```
webPage#e89c45b2 flags:# has_large_media:flags.13?true video_cover_photo:flags.14?true id:long url:string display_url:string hash:int type:flags.0?string site_name:flags.1?string title:flags.2?string description:flags.3?string photo:flags.4?Photo embed_url:flags.5?string embed_type:flags.5?string embed_width:flags.6?int embed_height:flags.6?int duration:flags.7?int author:flags.8?string document:flags.9?Document cached_page:flags.10?Page attributes:flags.12?Vector<WebPageAttribute> = WebPage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| has_large_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | Whether the size of the media in the preview can be changed. |
| video_cover_photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](/constructor/true/) | Represents a custom [video cover](https://core.telegram.org/api/files/#video-covers). |
| id | [long](/type/long/) | Preview ID |
| url | [string](/type/string/) | URL of previewed webpage |
| display_url | [string](/type/string/) | Webpage URL to be displayed to the user |
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| type | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Type of the web page, which influences how the preview is rendered (i.e. which extra action button is offered, where the media is taken from, and which [WebPageAttribute](/type/WebPageAttribute/) is present in the attributes field). See [above](#) for the list of possible values. |
| site_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Short name of the site (e.g., Google Docs, App Store) |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Title of the content |
| description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | Content description |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Photo](/type/Photo/) | Image representing the content |
| embed_url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[string](/type/string/) | URL to show in the embedded preview |
| embed_type | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[string](/type/string/) | MIME type of the embedded preview, (e.g., text/html or video/mp4) |
| embed_width | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[int](/type/int/) | Width of the embedded preview |
| embed_height | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[int](/type/int/) | Height of the embedded preview |
| duration | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[int](/type/int/) | Duration of the content, in seconds |
| author | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[string](/type/string/) | Author of the content |
| document | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[Document](/type/Document/) | Preview of the content as a media file |
| cached_page | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[Page](/type/Page/) | Page contents in [instant view](https://instantview.telegram.org) format |
| attributes | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[Vector](https://core.telegram.org/type/Vector%20t)<[WebPageAttribute](/type/WebPageAttribute/)> | Webpage attributes |

## Тип

[WebPage](/type/WebPage/)

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [WebPageAttribute](/type/WebPageAttribute/)

Webpage attributes

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [AI features](https://core.telegram.org/api/ai)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.

#### [webPageAttributeAiComposeTone](https://core.telegram.org/constructor/webPageAttributeAiComposeTone)

[Webpage attribute](/type/WebPageAttribute/) attached to a [webPage](/constructor/webPage/) of type `telegram_aicomposetone`, generated when previewing a shared [AI composer tone »](https://core.telegram.org/api/ai#ai-compose-tones) via an [AI compose tone link »](https://core.telegram.org/api/links#ai-compose-tone-links).

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [pageBlockCollage](/constructor/pageBlockCollage/)

Collage of media

#### [pageBlockSlideshow](/constructor/pageBlockSlideshow/)

Slideshow

#### [pageBlockPhoto](/constructor/pageBlockPhoto/)

A photo

#### [pageBlockVideo](/constructor/pageBlockVideo/)

Video

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/)

Contains info about a [collectible gift auction »](https://core.telegram.org/api/auctions) for a [webPage](/constructor/webPage/) preview of an [auction »](https://core.telegram.org/api/auctions) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_auction`).

#### [Chat wallpapers](https://core.telegram.org/api/wallpapers)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [webPageAttributeStarGiftCollection](/constructor/webPageAttributeStarGiftCollection/)

Contains info about a [gift collection »](https://core.telegram.org/api/gifts#gift-collections) for a [webPage](/constructor/webPage/) preview of a [gift collection »](https://core.telegram.org/api/gifts#gift-collections) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_collection`).

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [webPageAttributeUniqueStarGift](/constructor/webPageAttributeUniqueStarGift/)

Contains info about [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) for a [webPage](/constructor/webPage/) preview of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_nft`).

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.

#### [webPageAttributeStickerSet](/constructor/webPageAttributeStickerSet/)

Contains info about a [stickerset »](https://core.telegram.org/api/stickers), for a [webPage](/constructor/webPage/) preview of a [stickerset deep link »](https://core.telegram.org/api/links#stickerset-links) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_stickerset`).

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [webPageAttributeStory](/constructor/webPageAttributeStory/)

Webpage preview of a Telegram story

#### [storyItem](/constructor/storyItem/)

Represents a [story](https://core.telegram.org/api/stories).

#### [Telegram themes](https://core.telegram.org/api/themes)

Telegram apps support generating, sharing and synchronizing app themes.

#### [webPageAttributeTheme](/constructor/webPageAttributeTheme/)

Page theme
