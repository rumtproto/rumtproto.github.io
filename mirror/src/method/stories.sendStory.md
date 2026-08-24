---
title: "stories.sendStory"
original: "https://core.telegram.org/method/stories.sendStory"
section: ref
description: "Uploads a Telegram Story."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.sendStory","url":"/method/stories.sendStory/"}]
layout: layout.njk
---

# stories.sendStory

Uploads a [Telegram Story](/api/stories/).

May also be used in a [business connection](/api/bots/connected-business-bots/), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the ID of a controlled business user in `peer`.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatesTooLong/">updatesTooLong</a>#e317af7e = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortMessage/">updateShortMessage</a>#313bc7f8 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortChatMessage/">updateShortChatMessage</a>#4d6deea5 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> from_id:<a href="/type/long/">long</a> chat_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShort/">updateShort</a>#78d4dec1 update:<a href="/type/Update/">Update</a> date:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updatesCombined/">updatesCombined</a>#725b04c3 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq_start:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updates/">updates</a>#74ae4240 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortSentMessage/">updateShortSentMessage</a>#9015e101 flags:<a href="/type/%23/">#</a> out:flags.1?true id:<a href="/type/int/">int</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> media:flags.9?<a href="/type/MessageMedia/">MessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
---functions---
<a href="/method/stories.sendStory/" class="current_page_link">stories.sendStory</a>#737fc2ec flags:<a href="/type/%23/">#</a> pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:<a href="/type/InputPeer/">InputPeer</a> media:<a href="/type/InputMedia/">InputMedia</a> media_areas:flags.5?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MediaArea/">MediaArea</a>&gt; caption:flags.0?<a href="/type/string/">string</a> entities:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; privacy_rules:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPrivacyRule/">InputPrivacyRule</a>&gt; random_id:<a href="/type/long/">long</a> period:flags.3?<a href="/type/int/">int</a> fwd_from_id:flags.6?<a href="/type/InputPeer/">InputPeer</a> fwd_from_story:flags.6?<a href="/type/int/">int</a> albums:flags.8?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/Updates/">Updates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether to add the story to the profile automatically upon expiration. If not set, the story will only be added to the archive, see <a href="/api/stories/">here »</a> for more info.</td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>If set, disables forwards, screenshots, and downloads.</td></tr><tr><td><strong>fwd_modified</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Set this flag when reposting stories with <code>fwd_from_id</code>+<code>fwd_from_story</code>, if the <code>media</code> was modified before reposting.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer to send the story as.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/InputMedia/">InputMedia</a></td><td>The story media.</td></tr><tr><td><strong>media_areas</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MediaArea/">MediaArea</a>&gt;</td><td><a href="/api/stories/#media-areas">Media areas</a> associated to the story, see <a href="/api/stories/#media-areas">here »</a> for more info.</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Story caption.</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a>, if allowed by the <a href="/api/config/#stories-entities"><code>stories_entities</code> client configuration parameter »</a>.</td></tr><tr><td><strong>privacy_rules</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPrivacyRule/">InputPrivacyRule</a>&gt;</td><td><a href="/api/privacy/">Privacy rules</a> for the story, indicating who can or can't view the story.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Unique client message ID required to prevent message resending. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/int/">int</a></td><td>Period after which the story is moved to archive (and to the profile if <code>pinned</code> is set), in seconds; must be one of <code>6 * 3600</code>, <code>12 * 3600</code>, <code>86400</code>, or <code>2 * 86400</code> for Telegram Premium users, and <code>86400</code> otherwise.</td></tr><tr><td><strong>fwd_from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/InputPeer/">InputPeer</a></td><td>If set, indicates that this story is a repost of story with ID <code>fwd_from_story</code> posted by the peer in <code>fwd_from_id</code>.</td></tr><tr><td><strong>fwd_from_story</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/int/">int</a></td><td>If set, indicates that this story is a repost of story with ID <code>fwd_from_story</code> posted by the peer in <code>fwd_from_id</code>.</td></tr><tr><td><strong>albums</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>If set, adds the story to the specified albums.</td></tr><tr><td><strong>music</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/InputDocument/">InputDocument</a></td><td>If set, the audio track to play as background music for the story.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOOSTS_REQUIRED</td><td>The specified channel must first be <a href="/api/boost/">boosted by its users</a> in order to perform this action.</td></tr><tr><td>403</td><td>BOT_ACCESS_FORBIDDEN</td><td>The specified method <em>can</em> be used over a <a href="/api/bots/connected-business-bots/">business connection</a> for some operations, but the specified query attempted an operation that is not allowed over a business connection.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Failure while processing image.</td></tr><tr><td>400</td><td>MEDIA_CAPTION_TOO_LONG</td><td>The caption is too long.</td></tr><tr><td>400</td><td>MEDIA_EMPTY</td><td>The provided media object is invalid.</td></tr><tr><td>400</td><td>MEDIA_FILE_INVALID</td><td>The specified media file is invalid.</td></tr><tr><td>400</td><td>MEDIA_TYPE_INVALID</td><td>The specified media type cannot be used in stories.</td></tr><tr><td>400</td><td>MEDIA_VIDEO_STORY_MISSING</td><td>A non-story video cannot be repubblished as a story (emitted when trying to resend a non-story video as a story using inputDocument).</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>PHOTO_INVALID_DIMENSIONS</td><td>The photo dimensions are invalid.</td></tr><tr><td>400</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr><tr><td>400</td><td>REACTION_INVALID</td><td>The specified reaction is invalid.</td></tr><tr><td>400</td><td>STORIES_TOO_MUCH</td><td>You have hit the maximum active stories limit as specified by the <a href="/api/config/#story-expiring-limit-default"><code>story_expiring_limit_*</code> client configuration parameters</a>: you should buy a <a href="/api/premium/">Premium</a> subscription, delete an active story, or wait for the oldest story to expire.</td></tr><tr><td>400</td><td>STORY_PERIOD_INVALID</td><td>The specified story period is invalid for this account.</td></tr><tr><td>400</td><td>VENUE_ID_INVALID</td><td>The specified venue ID is invalid.</td></tr><tr><td>400</td><td>VIDEO_DURATION_INVALID</td><td>The duration of the specified video is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/)

Invoke a method using a [Telegram Business Bot connection, see here » for more info, including a list of the methods that can be wrapped in this constructor](/api/bots/connected-business-bots/).

Make sure to always send queries wrapped in a `invokeWithBusinessConnection` to the datacenter ID, specified in the `dc_id` field of the [botBusinessConnection](/constructor/botBusinessConnection/) that is being used.

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
