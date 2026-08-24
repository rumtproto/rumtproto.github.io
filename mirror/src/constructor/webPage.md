---
title: "webPage"
original: "https://core.telegram.org/constructor/webPage"
section: ref
description: "The type field indicates the type of the web page, which influences how the preview is rendered (i.e. which extra action button is offered, where the media is taken from, and…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"webPage","url":"/constructor/webPage/"}]
layout: layout.njk
---

# webPage

Webpage preview

The `type` field indicates the type of the web page, which influences how the preview is rendered (i.e. which extra action button is offered, where the media is taken from, and which [WebPageAttribute](/type/WebPageAttribute/) is present in the `attributes` field). It can be one of the following:

-   `app` - Preview of a [Mini App link »](/api/links/#main-mini-app-links): the `photo` is the app icon, and clients render a button that launches the [Mini App »](/api/bots/webapps/).
-   `article` - Preview of a generic external article or webpage. If `cached_page` is set, clients render an [instant view](https://instantview.telegram.org) button.
-   `document` - Preview of an external document or file, contained in the `document` field.
-   `gif` - Preview of an external animated GIF. If `embed_url`+`embed_type` are set the GIF is rendered using an embedded player, otherwise the animation is contained in the `document` field.
-   `photo` - Preview of an external photo, contained in the `photo` field.
-   `profile` - Preview of an external author or profile page; clients typically render this with a small thumbnail (forced small media).
-   `telegram_aicomposetone` - Preview of an [AI compose tone link »](/api/links/#ai-compose-tone-links), shared when previewing a [custom AI composer tone »](/api/ai/#ai-compose-tones). The `attributes` field contains a [webPageAttributeAiComposeTone](/constructor/webPageAttributeAiComposeTone/) with the [custom emoji »](/api/custom-emoji/) representing the tone; clients render a button that applies the shared tone.
-   `telegram_album` - Preview of a [message link »](/api/links/#message-links) pointing to a group of messages (album), rendered as a grouped media album rather than as a single-media preview. For this type the album media is **not** taken from the top-level `photo`/`document` fields: instead, a [cached\_page](#) ([instant view](https://instantview.telegram.org)) must be present, and clients render the items of its first [pageBlockCollage](/constructor/pageBlockCollage/) or [pageBlockSlideshow](/constructor/pageBlockSlideshow/) block. Each [pageBlockPhoto](/constructor/pageBlockPhoto/)/[pageBlockVideo](/constructor/pageBlockVideo/) item in that block references a photo or video by ID, resolved against the `photos` and `documents` of the `cached_page`. The instant view itself is not offered as a button (the album media replaces it).
-   `telegram_auction` - Preview of an [auction link »](/api/links/#auction-links) to a [collectible gift auction »](/api/auctions/). The `attributes` field contains a [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/) with the auctioned gift and the auction end date; clients render a button to join the auction, or to view the results once the auction has ended.
-   `telegram_background` - Preview of a [wallpaper deep link »](/api/links/#wallpaper-links) to a [chat wallpaper »](/api/wallpapers/). The wallpaper settings (background colors, gradient rotation, pattern intensity, blur/motion, etc.) are parsed from the deep link in the `url`, not from dedicated fields. Image wallpapers carry the wallpaper image in the `document` field. Pattern wallpapers also use the `document` field, with `application/x-tgwallpattern` or `image/png` as the pattern MIME type; the colors from the `url` are rendered as the pattern background and tint. Solid-color and gradient wallpapers carry no media and are rendered from the colors encoded in the `url`. No `photo` is present. Clients render a button to apply the background.
-   `telegram_bot` - Preview of a [bot link »](/api/links/#bot-links), rendered like a profile preview using the bot's avatar in the `photo` field.
-   `telegram_botapp` - Preview of a [direct Mini App link »](/api/links/#direct-mini-app-links) to a named bot Mini App: the `photo` is the app preview, and clients render a button that opens the Mini App.
-   `telegram_call` - Preview of a [conference link »](/api/links/#conference-links) to a [group call/conference call »](/api/group-calls/); clients render a button to join the call (no `photo`/`document` is present).
-   `telegram_channel` - Preview of a [public username link »](/api/links/#public-username-links) to a channel, using the channel's avatar in the `photo` field; clients render a button to open/join the channel.
-   `telegram_channel_boost` - Preview of a [boost link »](/api/links/#boost-links) to [boost a channel »](/api/boost/), using the channel avatar in the `photo` field; clients render a button to boost the channel.
-   `telegram_channel_direct` - Preview of a [monoforum link »](/api/links/#monoforum-links) to the direct messages of a channel, using the channel avatar in the `photo` field.
-   `telegram_channel_request` - Preview of a [chat invite link »](/api/links/#chat-invite-links) to a channel that has [join requests »](/api/invites/#join-requests) enabled; clients render a "Request to join" button.
-   `telegram_chat` - Preview of a [public username link »](/api/links/#public-username-links) to a basic group, using the group avatar in the `photo` field; clients render a button to open/join the group.
-   `telegram_chat_request` - Preview of a [chat invite link »](/api/links/#chat-invite-links) to a group that has [join requests »](/api/invites/#join-requests) enabled; clients render a "Request to join" button.
-   `telegram_chatlist` - Preview of a [chat folder link »](/api/links/#chat-folder-links) to a [shareable chat folder »](/api/folders/#shared-folders) (no `photo`/`document` is present): clients use the `site_name`, `title` and `description` fields for the preview text, no [WebPageAttribute](/type/WebPageAttribute/) is required, and the action button opens the deep link in `url` to import the folder.
-   `telegram_collection` - Preview of a [gift collection link »](/api/links/#gift-collection-links) to a [gift collection »](/api/gifts/#gift-collections). The `attributes` field contains a [webPageAttributeStarGiftCollection](/constructor/webPageAttributeStarGiftCollection/) with the collection's icon stickers; clients render a button to view the collection.
-   `telegram_community` - Preview of a [chat folder link »](/api/links/#chat-folder-links) to a [shareable chat folder »](/api/folders/#shared-folders), rendered like `telegram_chatlist`.
-   `telegram_giftcode` - Preview of a [premium giftcode link »](/api/links/#premium-giftcode-links) to a [Telegram Premium gift code »](/api/giveaways/); clients render a button to view/redeem the gift code (no `photo`/`document` is present).
-   `telegram_group_boost` - Preview of a [boost link »](/api/links/#boost-links) to [boost a supergroup »](/api/boost/), using the supergroup avatar in the `photo` field; clients render a button to boost the supergroup.
-   `telegram_livestream` - Preview of a [video chat/livestream link »](/api/links/#video-chat-livestream-links) to a [live video stream »](/api/group-calls/), rendered as a video chat preview marked as a livestream; clients render a button to watch the stream.
-   `telegram_megagroup` - Preview of a [public username link »](/api/links/#public-username-links) to a supergroup, using the supergroup avatar in the `photo` field; clients render a button to open/join the supergroup.
-   `telegram_megagroup_request` - Preview of a [chat invite link »](/api/links/#chat-invite-links) to a supergroup that has [join requests »](/api/invites/#join-requests) enabled; clients render a "Request to join" button.
-   `telegram_message` - Preview of a [message link »](/api/links/#message-links) to a single message; clients render a button to open the message. Any `cached_page` instant view is ignored for this type.
-   `telegram_newbot` - Preview of a [managed bot creation request link »](/api/links/#managed-bot-creation-request-links) used to create a new bot; clients render a button to create/register the managed bot.
-   `telegram_nft` - Preview of a [collectible gift link »](/api/links/#collectible-gift-link) to a [collectible (unique) gift »](/api/gifts/#collectible-gifts). The `attributes` field contains a [webPageAttributeUniqueStarGift](/constructor/webPageAttributeUniqueStarGift/) with the unique gift; clients render a button to view the collectible.
-   `telegram_stickerset` - Preview of a [stickerset link »](/api/links/#stickerset-links) to a [sticker or custom emoji set »](/api/stickers/). The `attributes` field contains a [webPageAttributeStickerSet](/constructor/webPageAttributeStickerSet/) with a few preview stickers and the `emojis`/`text_color` flags; clients display the preview stickers and render a button to view the sticker set (or custom emoji set, if the `emojis` flag is set).
-   `telegram_story` - Preview of a [story link »](/api/links/#story-links) to a [story »](/api/stories/). The `attributes` field contains a [webPageAttributeStory](/constructor/webPageAttributeStory/) with the story's peer and ID (and optionally the embedded [storyItem](/constructor/storyItem/)); the preview media and caption are taken from the story, and clients render a button to view it.
-   `telegram_story_album` - Preview of a [story album link »](/api/links/#story-album-links) to a [story album »](/api/stories/): a `photo` (and optional video `document`) cover is present, and clients render a button to view the story album.
-   `telegram_theme` - Preview of a [theme link »](/api/links/#theme-links) to a [theme »](/api/themes/). The `attributes` field contains a [webPageAttributeTheme](/constructor/webPageAttributeTheme/) with the theme file(s) and theme settings; clients render a button to apply the theme.
-   `telegram_user` - Preview of a [public username link »](/api/links/#public-username-links) to a user, rendered like a profile preview using the user's avatar in the `photo` field.
-   `telegram_videochat` - Preview of a [video chat/livestream link »](/api/links/#video-chat-livestream-links) to a [video chat »](/api/group-calls/), rendered as a video chat preview.
-   `telegram_voicechat` - Preview of a [video chat/livestream link »](/api/links/#video-chat-livestream-links) to a [voice chat »](/api/group-calls/), rendered as a (non-video) video chat preview; clients render a button to join the voice chat.
-   `video` - Preview of an external video. If `embed_url`+`embed_type` are set the video is rendered using an embedded player, otherwise the video is contained in the `document` field.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webPage/" class="current_page_link">webPage</a>#e89c45b2 flags:<a href="/type/%23/">#</a> has_large_media:flags.13?true video_cover_photo:flags.14?true id:<a href="/type/long/">long</a> url:<a href="/type/string/">string</a> display_url:<a href="/type/string/">string</a> hash:<a href="/type/int/">int</a> type:flags.0?<a href="/type/string/">string</a> site_name:flags.1?<a href="/type/string/">string</a> title:flags.2?<a href="/type/string/">string</a> description:flags.3?<a href="/type/string/">string</a> photo:flags.4?<a href="/type/Photo/">Photo</a> embed_url:flags.5?<a href="/type/string/">string</a> embed_type:flags.5?<a href="/type/string/">string</a> embed_width:flags.6?<a href="/type/int/">int</a> embed_height:flags.6?<a href="/type/int/">int</a> duration:flags.7?<a href="/type/int/">int</a> author:flags.8?<a href="/type/string/">string</a> document:flags.9?<a href="/type/Document/">Document</a> cached_page:flags.10?<a href="/type/Page/">Page</a> attributes:flags.12?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/WebPageAttribute/">WebPageAttribute</a>&gt; = <a href="/type/WebPage/">WebPage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>has_large_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/constructor/true/">true</a></td><td>Whether the size of the media in the preview can be changed.</td></tr><tr><td><strong>video_cover_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/constructor/true/">true</a></td><td>Represents a custom <a href="/api/files/#video-covers">video cover</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Preview ID</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>URL of previewed webpage</td></tr><tr><td><strong>display_url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Webpage URL to be displayed to the user</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Type of the web page, which influences how the preview is rendered (i.e. which extra action button is offered, where the media is taken from, and which <a href="/type/WebPageAttribute/">WebPageAttribute</a> is present in the <code>attributes</code> field). See <a href="#">above</a> for the list of possible values.</td></tr><tr><td><strong>site_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Short name of the site (e.g., Google Docs, App Store)</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Title of the content</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>Content description</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Photo/">Photo</a></td><td>Image representing the content</td></tr><tr><td><strong>embed_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/string/">string</a></td><td>URL to show in the embedded preview</td></tr><tr><td><strong>embed_type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/string/">string</a></td><td>MIME type of the embedded preview, (e.g., text/html or video/mp4)</td></tr><tr><td><strong>embed_width</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/int/">int</a></td><td>Width of the embedded preview</td></tr><tr><td><strong>embed_height</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/int/">int</a></td><td>Height of the embedded preview</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/int/">int</a></td><td>Duration of the content, in seconds</td></tr><tr><td><strong>author</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/string/">string</a></td><td>Author of the content</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/Document/">Document</a></td><td>Preview of the content as a media file</td></tr><tr><td><strong>cached_page</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/Page/">Page</a></td><td>Page contents in <a href="https://instantview.telegram.org">instant view</a> format</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/WebPageAttribute/">WebPageAttribute</a>&gt;</td><td>Webpage attributes</td></tr></tbody></table>

### Type

[WebPage](/type/WebPage/)

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [WebPageAttribute](/type/WebPageAttribute/)

Webpage attributes

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.

#### [webPageAttributeAiComposeTone](/constructor/webPageAttributeAiComposeTone/)

[Webpage attribute](/type/WebPageAttribute/) attached to a [webPage](/constructor/webPage/) of type `telegram_aicomposetone`, generated when previewing a shared [AI composer tone »](/api/ai/#ai-compose-tones) via an [AI compose tone link »](/api/links/#ai-compose-tone-links).

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [pageBlockCollage](/constructor/pageBlockCollage/)

Collage of media

#### [pageBlockSlideshow](/constructor/pageBlockSlideshow/)

Slideshow

#### [pageBlockPhoto](/constructor/pageBlockPhoto/)

A photo

#### [pageBlockVideo](/constructor/pageBlockVideo/)

Video

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/)

Contains info about a [collectible gift auction »](/api/auctions/) for a [webPage](/constructor/webPage/) preview of an [auction »](/api/auctions/) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_auction`).

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [webPageAttributeStarGiftCollection](/constructor/webPageAttributeStarGiftCollection/)

Contains info about a [gift collection »](/api/gifts/#gift-collections) for a [webPage](/constructor/webPage/) preview of a [gift collection »](/api/gifts/#gift-collections) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_collection`).

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [webPageAttributeUniqueStarGift](/constructor/webPageAttributeUniqueStarGift/)

Contains info about [collectible gift »](/api/gifts/#collectible-gifts) for a [webPage](/constructor/webPage/) preview of a [collectible gift »](/api/gifts/#collectible-gifts) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_nft`).

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.

#### [webPageAttributeStickerSet](/constructor/webPageAttributeStickerSet/)

Contains info about a [stickerset »](/api/stickers/), for a [webPage](/constructor/webPage/) preview of a [stickerset deep link »](/api/links/#stickerset-links) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_stickerset`).

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [webPageAttributeStory](/constructor/webPageAttributeStory/)

Webpage preview of a Telegram story

#### [storyItem](/constructor/storyItem/)

Represents a [story](/api/stories/).

#### [Telegram themes](/api/themes/)

Telegram apps support generating, sharing and synchronizing app themes.

#### [webPageAttributeTheme](/constructor/webPageAttributeTheme/)

Page theme
