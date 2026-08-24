---
title: "messages.uploadMedia"
original: "https://core.telegram.org/method/messages.uploadMedia"
section: ref
description: "Upload a file and associate it to a chat (without actually sending it to the chat)"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.uploadMedia","url":"/method/messages.uploadMedia/"}]
layout: layout.njk
---

# messages.uploadMedia

Upload a file and associate it to a chat (without actually sending it to the chat)

May also be used in a [business connection](/api/bots/connected-business-bots/), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the business connection ID in the `business_connection_id` parameter.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaEmpty/">messageMediaEmpty</a>#3ded6320 = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaPhoto/">messageMediaPhoto</a>#695150d7 flags:<a href="/type/%23/">#</a> spoiler:flags.3?true photo:flags.0?<a href="/type/Photo/">Photo</a> ttl_seconds:flags.2?<a href="/type/int/">int</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaGeo/">messageMediaGeo</a>#56e0d474 geo:<a href="/type/GeoPoint/">GeoPoint</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaContact/">messageMediaContact</a>#70322949 phone_number:<a href="/type/string/">string</a> first_name:<a href="/type/string/">string</a> last_name:<a href="/type/string/">string</a> vcard:<a href="/type/string/">string</a> user_id:<a href="/type/long/">long</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaUnsupported/">messageMediaUnsupported</a>#9f84f49e = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaDocument/">messageMediaDocument</a>#52d8ccd9 flags:<a href="/type/%23/">#</a> nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?<a href="/type/Document/">Document</a> alt_documents:flags.5?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; video_cover:flags.9?<a href="/type/Photo/">Photo</a> video_timestamp:flags.10?<a href="/type/int/">int</a> ttl_seconds:flags.2?<a href="/type/int/">int</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaWebPage/">messageMediaWebPage</a>#ddf10c3b flags:<a href="/type/%23/">#</a> force_large_media:flags.0?true force_small_media:flags.1?true manual:flags.3?true safe:flags.4?true webpage:<a href="/type/WebPage/">WebPage</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaVenue/">messageMediaVenue</a>#2ec0533f geo:<a href="/type/GeoPoint/">GeoPoint</a> title:<a href="/type/string/">string</a> address:<a href="/type/string/">string</a> provider:<a href="/type/string/">string</a> venue_id:<a href="/type/string/">string</a> venue_type:<a href="/type/string/">string</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaGame/">messageMediaGame</a>#fdb19008 game:<a href="/type/Game/">Game</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaInvoice/">messageMediaInvoice</a>#f6a548d3 flags:<a href="/type/%23/">#</a> shipping_address_requested:flags.1?true test:flags.3?true title:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> photo:flags.0?<a href="/type/WebDocument/">WebDocument</a> receipt_msg_id:flags.2?<a href="/type/int/">int</a> currency:<a href="/type/string/">string</a> total_amount:<a href="/type/long/">long</a> start_param:<a href="/type/string/">string</a> extended_media:flags.4?<a href="/type/MessageExtendedMedia/">MessageExtendedMedia</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaGeoLive/">messageMediaGeoLive</a>#b940c666 flags:<a href="/type/%23/">#</a> geo:<a href="/type/GeoPoint/">GeoPoint</a> heading:flags.0?<a href="/type/int/">int</a> period:<a href="/type/int/">int</a> proximity_notification_radius:flags.1?<a href="/type/int/">int</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaPoll/">messageMediaPoll</a>#4bd6e798 poll:<a href="/type/Poll/">Poll</a> results:<a href="/type/PollResults/">PollResults</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaDice/">messageMediaDice</a>#8cbec07 flags:<a href="/type/%23/">#</a> value:<a href="/type/int/">int</a> emoticon:<a href="/type/string/">string</a> game_outcome:flags.0?<a href="/type/messages.EmojiGameOutcome/">messages.EmojiGameOutcome</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaStory/">messageMediaStory</a>#68cb6283 flags:<a href="/type/%23/">#</a> via_mention:flags.1?true peer:<a href="/type/Peer/">Peer</a> id:<a href="/type/int/">int</a> story:flags.0?<a href="/type/StoryItem/">StoryItem</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaGiveaway/">messageMediaGiveaway</a>#aa073beb flags:<a href="/type/%23/">#</a> only_new_subscribers:flags.0?true winners_are_visible:flags.2?true channels:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; countries_iso2:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; prize_description:flags.3?<a href="/type/string/">string</a> quantity:<a href="/type/int/">int</a> months:flags.4?<a href="/type/int/">int</a> stars:flags.5?<a href="/type/long/">long</a> until_date:<a href="/type/int/">int</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaGiveawayResults/">messageMediaGiveawayResults</a>#ceaa3ea1 flags:<a href="/type/%23/">#</a> only_new_subscribers:flags.0?true refunded:flags.2?true channel_id:<a href="/type/long/">long</a> additional_peers_count:flags.3?<a href="/type/int/">int</a> launch_msg_id:<a href="/type/int/">int</a> winners_count:<a href="/type/int/">int</a> unclaimed_count:<a href="/type/int/">int</a> winners:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; months:flags.4?<a href="/type/int/">int</a> stars:flags.5?<a href="/type/long/">long</a> prize_description:flags.1?<a href="/type/string/">string</a> until_date:<a href="/type/int/">int</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaPaidMedia/">messageMediaPaidMedia</a>#a8852491 stars_amount:<a href="/type/long/">long</a> extended_media:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageExtendedMedia/">MessageExtendedMedia</a>&gt; = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaToDo/">messageMediaToDo</a>#8a53b014 flags:<a href="/type/%23/">#</a> todo:<a href="/type/TodoList/">TodoList</a> completions:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/TodoCompletion/">TodoCompletion</a>&gt; = <a href="/type/MessageMedia/">MessageMedia</a>;
<a href="/constructor/messageMediaVideoStream/">messageMediaVideoStream</a>#ca5cab89 flags:<a href="/type/%23/">#</a> rtmp_stream:flags.0?true call:<a href="/type/InputGroupCall/">InputGroupCall</a> = <a href="/type/MessageMedia/">MessageMedia</a>;
---functions---
<a href="/method/messages.uploadMedia/" class="current_page_link">messages.uploadMedia</a>#14967978 flags:<a href="/type/%23/">#</a> business_connection_id:flags.0?<a href="/type/string/">string</a> peer:<a href="/type/InputPeer/">InputPeer</a> media:<a href="/type/InputMedia/">InputMedia</a> = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>business_connection_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Whether the media will be used only in the specified <a href="/api/bots/connected-business-bots/">business connection »</a>, and not directly by the bot.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The chat, can be <a href="/constructor/inputPeerEmpty/">inputPeerEmpty</a> for bots and <a href="/constructor/inputPeerSelf/">inputPeerSelf</a> for users.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/InputMedia/">InputMedia</a></td><td>File uploaded in chunks as described in <a href="/api/files/">files »</a></td></tr></tbody></table>

### Result

[MessageMedia](/type/MessageMedia/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>CHAT_RESTRICTED</td><td>You can't send messages in this chat, you were restricted.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>The number of file parts is invalid.</td></tr><tr><td>400</td><td>FILE_PART_LENGTH_INVALID</td><td>The length of a file part is invalid.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Failure while processing image.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MEDIA_INVALID</td><td>Media invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>The extension of the photo is invalid.</td></tr><tr><td>400</td><td>PHOTO_INVALID_DIMENSIONS</td><td>The photo dimensions are invalid.</td></tr><tr><td>400</td><td>PHOTO_SAVE_FILE_INVALID</td><td>Internal issues, try again later.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr><tr><td>400</td><td>VOICE_MESSAGES_FORBIDDEN</td><td>This user's privacy settings forbid you from sending voice messages.</td></tr><tr><td>400</td><td>WEBPAGE_CURL_FAILED</td><td>Failure while fetching the webpage with cURL.</td></tr></tbody></table>

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [inputPeerEmpty](/constructor/inputPeerEmpty/)

An empty constructor, no user or chat is defined.

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/)

Invoke a method using a [Telegram Business Bot connection, see here » for more info, including a list of the methods that can be wrapped in this constructor](/api/bots/connected-business-bots/).

Make sure to always send queries wrapped in a `invokeWithBusinessConnection` to the datacenter ID, specified in the `dc_id` field of the [botBusinessConnection](/constructor/botBusinessConnection/) that is being used.
